require('d3');
var svg = d3.select('#content').append('svg')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight);


// Rect
svg.append('rect')
    .attr('x', 100)
    .attr('y', 100)
    .attr('width', 400)
    .attr('height', 200)
    .style('fill', 'salmon')
    .style('stroke', 'firebrick')
    .style('stroke-width', 5);

// Circle
svg.append('circle')
    .attr('cx', 700)
    .attr('cy', 200)
    .attr('r', 100)
    .style('fill', 'olive')
    .style('stroke', 'darkolivegreen')
    .style('stroke-width', 25)
    .on('mouseover', function() { d3.select(this).style('fill', 'burlywood');} )
    .on('mouseout', function() { d3.select(this).style('fill', 'olive');} );


// Line
// This also shows how you can also apply attrs and styles with an object.
svg.append('line')
    .attr({
        x1: 700,
        y1: 200,
        x2: 300,
        y2: 200
    })
    .style({
        stroke: 'maroon',
        'stroke-width': 20
    });
