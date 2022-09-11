/*
console.log(2+2);
console.log(2*10*3.14);

let pi = 3.14;
console.log(2*10*pi);

let name = 'Oskar';
let lastname = 'Xyz';
console.log(name + ' ' + lastname);

name = 'Jan';
lastname = 'Kowal';
console.log(name + ' ' + lastname);

let person1 = {
    name: 'Oskar',
    lastname: 'Ugauga'
}; 
console.log(person1.name + ' ' + person1.lastname);

let person2 = {
    name: 'Janek',
    lastname: 'Uga'
}; 
console.log(person2.name + ' ' + person2.lastname);

console.error("Fail");
*/

let activeSlideNumber = 1;
let arrowleft = document.querySelector('.arrow-left');
let arrowright = document.querySelector('.arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if(activeSlideNumber === 3){
        activeSlideNumber = 1;
    } else {
        activeSlideNumber = activeSlideNumber + 1; 
    }
    showSlide(activeSlideNumber);
};

let showPreviousSlide = () => {
    if(activeSlideNumber === 1){
        activeSlideNumber = 3;
    } else {
        activeSlideNumber = activeSlideNumber - 1; 
    }
    showSlide(activeSlideNumber);
};

for (let i = 1; i <= 3; i++){
    let showSlideI = () => {
        activeSlideNumber = i;
        showSlide(i);  
    };
    document.querySelector('#dot'+i).addEventListener('click', showSlideI);
};
    
arrowright.addEventListener('click', showNextSlide);
arrowleft.addEventListener('click', showPreviousSlide);
