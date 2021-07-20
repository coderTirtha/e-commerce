function openNav() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("list").style.paddingTop = "10px";
    document.getElementById("main").style.display = "none";
    document.getElementById("close").style.display = "block";
}
  
    /* Set the width of the sidebar 
    to 0 and the left margin of the 
    page content to 0 */
function closeNav() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("main").style.display = "block";
}