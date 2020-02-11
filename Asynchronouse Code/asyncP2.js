// #1
// const BASE_URL = "https://deckofcardsapi.com/api/deck/";

// async function getSingleCard() {
//   let deckPromise = axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`)

//   let shuffledDeck = await deckPromise;
//   let deckId = shuffledDeck.data.deck_id;

//   let cardPromise = axios.get(`${BASE_URL}/${deckId}/draw/?count=1`)
//   let cardDraw = await cardPromise;

//   console.log(`${cardDraw.data.cards[0].value} of ${cardDraw.data.cards[0].suit}`)
// }

// getSingleCard();

// #2
// const BASE_URL = "https://deckofcardsapi.com/api/deck/";

// async function getTwoCards() {
//   let deckPromise = axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`)

//   let shuffledDeck = await deckPromise;
//   let deckId = shuffledDeck.data.deck_id;

//   let cardPromise1 = axios.get(`${BASE_URL}/${deckId}/draw/?count=1`)
//   let cardPromise2 = axios.get(`${BASE_URL}/${deckId}/draw/?count=1`)

//   let cardDraws = await Promise.all([cardPromise1, cardPromise2]);

//   console.log(`${cardDraws[0].data.cards[0].value} of ${cardDraws[0].data.cards[0].suit}`)
//   console.log(`${cardDraws[1].data.cards[0].value} of ${cardDraws[1].data.cards[0].suit}`)
// }

// getTwoCards();

// #3 
$(function () {

  const BASE_URL = "https://deckofcardsapi.com/api/deck/";
  let DECK_ID = null;

  async function getShuffledDeckId() {

    let deckPromise = axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`)

    let shuffledDeck = await deckPromise;
    let deckId = shuffledDeck.data.deck_id;

    DECK_ID = deckId;

  }

  async function displayCardFromDeck() {

    let cardPromise = axios.get(`${BASE_URL}/${DECK_ID}/draw/?count=1`)
    let cardDraw = await cardPromise;

    let cardImg = $('<img>').attr("src", cardDraw.data.cards[0].image)
    $('#card-container').append(cardImg);

  }

  $("#generate-card-btn").on("click", function (e) {

    e.preventDefault();

    if (DECK_ID === null) {
      getShuffledDeckId();
    }
    else {
      displayCardFromDeck();
    }

  });

})

