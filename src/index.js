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
    ['Example 1: SVG Intro', '?example1'],
    ['Example 2', '?example2'],
    ['Example 3', '?example3'],
    ['Example 4', '?example4']
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
