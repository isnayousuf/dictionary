let input = document.getElementById('input');
let btn =document.getElementById('submit-btn');
let container= document.querySelector('.container');
let wordContainer = document.querySelector('.wordHandler ')
let first =document.querySelector('.newWord');
let second =document.querySelector('.newWord2');
let third =document.querySelector('.newWord3');
let fourth =document.querySelector('.newWord4');
let audioElement = document.querySelector('.pronounce');
let emptyInput = document.querySelector('.noData');
let cross = document.getElementById('cross');
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


const audio = result[0].phonetics[0].audio;
audioElement.src= audio;

first.innerText= `${word.toUpperCase()}`;
second.innerText =`Origin: ${history}`;
third.innerText=`Meaning: ${meaning}`;
fourth.innerText =`Example: ${example}`;
wordContainer.classList.remove('hide')

// function noWord(){
//     if(input.value != `result[0].word`){
//         alert('this is not a word')
//     }


}

}

function emptyWord(){
    if(input.value == ''){
    wordContainer.classList.add('hide');
    emptyInput.classList.remove('hide');

    }
}
function hideWarning() {
    emptyInput.classList.add('hide');
}
cross.addEventListener('click', hideWarning);
btn.addEventListener('click', emptyWord);   //handling empty words
btn.addEventListener('click', logData);   //handling words     
