window.onload = function(){
    alert("loaded");

    var button = document.getElementsByClassName("button")[0];
    var span = document.getElementById("species");
    var ol = document.getElementsByTagName("ol")[0];
    var body = document.getElementsByClassName("body")[0];

    button.onclick = function(){
        if(ol.className != "hide"){
            ol.className = span.className = "hide";
            button.innerHTML = "Show";
            body.style.height = "570px";
        }
        else{
            button.innerHTML = "Hide";
            ol.className = span.className =  "show";
            body.style.height = "690px";
        }
        
    }

    console.log("test success!");
}