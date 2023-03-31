let inputWord = document.getElementById('wordInput');

let wordToSearch = document.getElementById('word')

let searchBtn = document.getElementById('searchBtn');

let audio = document.getElementById('pronounce-audio');

searchBtn.addEventListener('click', search);

let m = document.getElementById('meanings');
let c = document.querySelectorAll('.sub-container');
var text = inputWord.value;
function search() {

    text = inputWord.value
    
    if (text /* or we can use text directly use text*/ ) {
        wordToSearch.innerText = text;
        get();
    }

   
}

function get() {

    const xhr = new XMLHttpRequest();
    let str = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    str = str.concat(text); 
    console.log(str);

    xhr.open('GET', str, true);
    xhr.getResponseHeader('content-type', 'application/json');
    
    xhr.onload = function () {

        console.log('hello')

        if (this.status === 200) {
            console.log('hello')
        
            console.log(this.responseText);
            let obj = JSON.parse(this.responseText);
            
            let a = obj[0].meanings[0].definitions[0].definition;
            let b = obj[0].phonetics[0].audio;
            console.log(b);
            audio.src = b;
            m.innerHTML = a;
        }
    }
    xhr.send();

    // write function to add numbers
}
