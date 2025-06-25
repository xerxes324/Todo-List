export class todo {
    constructor(){
        this.createform();
    }

    createform(title,date ,desc){

        this.maindiv = document.getElementById("tasks");
        this.taskcontainer = document.createElement("div");
        this.taskcontainer.classList.add("taskcontainer-style");
        this.maindiv.appendChild(this.taskcontainer);

        this.titlesection = document.createElement("div");
        this.descriptionsection = document.createElement("div");
        this.prioritysection = document.createElement("div");
        this.controlsection = document.createElement("div");

        this.titlesection.classList.add("titlesection-style");
        this.descriptionsection.classList.add("descriptionsection-style");
        this.prioritysection.classList.add("prioritysection-style");
        this.controlsection.classList.add("controlsection-style");
        
        // titlefield & date: 

        this.titlesectionleft = document.createElement("div");
        this.titlesectionright = document.createElement("div");
        this.titlesectionleft.classList.add("titlesectionleft-style");
        this.titlesectionright.classList.add("titlesectionright-style");

        this.titlesection.append(this.titlesectionleft,this.titlesectionright);

        this.titlefield = document.createElement("input");
        this.titlefield.type="text";
        if ( title === undefined){
            this.titlefield.placeholder = "Title";
        }
        else{
            this.titlefield.value = title;
        }

        console.log(title,"is title.")
        this.titlefield.classList.add("titlefield-style");

        this.titlesectionleft.append(this.titlefield);

        this.datelabel = document.createElement("label");
        this.datelabel.textContent = "Date";

        this.datefield = document.createElement("input");
        this.datefield.type = "date";
        this.datefield.value = date;

        this.datefield.classList.add("datefield");
        this.titlesectionright.append(this.datelabel,this.datefield);

        this.taskcontainer.append(this.titlesection);

        

        //description section: 
        this.descriptionbox = document.createElement("textarea");
        this.descriptionbox.classList.add("descriptionbox-style");
        if (desc === undefined){
            this.descriptionbox.placeholder = "Description";
        }
        else{
            this.descriptionbox.value = desc;
        }
    
        this.descriptionsection.append(this.descriptionbox);
        this.taskcontainer.append(this.descriptionsection);


        //priority section:
        this.prioritylabel = document.createElement("label");
        this.prioritylabel.id = "prioritylabel";
        this.prioritylabel.textContent = "Importance";

        this.prioritydropdown = document.createElement("select");
        this.prioritydropdown.id = "dropdown";
        this.prioritydropdown.classList.add("prioritydropdown-style");
        ["High","Medium","Low"].forEach(e => {
            const prioritylevel = document.createElement("option");
            prioritylevel.textContent = e;
            this.prioritydropdown.append(prioritylevel);
        });

        this.prioritysection.append(this.prioritylabel,this.prioritydropdown);
        this.taskcontainer.append(this.prioritysection);


        //control section:
        
        this.savebutton = document.createElement("button");
        this.savebutton.textContent = "Save Task";
        this.deletebutton = document.createElement("button");
        this.deletebutton.textContent = "Delete Task";


        this.savebutton.classList.add("savebutton-style");
        this.deletebutton.classList.add("deletebutton-style");

        this.controlsection.append(this.savebutton, this.deletebutton);
        this.taskcontainer.append(this.controlsection);
        return this.taskcontainer;
    }
}