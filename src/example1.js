require('d3');

var contentDiv = d3.select('#content');
var svg = contentDiv.append('svg')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight);

// Rect
svg.append('rect')
    .attr('x', 100)
    .attr('y', 100)
    .attr('width', 400)
    .attr('height', 200)
    .style('fill', 'tomato')
    .style('stroke', 'indigo')
    .style('stroke-width', 5);

// Circle
svg.append('circle')
    .attr('cx', 700)
    .attr('cy', 200)
    .attr('r', 100)
    .style('fill', 'olive')
    .style('stroke', 'darkolivegreen')
    .style('stroke-width', 25);


// Line (and you can also apply attrs and styles with an object)
svg.append('line')
    .attr({
        'x1': 700,
        'y1': 200,
        'x2': 700,
        'y2': 500
    })
    .style({
        'stroke': 'rebeccapurple',
        'stroke-width': 20
    });
