const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const sliderImage = document.getElementById('slider-image');
for(let i=0; i<items.length; i++){
    sliderImage.innerHTML +=`
    <div class="slider-img${i}" style="background-image : url(${items[i]})";>
    </div>
    `; 
}
document.querySelector('.slider-img0').className += " selected";

let index = 0;
function down(){
    index++;
    if(index == 5){
        document.querySelector(`.slider-img${index-1}`).classList.remove("selected");
        index = 0;
    }
    document.querySelector('.image').style.backgroundImage = `url(${items[index]})`;
    document.querySelector('.text').innerHTML = `
                    <h4>${title[index]}</h4>
                    <p>${text[index]}</p>`;

    document.querySelector(`.slider-img${index}`).className += " selected";
    document.querySelector(`.slider-img${index-1}`).classList.remove("selected");
}

function up(){
    index--;
    if(index == -1){
        document.querySelector(`.slider-img${index+1}`).classList.remove("selected");
        index = 4;
    }
    document.querySelector('.image').style.backgroundImage = `url(${items[index]})`;
    document.querySelector('.text').innerHTML = `
                    <h4>${title[index]}</h4>
                    <p>${text[index]}</p>`;

    document.querySelector(`.slider-img${index}`).className += " selected";
    document.querySelector(`.slider-img${index+1}`).classList.remove("selected");
}