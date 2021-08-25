function gamePageOnload() {
    user1 = localStorage.getItem("Player_1_Name");
    user2 = localStorage.getItem("Player_2_Name");
    user1Score = "0";
    user2Score = "0";
    console.log(user1);
    console.log(user2);
    document.getElementById("user2Name").innerHTML = user2 + ": ";
    document.getElementById("user1Name").innerHTML = user1 + ": ";
    document.getElementById("user1Score").innerHTML = user1Score;
    document.getElementById("user2Score").innerHTML = user2Score;
}