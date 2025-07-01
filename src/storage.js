import { listarray, listobj, listtaskmap,storagearray } from ".";
import { initializelist } from "./lists";
import {todo} from "./createtodo";
import { savebuttonlistener } from "./maincolumn";
import {savelistbuttonlistener} from "./sidebar"
export const restoreObject = (olddata)=>{
    
    if ( olddata ){
        console.log(olddata);

        Object.entries(olddata).forEach(([key,value])=>{
            listobj[key] = value;
        })
        console.log("the list object is:", listobj);
    }
}

export const addListToStorage = (list)=>{
    if ( !listobj[list.id]){
        listobj[list.id] = [list.listinput.value];
    }
    localStorage.setItem("localstore",JSON.stringify(listobj));
}

export const addTaskToStorage = (task)=>{
    listtaskmap.forEach((values,key) => {
        for ( let i = 0 ; i < values.length ;i++){
            if ( task.id  === values[i].id){
                if ( !listobj[key]){
                    listobj[key] = [];
                }

                listobj[key].push([
                    task.id,
                    task.titlefield.value,
                    task.datefield.value,
                    task.descriptionbox.value, 
                    task.prioritydropdown.value]);
            }
        }
    });
    localStorage.setItem("localstore",JSON.stringify(listobj));
}

export const getDataFromLocalStorage = ()=>{
    const getdata = JSON.parse(localStorage.getItem("localstore"));
    return getdata;
}



export const renderDOM = ()=>{
    console.log("rendering in 5,4,..0");

    Object.entries(listobj).forEach(([key,values])=>{

        const renderList = new initializelist(values[0]);
        savelistbuttonlistener(renderList);
        renderList.savelistbtn.click();
        
        for ( let i = 1 ; i < values.length ; i++){

            console.log(values);
            const renderTask = new todo(values[i][1],values[i][2],values[i][3]);
            savebuttonlistener(renderTask,values[i][4]);
            renderTask.savebutton.click();
        }
    })
}