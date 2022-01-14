function openDevice(evt, DeviceName) {
    var i, tablinks, tabcontent;
    
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        
    }
    
    document.getElementById(DeviceName).style.display = "block";
    evt.currentTarget.className += " active";
}