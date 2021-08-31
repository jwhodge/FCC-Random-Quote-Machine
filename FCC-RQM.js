const sourceURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const defaultQuote = [{'quote': 'Most quotes on the internet are misattributed', 
                        'author': 'Plato'}];
         
const bgGradients = [
["fraudulent-election",
"linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)"],
["renewable-energy",
"linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%)"],
["sex-tape",
"linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)"],
["social-services",
"linear-gradient(315deg, #aecad6 0%, #b8d3fe 74%)"],
["rejected-visa",
"linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%)"],
["brush",
"linear-gradient(315deg, #5ca0f2 0%, #f5f7f6 74%)"],
["political-peace",
"linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%)"],
["dawn-operation",
"linear-gradient(315deg, #ffd3ea 0%, #403020 74%)"],
["minty",
"linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%)"]
];
// random array item selector
const randSelect = (array) => {
    return Math.floor(Math.random()*array.length);
}

// get random quote from source array
const returnData = (sourceArray) => {
    let randomNumber = randSelect(sourceArray);
    let randomQuoteArr = [sourceArray[randomNumber]['quote'], 
    sourceArray[randomNumber]['author']]
    return randomQuoteArr;
}

// function to update all fields using the quote
const postRandQuote = (arr) => {
    let randQuArr = returnData(arr);
    jQuery("#text").text(randQuArr[0]);
    jQuery("#author").html(randQuArr[1]);
    jQuery('body').css('background-image', bgGradients[randSelect(bgGradients)][1]);
    jQuery('#tweet-quote').attr('href', 
        'https://twitter.com/intent/tweet?text=' + randQuArr[0] + ' - ' + randQuArr[1])
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
