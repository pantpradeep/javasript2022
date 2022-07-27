const callingFunction = () => {
    alert("by function")
}
const thirdbtn = document.getElementById("thirdBtn");
thirdbtn.onclick = function() {
    alert("most common used")
}


const fourthbtn = document.getElementById("fourthbtn");
fourthbtn.addEventListener('click',  () => {
    alert("test");
})