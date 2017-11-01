var timer;
var numberOfLevels = 2;
var counter;
var number;
var lvlcounter = 1;

// var easy = 3;
// var medium = 6;
// var hard = 10;

document.getElementById("myform").style.visibility = "hidden";
function init()
{
  counter = numberOfLevels;
  document.getElementById('counter').innerHTML = counter-1;
  document.getElementById("counter").style.visibility = "visible";
  timer = setInterval(decTime, 1000);
  document.getElementById("randomNumber").style.visibility = "visible";
  document.getElementById("yes").style.visibility = "hidden";
  document.getElementById("myform").style.visibility = "hidden";
  number = Math.floor(Math.random()*1000 + 1000);
  document.getElementById("randomNumber").innerHTML = number;
}
function clearOverlay(){
  document.getElementById("overlay").style.visibility = "hidden";
}

function decTime()
{
  counter--;
  console.log("Counter: "+ counter);

  document.getElementById('counter').innerHTML = counter;
  if(counter <= 0)
  {
    clearInterval(timer);
    counter = numberOfLevels--;
    document.getElementById("counter").style.visibility = "hidden";
    document.getElementById("randomNumber").style.visibility = "hidden";
    document.getElementById("myform").style.visibility = "visible";
    return;
  }
}

function lvlcount(){
    lvlcounter++;
    return lvlcounter
}


function game(user, number){
    if (user == number) {
      document.getElementById("userAnswer").innerHTML= "Congratulations, you move onto the next level!!";
      document.getElementById("lvl").innerHTML= lvlcounter++;
        setTimeout(function(){
          document.getElementById("userAnswer").innerHTML= "";
          document.getElementById("yes").style.visibility = "visible";
        },3000);

    }else if (user != number) {
        document.getElementById("userAnswer").innerHTML= "sorry please guess again";
    }
}

document.getElementById('myform').addEventListener('submit', function(e){
    var user = document.getElementById("userinput").value;

    game(user, number);
    document.getElementById('userinput').value = "";

    e.preventDefault();
});
