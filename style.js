function dark(){
    let color =document.getElementById('demo').style.backgroundColor;
   
 if(color=="black"){
  document.getElementsByClassName("btn")[0].innerHTML="dark"
  document.getElementById("demo").style.backgroundColor="white"
 document.getElementById("demo").style.color="black"
 }else{
     document.getElementsByClassName("btn")[0].innerHTML="white"
     document.getElementById("demo").style.backgroundColor="black"
     document.getElementById("demo").style.color="white"
 }
 }
 
 // aiguro h1,input,button ar kaj 
 
 const input= document.getElementById("taskInput")
 const addBtn= document.getElementById("addBtn")
 const taskList= document.getElementById("taskList")
 addBtn.addEventListener("click",addEvent)
 function addEvent(){
    const task =input.value.trim(); //trim ar kaj space ar dorkar nai
    if(task==="")return;
    const li = document.createElement("li");
    li.innerHTML=`${task}<button id="dleteBtn">Delete</button>`;
    taskList.appendChild(li);
    input.value="";
    li.addEventListener("click",()=>completeTask(li));
    li.querySelector("#dleteBtn").addEventListener("click",()=> deleteEvent(li))
    // console.log(task)
 }
 function completeTask(li){
    li.style.textDecoration="line-through"
    li.style.color="red"
 // console.log(li)
 }
 function deleteEvent(li){
    
    li.remove()
 }
 // console.log(input,addBtn,taskList)