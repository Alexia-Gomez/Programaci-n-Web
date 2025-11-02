export const input= document.getElementById('input');
export const history= document.querySelector('.history');

export function updateInputA(value){
    input.value= value;
}

export function addHistory(txt){
    const p= document.createElement('p');
    p.textContent=txt;
    history.appendChild(p);
    history.scrollTop= history.scrollHeight;
}
