import {todo} from "./createtodo.js"
export const tasksheading = ()=>{
    const taskshead = document.getElementById("tasksheading");
    const tasksheadh2 = document.createElement("h2");
    tasksheadh2.textContent = "Tasks";
    tasksheadh2.classList.add("tasksheading");
    taskshead.appendChild(tasksheadh2);
}

export const createnewtaskbutton = ()=>{
    const newtaskdiv = document.getElementById("newtask");
    const newtaskbutton = document.createElement("button");
    newtaskbutton.textContent = "Add Task +"
    newtaskbutton.classList.add("newtaskbutton");
    newtaskdiv.append(newtaskbutton);
    return {newtaskbutton}
}

// event listener for task button

export const newtaskbuttonEL = (newtaskbutton)=>{
    newtaskbutton.addEventListener("click",()=>{
        const task = new todo();
        tasklisteners(task);
        savebuttonlistener(task);
        deletebuttonlistener(task);
    })
}

export const tasklisteners = (task)=>{
    task.titlefield.addEventListener("input",(e)=>{
        task.title = e.target.value;
        console.log(task.title);
    })

    task.descriptionbox.addEventListener("input",(e)=>{
        task.desc = e.target.value;
        console.log(task.desc);
    })
    
    task.datefield.addEventListener("input",(e)=>{
        task.date = e.target.value;
        console.log(task.date);
    })
}


export const savebuttonlistener = (task)=>{

    // console.log(task.savebutton);
    task.savebutton.addEventListener("click",()=>{

        task.taskcontainer.textContent = "";
        task.taskcontainer.classList.remove("taskcontainer-style");
        task.taskcontainer.classList.add("savedtask");

        const savedtitle = document.createElement("p");
        savedtitle.textContent = task.titlefield.value;
        savedtitle.classList.add("savedtitle-style");
        if ( savedtitle.textContent === ""){
            savedtitle.textContent = "Title";
        }
        
        const saveddesc = document.createElement("p");
        saveddesc.classList.add("saveddesc-style")
        saveddesc.textContent = task.descriptionbox.value;
        if ( saveddesc.textContent === ""){
            saveddesc.textContent = "Description";
        }
        const saveddate = document.createElement("p");
        saveddate.textContent = task.datefield.value;
        saveddate.classList.add("saveddate-style");
        if ( saveddate.textContent === ""){
            saveddate.textContent = "Date";
        }
        task.taskcontainer.append(savedtitle,saveddesc,saveddate);

        const editbutton = document.createElement("button");
        editbutton.textContent = "Edit";
        editbutton.classList.add("editbutton-style");
        task.taskcontainer.append(editbutton);
        editbuttonlistener(editbutton,task);
    })
}

export const deletebuttonlistener = (task)=>{
    task.deletebutton.addEventListener("click",()=>{
        console.log('helo')
        task.taskcontainer.remove();
    })
}

export const editbuttonlistener = (editbutton,task)=>{
    editbutton.addEventListener("click",()=>{
        edittask(task);
    })
}

const edittask = (task)=>{
    const maindiv = document.getElementById("tasks");
    const oldtask  = task.taskcontainer; 
    const newtask = task.createform(task.titlefield.value,task.datefield.value,task.descriptionbox.value);

    tasklisteners(task);
    savebuttonlistener(task);
    deletebuttonlistener(task);
    maindiv.insertBefore(newtask, oldtask);
    oldtask.remove();
}