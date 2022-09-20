window.console.log('testing');

function newQuote(apiQuotes){
    return apiQuotes[Math.round(Math.random()*apiQuotes.length-1)];
}

async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    let apiQuotes = [];
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(newQuote(apiQuotes));
    } catch (error) {
        alert(error);
    }
}
// On Load
getQuotes();