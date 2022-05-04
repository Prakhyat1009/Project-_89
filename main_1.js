function save(){
    name1=document.getElementById("player1_input").value;
    name2=document.getElementById("player2_input").value;
    localStorage.setItem("Player1",name1);
    localStorage.setItem("Player2",name2);
    window.location="math.html"
    }