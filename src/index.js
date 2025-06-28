import "./mainstyles.css";
import "./sidebar.css";
import "./maincolumn.css"
import {mylistheading,createhomebutton,createtodaybutton,createweekbutton,homebuttonEL,weekbuttonEL,todaybuttonEL,createlistbutton, newlistbuttonEL} from "./sidebar.js";
import { tasksheading,createnewtaskbutton,newtaskbuttonEL} from "./maincolumn.js";
export const active = [];
export const listtaskmap = new Map();
import { getfromlocalstorage } from "./storage.js";

window.addEventListener("DOMContentLoaded",()=>{
    getfromlocalstorage();

    listtaskmap.forEach((value,key) => {
        const taskdiv = document.getElementById("tasks");
        const listdiv = document.getElementById("lists");
        
        for ( let i = 0 ; i < value.length ; i++){
            taskdiv.append(value[i].taskcontainer);
        }
    });

})

mylistheading();
const {homebutton} = createhomebutton();
const {todaybutton} = createtodaybutton();
const {thisweekbutton}= createweekbutton();
const {newlistbutton} = createlistbutton();
const {newtaskbutton} = createnewtaskbutton();


homebuttonEL(homebutton);
todaybuttonEL(todaybutton);
weekbuttonEL(thisweekbutton);
newlistbuttonEL(newlistbutton);
newtaskbuttonEL(newtaskbutton);
tasksheading();

