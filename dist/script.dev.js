"use strict";

function showcomponent__1() {
  var component__1 = document.getElementById('container_component__1');
  component__1.innerHTML = "\n\n      <input id=\"content_input\" type=\"text\" placeholder=\"insert text here\">\n\n      <button id=\"addContent_component__1\">add content</button>\n\n      <ul id=\"component__1\"></ul>\n      ";
}

showcomponent__1();
var addContent_btn = document.getElementById('addContent_component__1');
addContent_btn.addEventListener('click', addContent);

function addContent() {
  var ul = document.getElementById('component__1');
  var li = document.createElement('li');
  var input = document.getElementById('content_input').value;
  li.setAttribute('class', 'items');

  if (input == '') {
    alert('Please fill out the field');
  } else {
    li.textContent = input;
    ul.appendChild(li);
  }
}