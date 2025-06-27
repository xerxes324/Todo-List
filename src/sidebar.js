import { active, listtaskmap } from ".";
import { initializelist } from "./lists";
import { addDays, format } from "date-fns";

const getSidebarHeader = () => document.getElementById("sidebar-headers");

export const mylistheading = ()=>{

    const mylistsheading = document.getElementById("mylist-heading");
    const mylistsheadingh1 = document.createElement("h1");
    mylistsheadingh1.textContent = "My Lists";
    mylistsheadingh1.classList.add("mylistsheader-style")
    mylistsheading.appendChild(mylistsheadingh1);
}

export const createhomebutton = ()=>{

    const sidebarheader = getSidebarHeader();
    const homebutton = document.createElement("button");
    homebutton.textContent = "Home";
    homebutton.classList.add("homebutton");
    sidebarheader.appendChild(homebutton);
    return {homebutton};
}

export const createtodaybutton = ()=>{
    const sidebarheader = getSidebarHeader();
    const todaybutton = document.createElement("button");
    todaybutton.textContent = "Today";
    todaybutton.classList.add("todaybutton");
    sidebarheader.appendChild(todaybutton);
    return {todaybutton}
}

export const createweekbutton = ()=>{
    const sidebarheader = getSidebarHeader();
    const thisweekbutton = document.createElement("button");
    thisweekbutton.textContent = "This Week";
    thisweekbutton.classList.add("thisweekbutton");
    sidebarheader.appendChild(thisweekbutton);
    return {thisweekbutton};
}

export const createlistbutton= ()=>{
    const newlistbar = document.getElementById("newlist")
    const newlistbutton = document.createElement("button");
    newlistbutton.textContent = "New List +";
    newlistbutton.classList.add("newlistbutton");
    newlistbar.appendChild(newlistbutton);
    return {newlistbutton}
}


//event listener initialize

export const homebuttonEL = (homebtn)=>{
    homebtn.addEventListener("click",()=>{
        const tasksdiv = document.getElementById("tasks");
        tasksdiv.textContent = "";
        listtaskmap.forEach((value,key) => {
            for ( let i = 0 ; i < value.length ; i++){
                tasksdiv.append(value[i].taskcontainer);
            }
        });
    })
}

export const todaybuttonEL = (todaybtn) => {
    todaybtn.addEventListener("click",()=>{
        const today = new Date();
        const taskdiv = document.getElementById("tasks");
        taskdiv.textContent = "";
        listtaskmap.forEach((value,key)=> {
            for ( let i = 0 ; i < value.length ; i++){
                if(value[i].datefield.value === format(today,'yyyy-MM-dd')){
                    taskdiv.append(value[i].taskcontainer);
                }
            }
        });
    })
}

export const weekbuttonEL = (weekbtn)=>{
    weekbtn.addEventListener("click",()=>{
        const today = new Date();
        const datearray = [];

        for ( let i = 0; i < 7 ; i ++){
            const day = addDays(today,i);
            const formatteddate = format(day, 'yyyy-MM-dd');
            datearray.push(formatteddate);
        }

        const taskdiv = document.getElementById("tasks");
        taskdiv.textContent = "";
        listtaskmap.forEach((value,key)=> {
            for ( let i = 0 ; i < value.length; i ++){
                if ( datearray.includes(value[i].datefield.value)){
                    taskdiv.append(value[i].taskcontainer);
                }
            }
        });
    })
}

export const newlistbuttonEL = (newlistbutton) =>{
    newlistbutton.addEventListener("click",()=>{
        const sidebarlist = new initializelist();
        setuplisthandler(sidebarlist);
        deletelistbuttonlistener(sidebarlist);
        savelistbuttonlistener(sidebarlist);
    })
}


const deletelistbuttonlistener = (sidebarlist) =>{
    sidebarlist.deletelistbtn.addEventListener("click",()=>{
        
        sidebarlist.listbox.remove();
        listtaskmap.forEach((value,key) => {
            if ( key === sidebarlist.id){
                if ( active[0] === key){
                    const tasksdiv = document.getElementById("tasks");
                    tasksdiv.textContent = "";
                }
                listtaskmap.delete(key);
            }
        });
    })
}

const savelistbuttonlistener = (sidebarlist) =>{
    sidebarlist.savelistbtn.addEventListener("click",()=>{

        const savedlistbox = sidebarlist.listbox;
        savedlistbox.classList.remove("newlist-style");
        savedlistbox.classList.add("savedlistbox-style");
        savedlistbox.textContent = "";

        const listnameh1 = document.createElement("h1");
        listnameh1.textContent = sidebarlist.listinput.value;
        const listeditbtn = document.createElement("button");
        listeditbtn.textContent = "Edit";
        listeditbtn.classList.add("listeditbutton-style")
        savedlistbox.append(listnameh1,listeditbtn);

        editlist(sidebarlist,listeditbtn);
    })
}


const editlist = (sidebarlist,listeditbtn) =>{
    
    listeditbtn.addEventListener("click",()=>{
        const listswrapper = document.getElementById("lists");
        const oldlist = sidebarlist.listbox;
        const newlist = sidebarlist.createlist(sidebarlist.listinput.value);
        listswrapper.insertBefore(newlist,oldlist);
        savelistbuttonlistener(sidebarlist);
        deletelistbuttonlistener(sidebarlist);
        oldlist.remove();
    })

}


const setuplisthandler = (sidebarlist) =>{
    const listbox = sidebarlist.listbox;
    listbox.addEventListener("click",()=>{
        // console.log("hello");
        active[0] = sidebarlist.id;
        displaytasks(sidebarlist);
    })
}

const displaytasks = (sidebarlist) => {

    const tasksdiv = document.getElementById("tasks");
    tasksdiv.textContent = "";
    listtaskmap.forEach((value,key) => {
        if ( key === sidebarlist.id ){
            for ( let i = 0 ; i < value.length ; i++ ) {
                console.log("yesboss");
                tasksdiv.append(value[i].taskcontainer);
            }
        }
    });

}