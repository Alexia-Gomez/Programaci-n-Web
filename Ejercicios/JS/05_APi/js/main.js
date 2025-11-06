import { getBreeds } from './api.js';
import { showBreeds, updateButtons } from './ui.js';


let currentPage = 1;
let limit = 5;

async function loadBreeds(page) {
    const breeds = await getBreeds(page, limit);
    showBreeds(breeds.breeds);
    updateButtons(currentPage, breeds.pageCount);
}

document.getElementById('prevPage').addEventListener('click', () => {
    if(currentPage > 1){
        currentPage--;
        loadBreeds(currentPage);
    }
})

document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    loadBreeds(currentPage);
})

const inputLim= document.getElementById('cardsNum');
inputLim.addEventListener('change', () => {
    const newLim = parseInt(inputLim.value);
    if (!isNaN(newLim) && newLim > 0) {
        limit = newLim;
        currentPage = 1;
        loadBreeds(currentPage);
    }
});

window.addEventListener('DOMContentLoaded', () => loadBreeds(currentPage, limit));