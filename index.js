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


const delivery = document.querySelector('.delivery-img');
const deliveryContent = document.querySelector('.delivery-content');
const lastPickUp = document.querySelector('.main-3-pickup');
const order = document.querySelectorAll('.star');


const observer = new IntersectionObserver(
    (entries) =>{
        entries.forEach((entry) =>{
            entry.target.classList.toggle("show", entry.isIntersecting);
        })
    }
)
const observer1 = new IntersectionObserver(
    (entries) =>{
        entries.forEach((entry) =>{
            entry.target.classList.toggle("show-1", entry.isIntersecting);
        })
    }
)
const observer2 = new IntersectionObserver(
    (entries) =>{
        entries.forEach((entry) =>{
            entry.target.classList.toggle("show-3", entry.isIntersecting);
        })
    }
)
const observer3 = new IntersectionObserver(
    (entries) =>{
        entries.forEach((entry) =>{
            entry.target.classList.toggle("show-4", entry.isIntersecting);
        })
    }
)

observer.observe(delivery);
observer1.observe(deliveryContent);
observer2.observe(lastPickUp);
order.forEach((item)=>{
    observer3.observe(item);
})