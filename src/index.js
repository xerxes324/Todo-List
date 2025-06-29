import "./mainstyles.css";
import "./sidebar.css";
import "./maincolumn.css"
import {mylistheading,createhomebutton,createtodaybutton,createweekbutton,homebuttonEL,weekbuttonEL,todaybuttonEL,createlistbutton, newlistbuttonEL} from "./sidebar.js";
import { tasksheading,createnewtaskbutton,newtaskbuttonEL} from "./maincolumn.js";
export const active = [];
export const listtaskmap = new Map();
import { getfromlocalstorage } from "./storage.js";

window.addEventListener("DOMContentLoaded",()=>{
    const temp = getfromlocalstorage();
    console.log(temp); // works , returns Array(3) when 3 newtasks
    // const mapsize = temp.size();
    console.log("heythere")
    console.log(typeof temp, "is temp")
    if (temp){
        temp.forEach((value,key) => {
            console.log(value);
        });
    }

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

