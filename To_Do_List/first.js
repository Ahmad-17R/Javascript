const addTask = () => {
    let taskContent = document.querySelector("textarea").value;
   
    if(taskContent!=""){

        let concernedList = document.querySelector("ul"); // Assuming ".list" is the class of the list element
        let availabletasks=concernedList.getElementsByTagName("li");
        let size=availabletasks.length;
        let task = document.createElement("li");
        task.innerHTML = `<li id=${size} ><i>${taskContent}</i>\t<button id=${size} class="button" onclick="removetask(this.id)">remove</button></li>`;
        concernedList.appendChild(task);
        document.querySelector("textarea").value="";
    }
    else{
        alert("Cannot insert empty task!!");
    }
}

 // Call the function to see if it works
const removetask=(id)=>{
    let concernedList = document.querySelector("ul"); // Assuming ".list" is the class of the list element
    let availabletasks=concernedList.getElementsByTagName("li");
    let size=availabletasks.length;
    let taskToRemove=null;
    for(let idx=0;idx<size;idx++){
        if(availabletasks[idx].getAttribute("id")==id){
        taskToRemove=availabletasks[idx];
        
        }
    }
    list_li=taskToRemove.parentNode;
    list_ul=list_li.parentNode;
    list_ul.removeChild(list_li);
}


