// quotes
const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      person: "Charles R. Swindoll"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      person: "Albert Einstein"
    },
    {
      quote: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
      person: "Joel Brown"
    },
    {
      quote: "Success is walking from failure to failure with no loss of enthusiasm.",
      person: "Winston Churchill"
    },
    {
      quote: "The future depends on what you do today.",
      person: "Mahatma Gandhi"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      person: "Mark Twain"
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      person: "John D. Rockefeller"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      person: "Ralph Waldo Emerson"
    },
    {
      quote: "The road to success and the road to failure are almost exactly the same.",
      person: "Colin R. Davis"
    },
    {
      quote: "Success is not in what you have, but who you are.",
      person: "Bo Bennett"
    },
    {
      quote: "The successful warrior is the average man, with laser-like focus.",
      person: "Bruce Lee"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      person: "Roy T. Bennett"
    },
    {
      quote: "I find that the harder I work, the more luck I seem to have.",
      person: "Thomas Jefferson"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not just about making money. It's about making a difference.",
      person: "Unknown"
    },
    {
      quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      person: "Jimmy Dean"
    },
    {
      quote: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      person: "Mark Zuckerberg"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      person: "Helen Keller"
    },
    {
      quote: "Success is the sum of small efforts, repeated day in and day out.",
      person: "Robert Collier"
    },
    {
      quote: "Don't let yesterday take up too much of today.",
      person: "Will Rogers"
    },
    {
      quote: "The only person you should try to be better than is the person you were yesterday.",
      person: "Unknown"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
      person: "David Brinkley"
    },
    {
      quote: "You are never too old to set another goal or to dream a new dream.",
      person: "C.S. Lewis"
    },
    {
      quote: "Success is not just about the destination, it's about the journey.",
      person: "Zig Ziglar"
    },
    {
      quote: "If you can dream it, you can achieve it.",
      person: "Zig Ziglar"
    },
    {
      quote: "The only way to achieve the impossible is to believe it is possible.",
      person: "Charles Kingsleigh (Alice in Wonderland)"
    },
    {
      quote: "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence.",
      person: "Colin Powell"
    },
    {
      quote: "The successful man is the one who finds out what is the matter with his business before his competitors do.",
      person: "Roy L. Smith"
    },
    {
      quote: "Success is not the absence of failure; it's the persistence through failure.",
      person: "Aisha Tyler"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      person: "Albert Einstein"
    },
    {
      quote: "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
      person: "Joel Brown"
    },
    {
      quote: "Success is walking from failure to failure with no loss of enthusiasm.",
      person: "Winston Churchill"
    },
    {
      quote: "The future depends on what you do today.",
      person: "Mahatma Gandhi"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      person: "Mark Twain"
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      person: "John D. Rockefeller"
    }
]
  


document.querySelector('#quoteButton').addEventListener('click', function () {
    const quote = document.getElementById('quote');
    
    
    const randomQuote= Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[randomQuote].quote;
    const person = document.getElementById('person');
    
    person.innerText = quotes[randomQuote].person;
   
});


