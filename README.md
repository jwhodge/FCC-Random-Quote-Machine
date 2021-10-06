# FCC-Random-Quote-Machine

![Random Quote Machine Image](https://raw.githubusercontent.com/jwhodge/FCC-Random-Quote-Machine/master/rqm-sample.png)

The project is operational [Github Version](https://jwhodge.github.io/FCC-Random-Quote-Machine/FCC-RQM.html#)

It is also on CodePen here: [CodePen Version](https://codepen.io/jwhodge01/full/oNwjKWd)

This is a freeCodeCamp assignment to build a random quote generator. See the link below.

[freeCodeCamp project brief](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine)

![FCC Tests Passing Image](https://raw.githubusercontent.com/jwhodge/FCC-Random-Quote-Machine/master/rqm-tests-passing.png)

I used HTML with Bootstrap to give the page structure. Apart from cosmetic changes to colours and fonts all styles are basically drawn from Bootstrap.

I use SCSS to add custom styles, although the styles eneded up being basic CSS so the preprocessor wasn't required at all. 

Finally to make the dynamic content work I used JS and jQuery. I tried as hard as possible to follow the DRY principal. This means that the same function updates the quote, author, 
twitter pre-fill and the background gradient. It is then called at page ready and on the click of the New Quote button.

While the assignment didn't specify it I used AJAX to get the quote source file. This was a first time and I have some work to do to before I'm completely confident with this.

The background gradient changer is also optional but I liked it. 

I challenged myself to look up and understand the code used and then write my own versions (rather than copy stack overflow solutions or otherwise).

You can see the CodePen file here: [https://codepen.io/jwhodge01/full/oNwjKWd](https://codepen.io/jwhodge01/full/oNwjKWd)
