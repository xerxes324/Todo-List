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