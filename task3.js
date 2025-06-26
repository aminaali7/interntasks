const quotes = [
    "Happiness is not something ready-made. It comes from your own actions.",
    "Laugh as much as you breathe and love as long as you live.",
    "Change the world by being yourself.",
    "The only way to do great work is to love what you do."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear() 
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}
