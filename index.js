//Button Press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    }
    
    //Detects Keyboard Down 
    document.addEventListener("keydown",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    })
    
    function makeSound(key){
    
        switch (key) {
            case "w":
                var audio = new Audio("./sounds/tom-1.mp3"); //Constructor= new adds the variable in a object
                audio.play();
                break;
    
            case "a":
                var audio = new Audio("./sounds/tom-2.mp3"); //Constructor= new adds the variable in a object
                audio.play();
                break;
    
            case "s":
                var audio = new Audio("./sounds/tom-3.mp3"); //Constructor= new adds the variable in a object=Audio
                audio.play();
                break;
    
            case "d":
                var audio = new Audio("./sounds/tom-4.mp3"); //Constructor= new adds the variable in a object
                audio.play();
                break;
    
            case "j":
                var audio = new Audio("./sounds/snare.mp3"); //Constructor= new adds the variable in a object
                audio.play();
                break;
    
            case "l":
                var audio = new Audio("./sounds/kick-bass.mp3"); //Constructor= new adds the variable in a object
                audio.play();
                break;
        
            default: console.log(buttonInnerHTML)
                break;
        }
    }
    
    function buttonAnimation(currentkey){
         var activeButton = document.querySelector("."+currentkey);
         activeButton.classList.add("pressed");
         setTimeout(function() {
            activeButton.classList.remove("pressed");
         }, 100); //it is milliseconds = 1 sec
    }
    
    //function without name is anonymous function
    //when click occurs then function is called and () calls the function immediately because it is a straight up call method
    //When the target is called so addeventlistener does the work in this button is called.
    
    