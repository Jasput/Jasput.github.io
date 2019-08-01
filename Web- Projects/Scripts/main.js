let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'C:\Users\User\Desktop\Web- Projects\Images\Cat 3.jpg') {
      myImage.setAttribute ('src','C:\Users\User\Desktop\Web- Projects\Images\Cat 3.jpg');
    } else {
      myImage.setAttribute ('src','C:\Users\User\Desktop\Web- Projects\Images\Stretchcat.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Cats love chicken, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are a fatty cat, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}