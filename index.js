let box1 = document.querySelector('#b-1');
let box2 = document.querySelector('#b-2');
let box3 = document.querySelector('#b-3');

let box = document.querySelector('#starbuck');
let test = document.querySelector('.test');
box1.addEventListener('click', ()=>{
    box.src = "starbuck-1.png";
    test.style.backgroundColor = "brown";
})
box2.addEventListener('click', ()=>{
    box.src = "starbuck-2.png";
    test.style.backgroundColor = "#7e1d62";
})
box3.addEventListener('click', ()=>{
    box.src = "starbuck-3.png";
    test.style.backgroundColor = "darkgreen";
})