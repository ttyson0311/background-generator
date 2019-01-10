// get elements
const css = document.querySelector('h3')
const body = document.querySelector('body')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')


//change background color
let backgroundChange = function(){
  body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
}

//event listener for color1
color1.addEventListener('input', function(){
backgroundChange();
//add color value to page
css.innerHTML = "Color:" + " " + color1.value + " " + ", " + color2.value;

})
//event listener for color2
color2.addEventListener('input', function(){
 backgroundChange();
 css.innerHTML = "Color:" + " " + color1.value + " " + ", " + color2.value;
})

