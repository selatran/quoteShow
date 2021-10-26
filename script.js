// Scripts

/* Data to Show*/
const data = [
  {
    quote:
     `“I got a pet monkey called Charlie Chan.” 
     <br><br> – Jimi Hendrix`,
    emoji: "🙈",
    image: "url(assets/babyMonkey.jpeg)"
  },
  {
    quote:
      `“How we behave toward cats here below determines our status in heaven.” 
      <br><br> – Robert A. Heinlein`,
    emoji: "🐱",
    image: "url(assets/british-shorthair-5950542_1280.jpeg)"
  },
  {
    quote:
      `“Americans love marriage too much. We rush into mariage with abandon, expecting a micro-Utopia on earth. We pile all our needs onto it, our expectations, neuroses, and hopes. In fact, we've made marriage into the panda bear of human social institutions: we've loved it to death."
      <br><br> – Barbara Ehrenreich`,
    emoji: "🐼",
    image: "url(assets/panda.jpeg)"
  },
  {
    quote: `“The horse. Here is nobility without conceit, friendship without envy, beauty without vanity. A willing servant, yet never a slave."
    <br><br> – Ronald Duncan`,
    emoji: "🐎",
    image: "url(assets/horse.jpeg)"
  },
    {
    quote: `“I want to work like a dog, doing what I was born to do with joy and purpose. I want to play like a dog, with total, jolly abandon."
    <br><br> – Oprah Winfrey`,
    emoji: "🐕",
    image: "url(assets/australian-shepherd.jpeg)"
  },
      {
    quote: `“The cunning of the fox is as murderous as the violence of the wolf."
    <br><br> – Thomas Paine`,
    emoji: "🦊",
    image: "url(assets/fox.jpeg)"
  },
        {
    quote: `“Cows are gentle, interesting animals."
    <br><br> – Ingrid Newkirk`,
    emoji: "🐮",
    image: "url(assets/cow.jpeg)"
  }
];


// blockquote
const quote = document.querySelector("blockquote");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");

// Check-Check: change text
quote.innerHTML = data[0].quote;
// Check-Check: change emoji text
emoji.innerHTML = data[0].emoji;
// Check-Check: background image
bgImage.style.backgroundImage = data[0].image;

// intialize item number
let itemNumber = 0;

// get next button
const nextButton = document.querySelector("img.next");
nextButton.addEventListener("click", function () {
  // update by INcreasing item number with each click
  itemNumber = itemNumber + 1;
  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }
  // show item number
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// get previous button
const prevButton = document.querySelector("img.prev");
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }
  // show item number
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

const randButton = document.querySelector("img.random");
randButton.addEventListener("click", function() {
  // generate random number, for total number, of items (data)
  let randomNumber = Math.floor(Math.random() * data.length);

  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

// listen for keypress next
document.addEventListener('keyup', function(){
  
  if ( event.keyCode === 39 ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
    
  }
  
  if ( event.keyCode === 37 ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
  //press spacebar to randomize quote
  if ( event.keyCode === 32 ) {
    
  let randomNumber = Math.floor(Math.random() * data.length);

  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
}
});



