window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const color = urlParams.get("c");

    if(color) {
        document.body.innerHTML = "";
        document.body.style.backgroundColor = `#${color}`;
        document.title = `#${color}`;
    }
    else {
        document.getElementById("goButton").addEventListener("click", setColor);
    }
}



function setColor() {
    const color = document.getElementById("colorPicker").value;
    
    const urlParams = new URLSearchParams(window.location.search);

    urlParams.set("c", color.substring(1));

    window.location.search = urlParams.toString();
}
