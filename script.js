function showcomponent__1(){

    const component__1 = document.getElementById('container_component__1')

     component__1.innerHTML = `

      <input id="content_input" type="text" placeholder="insert text here">

      <button id="addContent_component__1">add content</button>

      <ul id="component__1"></ul>

      <i class="fa fa-trash" id="delete_content" title="delete text"></i>
      `
 }

 showcomponent__1()


 const addContent_btn = document.getElementById('addContent_component__1')

 addContent_btn.addEventListener('click',addContent)

 function addContent(){

     const ul = document.getElementById('component__1')
     const li = document.createElement('li')
     let input = document.getElementById('content_input').value
     li.setAttribute('class','items')


    if(input == ''){

        alert('Please fill out the field')

    } else {

     li.textContent = input
     ul.appendChild(li)

     setTimeout(() =>{

        document.getElementById('content_input').value = ""

     },200)

 }
}


const deleteIcon = document.getElementById('delete_content')
deleteIcon.addEventListener('click',deleteContent)

function deleteContent(){

//  console.log('is working')
const li = document.querySelector('.items')

if(li){

    li.remove()
    
} else {

    alert('Please enter a text')

 }
}