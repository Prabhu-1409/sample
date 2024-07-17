var button = document.getElementById("color")
var title = document.getElementById("title")
var files_upload = document.getElementById("files")
button.addEventListener("click",filehandle)

function change_color(){
    title.style.color='green'
    title.style.textDecoration='underline'
}
