const quoteDOM = document.getElementById("quote");
const authorDOM = document.getElementById("author");
const btn = document.getElementById("button");

const quotes = [
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
  }
];

function generateQuote() {
  let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(currentQuote.quote);
  console.log(currentQuote.author);
}

btn.addEventListener("click", generateQuote);
