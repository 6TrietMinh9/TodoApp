const quotes = [
    {
        quote: "Don’t cry because it’s over, smile because it happened.",
        author: "Dr. Seuss",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "In three words I can sum up everything I’ve learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
    {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain",
    },
    {
        quote: "Life is what happens to us while we are making other plans.",
        author: "Allen Saunders",
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso",
    },
    {
        quote: "Sometimes the questions are complicated and the answers are simple.",
        author: "Woody Allen",
    },
    {
        quote: "I’m not afraid of death, I just don’t want to be there when it happens.",
        author: "Dr. Seuss",
    },
    {
        quote: "Life isn’t about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${chosenQuote.quote}`;
author.innerText = `${chosenQuote.author}`;
