let headerElem = document.getElementById('header1');
headerElem.addEventListener('click', headerClicked);

function headerClicked() {
    headerElem.innerText = headerElem.innerText + '!'; 
}

let modParagraphElems = document.getElementsByClassName('mod-paragraphs');
for(let i = 0; i < modParagraphElems.length; i++) {
    modParagraphElems[i].addEventListener('mouseover', modifyParagraphs);
}

function modifyParagraphs() {
    for(let i = 0; i < modParagraphElems.length; i++) {
        modParagraphElems[i].classList.toggle('yellow-text');
    }
}