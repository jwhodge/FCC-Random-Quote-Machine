const sourceURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const defaultQuote = [{'quote': 'Most quotes on the internet are misattributed', 
                        'author': 'Plato'}];

// get random quote from source array
const returnData = (sourceArray) => {
    let randomNumber = Math.floor(Math.random()*sourceArray.length);
    let randomQuoteArr = [sourceArray[randomNumber]['quote'], 
    sourceArray[randomNumber]['author']]
    return randomQuoteArr;
}

// function to post the quote
const postRandQuote = (arr) => {
    let randQuArr = returnData(arr);
    jQuery("#text").text(randQuArr[0]);
    jQuery("#author").html(randQuArr[1]);
}

// getting the json file
document.addEventListener('DOMContentLoaded', function getFile(){
    const source = new XMLHttpRequest();
        source.open("GET",sourceURL,true);
        source.send();
        source.onload = function(){
            if (source.status === 404){
                postRandQuote(defaultQuote);
            }
            const json = JSON.parse(source.responseText);
            // post on first load
            $(document).ready(function() {
                postRandQuote(json.quotes);
            });
            // post on click of button
            $("#new-quote").click(function(){
                postRandQuote(json.quotes);
            });
        };
    });
