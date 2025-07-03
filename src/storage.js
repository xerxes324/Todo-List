import { listarray, listobj, listtaskmap,storagearray } from ".";
import { initializelist } from "./lists";
import {todo} from "./createtodo";
import { tasklisteners, finalizeTaskSave , deletebuttonlistener} from "./maincolumn";
import {setuplisthandler,finalizeListSave, deletelistbuttonlistener} from "./sidebar"


export const restoreObject = (olddata)=>{

    if ( olddata ){
        console.log(olddata, "is the old data");
        console.log(Object.keys(olddata).length, "is olddata length");

        Object.entries(olddata).forEach(([key,value])=>{
            console.log(Object.keys(listobj).length,"is listobj length");
            if ( !(key in listobj)){
                listobj[key] = value;   
            }
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
    // console.log("get data is : ",getdata);
    return getdata;
}


export const restoreAppState = ()=>{
    console.log("rendering in 5,4,..0");

    Object.entries(listobj).forEach(([key,values])=>{

        const renderList = new initializelist(values[0],key);
        console.log(listtaskmap,"is the map right now.")
        setuplisthandler(renderList);
        deletelistbuttonlistener(renderList);
        finalizeListSave(renderList,1);
        
        for ( let i = 1 ; i < values.length ; i++){

            const renderTask = new todo(values[i][1],values[i][2],values[i][3],values[i][0]);
            if ( !listtaskmap.get(key)){
                listtaskmap.set(key,[])
            }
            listtaskmap.get(key).push(renderTask);

            tasklisteners(renderTask);
            finalizeTaskSave(renderTask, values[i][4]);
            deletebuttonlistener(renderTask);
            
        }
    })
}