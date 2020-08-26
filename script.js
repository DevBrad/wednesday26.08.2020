function showcomponent__1(){

    const component__1 = document.getElementById('container_component__1')
     component__1.innerHTML = `

      <input id="content_input" type="text" placeholder="insert text here">

      <button id="addContent_component__1">add content</button>

      <ul id="component__1"></ul>
      `
 }

 showcomponent__1()


 const addContent_btn = document.getElementById('addContent_component__1')

 addContent_btn.addEventListener('click',addContent)

 function addContent(){

     const ul = document.getElementById('component__1')
     const li = document.createElement('li')
     ul.appendChild(li)



 }