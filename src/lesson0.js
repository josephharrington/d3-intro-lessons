require('d3');

// Lesson 0: Table of Contents

// The javascript in this file creates a simple page with a header and a list
// of four clickable links.


// D3 select in a way is similar to selecting elements with jQuery.
// This selects the <div/> element on the page with the id of "content".
var contentDiv = d3.select('#content');


// Once you have a reference to an element on the page, you can modify the DOM
// and edit attributes and style.
contentDiv
    .style('margin', '100px');

// Add a header.
contentDiv.append('h1')
    .text('D3.js Walkthrough');

// Add a subtitle about instructions being in the source code. So meta. :)
contentDiv.append('h2')
    .html('Lesson instructions are in the source code. Open src/lesson0.js in a text editor and follow along!');


// The power of D3 is how it lets you bind data to elements on the page.
// Data can be anything! In this case we want to create a list
// of links, so our data is just the link text and urls:
var lessonTitlesAndUrls = [
    {title: 'Lesson 1: SVG Intro', url: 'lesson1'},
    {title: 'Lesson 2: Selections and Data', url: 'lesson2'},
    {title: 'Lesson 3: Enter and Exit', url: 'lesson3'},
    {title: 'Lesson 4: Force Layout', url: 'lesson4'}
];


// The list of links will be an unordered list (<ul>) element with a list
// item (<li>) corresponding to each
var list = contentDiv.append('ul');
var listItems = list.selectAll('li');  // There aren't any <li> elements yet! selectAll() will be explained soon.


// D3 makes you write code in a way such that the data itself drives the
// structure of the document. There's a natural one-to-one correspondance
// between the data and the structure of created elements.

listItems
    .data(lessonTitlesAndUrls)  // Here's where we define what data we're working with.
    .enter()  // enter() will be explained more later. It's a way of defining what happens when we get new data.

        .append('li')  // Here we create a <li> element for each item in the data...

        .html(  // ...and set the html content of each <li>.

            // Here is the meaty part of D3! Instead of setting each list item to have some *static* html
            // content, we can give it a function parameterized by our data. Each element of our data above
            // gets passed to this function.
            function(data) {
                var linkText = data.title;
                var linkUrl = data.url;
                return '<a href="?' + linkUrl + '">' + linkText + '</a>';
            }
        );


// That's it! The important thing to note is that the format of the data we
// chose was completely up to us, and that D3 allows us to define the document
// content explicitly as a function of the data.

// D3 is completely decoupled from specific DOM elements. Even though it's
// often applied to SVG elements for making pretty pictures, this is not
// required. It also works with <canvas> or even just plain html elements as
// this example showed.
