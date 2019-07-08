// Add a <p> with red text that says “Hey I’m red!”
var txt = document.createElement('p');

txt.style.color = 'red';

txt.textContent = 'Hello World!';

document.body.appendChild(txt);

//////////////////////////////////////

// Add an <h3> with blue text that says “I’m a blue h3!”
var heading = document.createElement('h3');

heading.style.color = 'blue';

heading.textContent = 'I’m a blue h3!';

document.body.appendChild(heading);

//////////////////////////////////////

// Add a <div> with a black border and pink background color with the following elements inside of it:
// 1. another <h1> that says “I’m in a div”
// 2. a <p> that says “ME TOO!”
var container = document.createElement('div');

container.setAttribute('style', 'border: 1px solid black; background: pink');

document.body.appendChild(container);

var bigHeading = document.createElement('h1');

bigHeading.textContent = 'I am in a div!';

container.appendChild(bigHeading);

var paragragh = document.createElement('p');

paragragh.textContent = 'ME TOO!'

container.appendChild(paragragh);

///////////////////////////////////

var btn = document.createElement('button');

btn.textContent = 'Click me';

document.body.appendChild(btn);

btn.addEventListener('click', function(e){
  e.target.style.background = 'blue';
})
