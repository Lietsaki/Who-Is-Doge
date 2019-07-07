// SELECT 

var sec0 = document.getElementsByClassName("opensec0");

var sec1 = document.getElementById("opensec1");

var sec2 = document.getElementById("opensec2");

var sec3 = document.getElementById("opensec3");

var sec4 = document.getElementById("opensec4");

var sec5 = document.getElementById("opensec5");

var section = document.querySelectorAll(".s2")

// PHRASES BOOLEAN LOGIC

var startp1 = false;

var startp2 = false;

var startp3 = false;

var startp4 = false;

var startp5 = false;

var startp6 = false;

// SECTION FUNCTIONS

function addSection0(){
    section[0].classList.remove("disappear");   
    startp1 = true;  
    return startp1;
}

function addSection1(){
    section[1].classList.remove("disappear");
    startp2 = true; 
    return startp2;
}

function addSection2(){
    section[2].classList.remove("disappear");
    startp3 = true; 
    return startp3;
}

function addSection3(){
    section[3].classList.remove("disappear");
    startp4 = true; 
    return startp4;
}

function addSection4(){
    section[4].classList.remove("disappear");
    startp5 = true; 
    return startp5;
}

function addSection5(){
    section[5].classList.remove("disappear");
    startp6 = true; 
    return startp6;
}

// ADD EVENTS

sec0[0].addEventListener("click", addSection0);

sec1.addEventListener("click", addSection1);

sec2.addEventListener("click", addSection2);

sec3.addEventListener("click", addSection3);

sec4.addEventListener("click", addSection4);

sec5.addEventListener("click", addSection5);

// MEME FUNCTIONS - GENERATE RANDOM NUMBER AND COLOR - REMOVE THE "DISAPPEAR" CLASS FROM PHRASE 1

function getRandomDeg() {
    min = 10;
    max = 350;
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Wait 3 seconds until adding a new doge phrase


var l = 0;                     

function addPhrase() {           
   setTimeout(function () {    
    phrase1Arr[l].classList.remove("disappear");         
      l++;    

      if (l < 10 && startp1 === true) {            
         addPhrase();          
      } 
   }, 1800)
}

var z = 10;

function addPhrase2() {           
    setTimeout(function () {    
     phrase1Arr[z].classList.remove("disappear");         
       z++;    
 
       if (z < 20 && startp2 === true) {            
          addPhrase2();          
       } 
    }, 1800)
 }

 x = 20;

 function addPhrase3() {           
    setTimeout(function () {    
     phrase1Arr[x].classList.remove("disappear");         
       x++;    
 
       if (x < 30 && startp3 === true) {            
          addPhrase3();          
       } 
    }, 1800)
 }

 c = 30;

 function addPhrase4() {           
    setTimeout(function () {    
     phrase1Arr[c].classList.remove("disappear");         
       c++;    
 
       if (c < 40 && startp4 === true) {            
          addPhrase4();          
       } 
    }, 1800)
 }

 v = 40;

 function addPhrase5() {           
    setTimeout(function () {    
     phrase1Arr[v].classList.remove("disappear");         
       v++;    
 
       if (v < 50 && startp1 === true) {            
          addPhrase5();          
       } 
    }, 1800)
 }

 b = 50;

 function addPhrase6() {           
    setTimeout(function () {    
     phrase1Arr[b].classList.remove("disappear");         
       b++;    
 
       if (b < 60 && startp5 === true) {            
          addPhrase6();          
       } 
    }, 1800)
 }

     
  // MEME SELECT & SET PROPERTIES TO THE CLASS "PHRASE1" and the DIVs for the scrolling effect
  
  // Phrase1
  var phrase1 = document.querySelectorAll(".phrase1");
  var phrase1Arr = Array.from(phrase1);

  var div1 = document.querySelector(".thememe");

  // Loop through the phrase1 array to add the random properties to every element with the class "phrase1"

  for(var i = 0; i < phrase1Arr.length; i++){
    phrase1Arr[i].style.setProperty("--rotate", getRandomDeg() + "deg");

    phrase1Arr[i].style.setProperty("--positionx", getRandomDeg() + "px");
  
    phrase1Arr[i].style.setProperty("--positiony", getRandomDeg() + "px");
  
    phrase1Arr[i].style.setProperty("--color", getRandomColor() );
  
}
  
// ADD LISTENERS FOR EVERY SECTION TO SHOW THE PHRASES

sec0[0].addEventListener("click", addPhrase);

sec1.addEventListener("click", addPhrase2);

sec2.addEventListener("click", addPhrase3);

sec3.addEventListener("click", addPhrase4);

sec4.addEventListener("click", addPhrase5);

sec5.addEventListener("click", addPhrase6);

// ANIMATE THE INITIAL BUTTON

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }



  
