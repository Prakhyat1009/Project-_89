player1_score=0;
player2_score=0;

document.getElementById("score_1").innerHTML=player1_score;
document.getElementById("score_2").innerHTML=player2_score;
name1=localStorage.getItem("Player1");
name2=localStorage.getItem("Player2");
document.getElementById("name_1").innerHTML=name1+" : ";
document.getElementById("name_2").innerHTML=name2+" : ";
document.getElementById("question_turn").innerHTML=name1;
document.getElementById("answer_turn").innerHTML=name2;


function send(){
number1= document.getElementById("number_1").value;
number2= document.getElementById("number_2").value;
answer=parseInt(number1) * parseInt(number2);

question_number= "<h4>" + number1 + "X" + number2 +"</h4>";
input_box= "<br>Answer : <input type=`text` id=`input_check_box`>";
check_button = "<br><br><button class=`btn btn-primary`>Check</button>"
row= question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;

document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}