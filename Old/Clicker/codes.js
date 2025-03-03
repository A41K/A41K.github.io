function resetSave() {
    localStorage.clear();
    score = 0;
    cursorCount = 0;
    cursorCost = 10;
    intervalSpeed = 650;
    cursorScore = 1;
    speedUpgradeCost = 50;
    scoreUpgradeCost = 100;

    document.getElementById('score').textContent = score;
    document.getElementById('buyCursor').textContent = `Buy Cursor (${cursorCount}) - Cost: ${cursorCost}`;
    document.getElementById('upgradeSpeed').textContent = `Increase Cursor Speed - Cost: ${speedUpgradeCost}`;
    document.getElementById('upgradeScore').textContent = `Increase Cursor Score - Cost: ${scoreUpgradeCost}`;

    // Remove all cursors
    document.getElementById('cursorContainer').innerHTML = '';

    alert("Game progress has been reset!");
}
// Define a cheat code function
   function MinusScore() {
    score += 10000; // Add 1000 to the score
    scoreDisplay.textContent = score; // Update the score display
    updateShopButtons(); // Update the shop buttons based on new score
    console.log("Cheat activated! 1000 score added."); // Confirmation in the console
}
