require('d3');

// Lesson 1: SVG Intro

// The code in this lesson is really just an intro to SVG elements. Feel free to play around with
// the parameters and watch how it affects the elements on the page. This uses a few D3 methods to
// create the page content, but this could just as easily have been written in pure html (except
// for the color-changey event handlers). This code really is not using any of the data-binding power
// of D3 -- but that is coming up next!


// This just sets up an SVG "canvas" that covers the full page. This doesn't look like
// anything by itself but we'll add more graphical elements to it.
var svg = d3.select('#content').append('svg')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight);


// Rectangle
svg.append('rect')
    .attr('x', 100)
    .attr('y', 100)
    .attr('width', 400)
    .attr('height', 200)
    .style('fill', 'salmon')  // SVG elements have a style attribute and can actually be set with pure CSS,
    .style('stroke', 'firebrick')  // but the property names are slightly different than html.
    .style('stroke-width', 5);


// Circle
svg.append('circle')
    .attr('cx', 700)
    .attr('cy', 200)
    .attr('r', 100)
    .style('fill', 'olive')
    .style('stroke', 'darkolivegreen')
    .style('stroke-width', 25)
    .on('mouseover', function() { d3.select(this).style('fill', 'burlywood');} )  // Easily set event handlers!
    .on('mouseout', function() { d3.select(this).style('fill', 'olive');} );


// Line
// This also shows how you can also apply a bunch of attrs and styles all at once with an object (instead of
// one at a time like the examples above).
svg.append('line')
    .attr({
        x1: 700,
        y1: 200,
        x2: 300,
        y2: 200
    })
    .style({
        'stroke': 'maroon',
        'stroke-width': 20
    });


// These are just 3 different types, but there are so many more SVG elements!
// Full list at: https://developer.mozilla.org/en-US/docs/Web/SVG/Element
