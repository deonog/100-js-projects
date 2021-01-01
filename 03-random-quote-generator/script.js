const quoteDOM = document.getElementById("quote");
const authorDOM = document.getElementById("author");
const btn = document.getElementById("button");
const previousQuote = [];

const quotes = [
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  }
];

function generateQuote() {
  let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

  previousQuote.push(currentQuote);

  if (previousQuote.length > 1) {
    let prev = previousQuote.shift();
    if (currentQuote == prev) {
      console.log("same");
      const el = quotes.splice(quotes.indexOf(currentQuote), 1);
      currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
      quotes.push(el[0]);
      console.log(quotes);
    }
  }

  quoteDOM.innerHTML = currentQuote.quote;
  authorDOM.innerHTML = currentQuote.author;
}

btn.addEventListener("click", generateQuote);
