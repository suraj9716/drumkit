function handleclick() {
    var buttoninnerhtml = this.innerHTML;

    makesound(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
}
var noofbutton = document.querySelectorAll(".drum").length;

for (let i = 0; i < noofbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
    
}

document.addEventListener("keydown", function(event){
    
    makesound(event.key);
    buttonanimation(event.key);

});

function makesound(key){

    
switch (key) {
    case "w":
        var crash = new Audio("crash.mp3");
        crash.play();   
        break;

        case "a":
        var kickbass = new Audio("kick-bass.mp3");
        kickbass.play();   
        break;

        case "s":
            var snare = new Audio("snare.mp3");
            snare.play();   
            break;

        case "d":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();   
            break;
            
        case "j":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play();   
                break;
        
        case "k":
        var tom3 = new Audio("tom-3.mp3");
        tom3.play();   
        break; 

        case "l":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();   
            break;
    
                

    default: console.log(buttoninnerhtml);
        break;
}
}

function buttonanimation(currentkey){
    var activebutton= document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout (function(){
        activebutton.classList.remove("pressed");
    },100);
}