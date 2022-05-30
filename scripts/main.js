// select the h1 tag and change it
var myHeading = 
    document.querySelector('h1');
    myHeading.textContent = 'Hello World!';



// click the image change the picture
var myImage = document.querySelector('img')
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.jpeg'){
        myImage.setAttribute('src', 'images/image2.jpeg')
    }
    else{
        myImage.setAttribute('src', 'images/image1.jpeg')
    }
}

// click button show the unique message
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')
function setUsername(){
    var myName = prompt('Input your name');
    if(!myName || myName === null){
        setUsername();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUsername();
}
else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}
myButton.onclick = function(){
    setUsername();
}