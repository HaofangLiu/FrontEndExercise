const h1 = document.querySelector('#main-title');//this will NOT reflect to html,this create a static NodeList which will not reflect changes to documents.
//const h1 = document.getElementById('main-title');//this will reflect to html. It creates an dynamic HTMLCollection,elements will change with the changes on document.
h1.style.color = 'white';
h1.style.backgroundColor = 'black';
h1.textContent = 'New Content';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const liList = document.querySelectorAll('li');
for(const liEl of liList){
    console.dir(liEl);

}

const section = document.querySelector('section');
const button = document.querySelector('button');
//section.style.backgroundColor = 'blue';

button.addEventListener('click', () => {
    // if(section.className == 'red-bg visible'){
    //     section.className = 'red-bg invisible';
    // }else{
    //     section.className = 'red-bg visible';
    // }

    //use toggle to add class name
    //section.classList.toggle('visible');
    section.classList.toggle('invisible');
    
});
