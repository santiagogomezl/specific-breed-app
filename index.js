'use strict';

function getDogImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
  }

function displayResults(responseJson){
  
  console.log(responseJson);    

  if(responseJson.code === 404){
    alert('Invalid input. Try all lowecase i.e labrador, hound, corgi');
  }else{
    const dogURL = responseJson.message;
    $('.results img').remove();
    $('.results').append(
      `<img class="results-img" alt="Cute dog picture" src="${dogURL}"></img>`
    )
    
    $('.results').removeClass('hidden');
  }
}


function watchForm(){
  $('form').on('submit', event => {
      event.preventDefault();
      const dogBreeg = document.getElementById('dog-breed').value;
      getDogImage(dogBreeg);
  }); 
}

$(function(){
  watchForm();
});