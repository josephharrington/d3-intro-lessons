require('d3');


// d3 in some ways is similar to jQuery.
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


// The data itself drives the structure of the document.
// Here we create a <li> element for each item in the data.
var list = container.append('ul');

list.selectAll('li').data(exampleUrlData)
    .enter()
        .append('li')
        .html(function (data) {
            var linkText = data[0];
            var linkUrl = data[1];
            return '<a href="' + linkUrl + '">' + linkText + '</a>';
        });


// D3 is completely decoupled from specific DOM elements. Even though it's
// often applied to SVG elements, this is not required. (Also works with
// canvas or plain html.)
