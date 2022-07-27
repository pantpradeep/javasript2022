const changeContent = () => {
     document.getElementById("heading").innerHTML = "raju";
     console.log(document.getElementsByClassName("para"))
    //  document.getElementsByClassName("para")[0].innerHTML = "rani";
    document.querySelector(".para").innerHTML = "rani";
    console.log(document.querySelectorAll('.para'))
     document.getElementsByTagName('p')[0].style.color = "red";
     console.log(document.getElementsByName('gender'))
}
