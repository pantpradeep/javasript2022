// alert('test');
console.log(location.href);
document.body.style.background="grey";
console.log(innerHeight);
console.log(innerWidth)

function goback(){
    window.history.back();
}

// if (confirm("want to")) {
//     location.href = "https://www.google.com"
// }

//Root element that is HTML
console.log(document.documentElement)

// total node
console.log(document.body.childNodes);
console.log(document.body.children.length);
console.log(document.body.hasChildNodes())
console.log(document.body.firstElementChild)

console.log(document.body.firstElementChild.firstElementChild);

const firstChild = document.body.firstElementChild.firstElementChild;
firstChild.style.color = "red";

const secondChild = document.querySelector('.child-two')
secondChild.style.color = "pink"

console.log(document.body.parentNode)

console.log(document.body.parentElement)

console.log(document.body.nextSibling)
console.log(document.body.previousElementSibling)
