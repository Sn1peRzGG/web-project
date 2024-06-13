//import data from "../data/dataBase.json"

function createObj(element, parent){
    const objA = document.createElement(element);
    parent.appendChild(objA);
    return objA;
}

const conteiners = document.getElementById('conteiners');

function createBlock(name, className, title, classTitle, data, classData,
    description, classDescription)
{
    const conteiner = createObj('div', conteiners);
conteiner.classList.add('conteiner')

const leftConteiner = createObj('div', conteiner);
leftConteiner.classList.add('left-conteiner')
leftConteiner.innerHTML = `
        <h3 class="${className}">${name}</h3>
        <p class="${classTitle}">${title}</p>
        <span class="${classData}">${data}</span>
        <p class="${classDescription}">${description}</p>
        <a style="color:blue; font-size:20px" href="">fd</a>
    `;

const rightConteiner = createObj('div', conteiner);
rightConteiner.classList.add('right-conteiner')
rightConteiner.textContent = 'Thumbnail'
}
const dataOne = new Date(2024, 10, 12); //year, month, day

const blockOne = createBlock('World', 'h3-blue', 'Featured post', 'p-title', dataOne.toLocaleDateString('en-us', {month:"short", day:"numeric"}), 'data', 'This is a wider card with supporting text below as a natural lead-in to additional content.', 'description');
const blockTwo = createBlock('Design', 'h3-green', 'Post title', 'p-title');
