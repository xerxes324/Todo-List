import { listtaskmap,storagearray } from ".";
import { initializelist } from "./lists";
import {todo} from "./createtodo";
export const addtolocalstorage = (olddata)=>{

    const arrtemp = [];
    if ( olddata ){
        arrtemp.push(...olddata);
    }

    listtaskmap.forEach((mapvalue,key) => {
        for (let i = 0; i < mapvalue.length ; i++){
            arrtemp.push([key,mapvalue[i].prioritydropdown.value,mapvalue[i].title,mapvalue[i].desc,mapvalue[i].date])       
        }
    });
    localStorage.setItem("localstore",JSON.stringify(arrtemp));

}


export const getfromlocalstorage = ()=>{
    const getdata = JSON.parse(localStorage.getItem("localstore"));
    return getdata;
}


export const renderDOM = (data)=>{

    if ( data ){
        data.forEach(e => {
            const renderlists = new initializelist(e[0]);
            const rendertasks = new todo(e[2],e[3],e[4]); 
        });
    }

}   