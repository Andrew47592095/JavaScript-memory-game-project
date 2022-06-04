document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll(".card");

  let colors = ["red","green","pink","blue","yellow","black","orange","grey","red","green","pink","blue","yellow","black","orange","grey"];
  let cardsId = [];
  let card = [];
  let chosenCard = [];
  let cardsWon = [];
  let cardDetail = "";
  let eachColor = "";
  let num = 0;


  function shuffleArray() {
    colors.sort(() => Math.random() - 0.5);
  };
  shuffleArray();

  for(let i = 0; i < cards.length; i++) {
    card = cards[i];
    //Add color to each card
    eachColor = card.classList.add(colors[i]);
    flipCard(card,eachColor);
  }

  function flipCard(card,eachColor) {
    //In default, All cards are hidden
    let hiddenClass = card.classList += " hidden "
    
    card.addEventListener('click', () => {
      //👇when the card is clicked "hidden" class wiil be removed
      const reveal = card.classList.remove('hidden');
      //👇"clicked" class will be added 
      const clicked = card.classList.add('clicked');
      let clickedCard = document.getElementsByClassName('clicked');
      
      cardDetail = card.getAttribute('class');
      chosenCard.push(cardDetail);
      
      if(clickedCard.length === 2) {
        checkMatch(clickedCard,chosenCard);
        console.log(chosenCard);
      }
    });
  };

  function checkMatch(clickedCard,chosenCard) {
    let firstCard = clickedCard[0];
    let secondCard = clickedCard[1];  

    setTimeout(function() {
      if(chosenCard[0] == chosenCard[1]) {
        alert("It's a Match!");
        firstCard.classList.remove("clicked");
        firstCard.classList.add("done");
        secondCard.classList.remove("clicked");
        secondCard.classList.add("done");
        chosenCard.splice(0, chosenCard.length);
      } else {
        firstCard.classList.remove("clicked");
        firstCard.classList.add("hidden");
        secondCard.classList.remove("clicked");
        secondCard.classList.add("hidden");
        chosenCard.splice(0, chosenCard.length);
      }
    },500);
    
  }
})


