function myData(){
    let animal = document.getElementById("animal").value;
    let another_animal = document.getElementById("another_animal").value;
    let yes = document.getElementById("yes").value;
    let speed = document.getElementById("speed").value;
    let more_animal = document.getElementById("more_animal").value;
    let adj = document.getElementById("adj").value;
    let quote = document.getElementById("quote").value;
    let verb = document.getElementById("verb").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;


    localStorage.setItem("animal", animal);
    localStorage.setItem("another_animal", another_animal);
    localStorage.setItem("yes", yes);
    localStorage.setItem("speed", speed);
    localStorage.setItem("more_animal", more_animal);
    localStorage.setItem("adj" , adj);
    localStorage.setItem("quote", quote);
    localStorage.setItem("verb",verb);
    localStorage.setItem("number", number);
    localStorage.setItem("message", message);
} 

function injectData(){
document.getElementById("sanimal").innerHTML = localStorage.getItem("animal");
document.getElementById("sanimal1").innerHTML = localStorage.getItem("animal");
document.getElementById("sanimal2").innerHTML = localStorage.getItem("animal");
document.getElementById("sanimal_3").innerHTML = localStorage.getItem("animal");
document.getElementById("sanimal_4").innerHTML = localStorage.getItem("animal");
document.getElementById("sanimal5").innerHTML = localStorage.getItem("animal");
document.getElementById("sanimal_6").innerHTML = localStorage.getItem("animal");
document.getElementById("sanimal_7").innerHTML = localStorage.getItem("animal");


document.getElementById("sanother_animal").innerHTML =localStorage.getItem("another_animal");
document.getElementById("sanother_animal1").innerHTML =localStorage.getItem("another_animal");
document.getElementById("sanother_animal2").innerHTML =localStorage.getItem("another_animal");
document.getElementById("sanother_animal3").innerHTML =localStorage.getItem("another_animal");
document.getElementById("sanother_animal_4").innerHTML =localStorage.getItem("another_animal");
document.getElementById("sanother_animal5").innerHTML =localStorage.getItem("another_animal");
document.getElementById("sanother_animal6").innerHTML =localStorage.getItem("another_animal");
document.getElementById("sanother_animal_7").innerHTML =localStorage.getItem("another_animal");
document.getElementById("sanother_animal_8").innerHTML =localStorage.getItem("another_animal");


document.getElementById("syes").innerHTML =localStorage.getItem("yes");
document.getElementById("s_speed").innerHTML = localStorage.getItem("speed");

document.getElementById("s_adj").innerHTML = localStorage.getItem("adj");

document.getElementById("s_more_animal").innerHTML =localStorage.getItem("more_animal");

document.getElementById("s_quote").innerHTML = localStorage.getItem("quote");

document.getElementById("s_verb").innerHTML = localStorage.getItem("verb");
document.getElementById("s_verb1").innerHTML = localStorage.getItem("verb");
document.getElementById("s_verb_3").innerHTML = localStorage.getItem("verb");

document.getElementById("s_number").innerHTML = localStorage.getItem("number");

document.getElementById("msg").innerHTML = localStorage.getItem("message");
}