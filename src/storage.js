import { listtaskmap } from ".";

export const addtolocalstorage =  (listtaskmap)=>{
    localStorage.setItem("mylocalstore", JSON.stringify(Object.fromEntries(listtaskmap)));
}
// object.fromentries needed because Stringify() doesnt know to serialize a map. This converts it to an object.
export const getfromlocalstorage = ()=>{
    const mapobj = JSON.parse(localStorage.getItem("mylocalstore"));
    console.log("mapobj is: ", mapobj);

    if (!mapobj){return null};

    const loadedmap = new Map(Object.entries(mapobj));
    listtaskmap.clear(); 
    loadedmap.forEach((value,key) => {
        listtaskmap.set(key, value);
    });
}



