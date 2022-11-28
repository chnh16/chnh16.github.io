function navHeader(id){
    
}

function yearTab(id){
    var selected = document.getElementById(id).getElementsByTagName('img')[0];
    var status = selected.getAttribute("class");
    var otherActive = document.getElementById("tab-year").querySelectorAll(".is-active");

    if(status !== "is-active"){
        otherActive[0].setAttribute("class", "is-disabled")
        selected.setAttribute("class", "is-active");
    }
}