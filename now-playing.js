export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

  try {
    const token = await getAccessToken();

    // 1. Check if something is playing right now
    const nowRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (nowRes.status === 200) {
      const data = await nowRes.json();
      if (data && data.item) {
        return res.status(200).json(formatTrack(data.item, data.is_playing));
      }
    }

    // 2. Nothing playing right now — fall back to the most recently played track
    const recentRes = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const recentData = await recentRes.json();
    const track = recentData?.items?.[0]?.track;

    if (!track) {
      return res.status(200).json({ isPlaying: false, track: null });
    }

    return res.status(200).json(formatTrack(track, false));
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch Spotify data' });
  }
}

async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;
  const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN
    })
  });

  const data = await response.json();
  if (!data.access_token) throw new Error('Could not refresh Spotify token');
  return data.access_token;
}

function formatTrack(item, isPlaying) {
  return {
    isPlaying: !!isPlaying,
    track: item.name,
    artist: item.artists.map(a => a.name).join(', '),
    albumArt: item.album?.images?.[0]?.url || '',
    url: item.external_urls?.spotify || '#'
  };
}