let input = document.getElementById('input');
let btn =document.getElementById('submit-btn');
let container= document.querySelector('.container');
let wordContainer = document.querySelector('.wordHandler ')
let first =document.querySelector('.newWord');
let second =document.querySelector('.newWord2');
let third =document.querySelector('.newWord3');
let fourth =document.querySelector('.newWord4');


function logData(){
    let a = input.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${a}`
fetch(url)
.then (response => response.json()).then(data => getData(data))
function getData(result) {
console.log(result);
let word = result[0].word;
let history = result[0].origin;
let a= result[0].meanings[0].definitions[0];
let meaning = result[0].meanings[0].definitions[0].definition;
let example = result[0].meanings[0].definitions[0].example;

console.log(word);
console.log(history);
console.log(meaning);
console.log(example);

// const audio = result[0].phonetics[0].audio;
first.innerText= `${word.toUpperCase()}`;
second.innerText =`Origin: ${history}`;
third.innerText=`Meaning: ${meaning}`;
fourth.innerText =`Example: ${example}`;
wordContainer.classList.remove('hide')
}
}
btn.addEventListener('click', logData)
