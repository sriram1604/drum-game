for (let i = 0; i< document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnInnerSound = this.innerHTML;
        makeSound(btnInnerSound);
        makeAnimation(btnInnerSound);
    });
}

document.addEventListener("keydown",function(event){
    var keyPressedByUser = event.key;
    makeSound(keyPressedByUser);
    makeAnimation(keyPressedByUser);
    
})

function makeSound(key){
    switch (key) {
        case "w":
            var audioForPlay = new Audio("sounds/tom-1.mp3");
            audioForPlay.play();
            break;
        case "a":
            var audioForPlay = new Audio("sounds/tom-2.mp3");
            audioForPlay.play();
            break;
        case "s":
            var audioForPlay = new Audio("sounds/tom-3.mp3");
            audioForPlay.play();
            break;
        case "d":
            var audioForPlay = new Audio("sounds/tom-4.mp3");
            audioForPlay.play();
            break;  
        case "j":
            var audioForPlay = new Audio("sounds/snare.mp3");
            audioForPlay.play();
            break; 
        case "k":
            var audioForPlay = new Audio("sounds/crash.mp3");
            audioForPlay.play();
            break;
        case "l":
            var audioForPlay = new Audio("sounds/kick-bass.mp3");
            audioForPlay.play();
            break;     
        default:
            alert("no");
            break;
    }
}
function makeAnimation(keyVal){
    var activeListener = document.querySelector("."+keyVal);
    activeListener.classList.add("pressed");
    
    setTimeout(function(){
        activeListener.classList.remove("pressed");
    },100);




}







