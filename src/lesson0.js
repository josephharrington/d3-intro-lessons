require('d3');


// The javascript in this file creates a simple page with a header and a list
// of four clickable links.


// D3 select in a way is similar to selecting elements with jQuery.
var contentDiv = d3.select('#content');


// You can also modify the DOM and edit attributes and style.
var container = contentDiv.append('div')
    .style('margin', '100px');

container.append('h1')
    .text('D3.js Walkthrough');


// Example of D3 data binding. Data can be an array of anything...
var exampleUrlData = [
    ['Lesson 1: SVG Intro', '?lesson1'],
    ['Lesson 2: Selections and Data', '?lesson2'],
    ['Lesson 3: Enter and Exit', '?lesson3'],
    ['Lesson 4: Force Layout', '?lesson4']
];

// D3 makes you write code in a way such that the data itself drives the
// structure of the document.


var list = container.append('ul');
var listItems = list.selectAll('li');

listItems
    .data(exampleUrlData)
    .enter()  // (enter() is some magic that will be explained later)
        .append('li')  // Here we create a <li> element for each item in the data
        .html(function(data) {  // And set the content of each <li>.
            var linkText = data[0];
            var linkUrl = data[1];
            return '<a href="' + linkUrl + '">' + linkText + '</a>';
        });


// D3 is completely decoupled from specific DOM elements. Even though it's
// often applied to SVG elements, this is not required. It also works with
// canvas or plain html elements as shown above.
