import { listtaskmap,storagearray } from ".";

export const addtolocalstorage = (olddata)=>{

    const arrtemp = [];
    if ( olddata ){
        arrtemp.push(...olddata);
    }

    listtaskmap.forEach((mapvalue,key) => {
        for (let i = 0; i < mapvalue.length ; i++){
            arrtemp.push([key,mapvalue[i].title,mapvalue[i].desc,mapvalue[i].date])       
        }
    });
    localStorage.setItem("localstore",JSON.stringify(arrtemp));

}


export const getfromlocalstorage = ()=>{
    const getdata = JSON.parse(localStorage.getItem("localstore"));
    return getdata;
}

export const renderDOM = (data)=>{
    // console.log(data);

}   