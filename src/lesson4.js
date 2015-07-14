require('d3');
var width = window.innerWidth, height = window.innerHeight;
var svg = d3.select('#content').append('svg')
    .attr('width', width)
    .attr('height', height);


// This example is adapted from http://bl.ocks.org/mbostock/3750558


// Some initialization params for the force layout.
// For more options see: https://github.com/mbostock/d3/wiki/Force-Layout#force
var force = d3.layout.force()
    .size([window.innerWidth, window.innerHeight])
    .charge(-800)// Force layout has a bunch of arbitrary parameters. Just tweak them until it looks good.
    .linkDistance(50)
    .on('tick', tick);


// Creating the initial (empty) selections.
// These need to be defined here since the tick() function will use these to update the DOM.
var lines = svg.selectAll('.link');
var circles = svg.selectAll('.node');


// Make an ajax call to get some json data. This could be any rest API.
d3.json('data/lesson4.json', function(error, data) {

    if (error) throw error;

    force.nodes(data.nodes)
         .links(data.links)
         .start();

    lines = lines.data(data.links)
        .enter()
            .append('line')
            .attr('class', 'link');

    lines.data(data.links).exit().remove();

    circles = circles.data(data.nodes)
        .enter()
            .append('circle')
            .attr('class', 'node')
            .attr('r', 20)
            .call(force.drag);  // Bind a behavior to nodes to allow interactive dragging.
});


function tick() {
    // Update position attributes for all the svg lines and circles.
    lines.attr('x1', function(d) { return d.source.x; })
         .attr('y1', function(d) { return d.source.y; })
         .attr('x2', function(d) { return d.target.x; })
         .attr('y2', function(d) { return d.target.y; });

    circles.attr('cx', function(d) { return d.x; })
           .attr('cy', function(d) { return d.y; });
}


// Things to try in console
// lines = d3.select(null);
// lines.data([]).exit().remove()