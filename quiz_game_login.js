player1id = document.getElementById("player1id");
player2id = document.getElementById("player2id");
function addUser(){
    localStorage.setItem("player1id", player1id);
    localStorage.setItem("player2id", player2id);
    window.location = "quiz.game.page.html";
}