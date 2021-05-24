var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!!!';

var myImage = document.querySelector('img');

myImage.onclick = function() { 

    let mySrc = myImage.getAttribute('src');
    
    if(mySrc === 'images/self_image.jpg') {
     
         
        myImage.setAttribute('src','images/self_image2.jpg');
    } else {
        
        myImage.setAttribute('src','images/self_image.jpg');
        
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  

  myButton.onclick = function() {
    setUserName();
  }