const fourthbtn = document.getElementById('fourthbtn');
const checkEvent = () =>{
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}
fourthbtn.addEventListener('click', checkEvent);
