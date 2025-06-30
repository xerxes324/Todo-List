import "./mainstyles.css";
import "./sidebar.css";
import "./maincolumn.css"
import {mylistheading,createhomebutton,createtodaybutton,createweekbutton,homebuttonEL,weekbuttonEL,todaybuttonEL,createlistbutton, newlistbuttonEL} from "./sidebar.js";
import { tasksheading,createnewtaskbutton,newtaskbuttonEL} from "./maincolumn.js";
export const active = [];
export const listtaskmap = new Map();
export const storagearray = [];
import {renderDOM, getfromlocalstorage } from "./storage.js";


window.addEventListener("DOMContentLoaded",()=>{

    const refresheddata = getfromlocalstorage();
    renderDOM(refresheddata);
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

