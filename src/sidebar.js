const getSidebarHeader = () => document.getElementById("sidebar-headers");

export const mylistheading = ()=>{

    const mylistsheading = document.getElementById("mylist-heading");
    const mylistsheadingh1 = document.createElement("h1");
    mylistsheadingh1.textContent = "My Lists";
    mylistsheadingh1.classList.add("mylistsheader-style")
    mylistsheading.appendChild(mylistsheadingh1);
}

export const createhomebutton = ()=>{

    const sidebarheader = getSidebarHeader();
    const homebutton = document.createElement("button");
    homebutton.textContent = "Home";
    homebutton.classList.add("homebutton");
    sidebarheader.appendChild(homebutton);
    return {homebutton};
}

export const createtodaybutton = ()=>{
    const sidebarheader = getSidebarHeader();
    const todaybutton = document.createElement("button");
    todaybutton.textContent = "Today";
    todaybutton.classList.add("todaybutton");
    sidebarheader.appendChild(todaybutton);
    return {todaybutton}
}

export const createweekbutton = ()=>{
    const sidebarheader = getSidebarHeader();
    const thisweekbutton = document.createElement("button");
    thisweekbutton.textContent = "This Week";
    thisweekbutton.classList.add("thisweekbutton");
    sidebarheader.appendChild(thisweekbutton);
    return {thisweekbutton};
}

export const createlistbutton= ()=>{
    const newlistbar = document.getElementById("newlist")
    const newlistbutton = document.createElement("button");
    newlistbutton.textContent = "New List +";
    newlistbutton.classList.add("newlistbutton");
    newlistbar.appendChild(newlistbutton);
    return {newlistbutton}
}


//event listener initialize

export const homebuttonEL = (homebtn)=>{
    homebtn.addEventListener("click",()=>{
        console.log("Hi")
    })
}

export const todaybuttonEL = (todaybtn) => {
    todaybtn.addEventListener("click",()=>{
        console.log("Hello")
    })
}

export const weekbuttonEL = (weekbtn)=>{
    weekbtn.addEventListener("click",()=>{
        console.log("CHicken")
    })
}

export const newlistbuttonEL = (newlistbutton) =>{
    newlistbutton.addEventListener("click",()=>{
        console.log("heaven");
        
    })
}