import { listtaskmap, active } from ".";
export class initializelist {

    constructor(listname){
        this.createlist(listname);
        this.id = crypto.randomUUID();
        
        listtaskmap.set(this.id,[]);
    }

    createlist(listinputvalue){
        this.listwrapper = document.getElementById("lists");
        this.listwrapper.classList.add("listcontainer-style")
        this.listbox = document.createElement("div");
        this.listbox.classList.add("newlist-style");
        this.listinput = document.createElement("input");
        this.listinput.type = "text";
        if ( listinputvalue === undefined){
            this.listinput.placeholder = "List";
        }
        else{
            this.listinput.value = listinputvalue;
        }
        this.listinput.classList.add("liststyle");
        this.savelistbtn = document.createElement("button");
        this.savelistbtn.textContent = "Save";
        this.savelistbtn.classList.add("listbutton-style");

        this.deletelistbtn = document.createElement("button");
        this.deletelistbtn.textContent = "Delete";
        this.deletelistbtn.classList.add("listbutton-style");

        this.listbox.append(this.listinput,this.savelistbtn,this.deletelistbtn);
        this.listwrapper.append(this.listbox);

        return this.listbox;
    }
}