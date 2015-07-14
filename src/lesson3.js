require('d3');
var svg = d3.select('#content').append('svg')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight);


// Make 5 rectangles for us to play with.
for (var i = 0; i < 5; i++) {
    svg.append('rect').attr({
        x: 100 + i * 100,
        y: 100,
        width: 50,
        height: 200,
        class: 'blueShape'
    });
}

var rectangles = svg.selectAll('rect');


window.updateData = function(someNewData) {

    // Lesson 2 showed that updating data with mismatched number of data elements
    // doesn't behave very nicely.
    rectangles.data(someNewData)
        .attr('height', function(d) {
            return d * 50;
        });

};
// Try:
//   updateData([1, 2])
//   updateData([1, 2, 3, 4, 5, 6, 7])



// Applying data just returns the same selection, but it's modified!
// Now enter() and exit() will refer to the additional or missing elements.
window.updateDataBetter = function(someNewData) {

    rectangles = rectangles.data(someNewData);

    // Create new
    rectangles.enter()
        .append('rect')
        .attr({
            x: function(d, i) {return 100 + i * 100},
            y: 100,
            width: 50,
            height: function(d) {return d * 50},
            class: 'blueShape'
        });

    // Destroy old
    rectangles.exit()
        .remove();

    // Update existing (same as updateData() above)
    rectangles.data(someNewData)
        .attr('height', function(d) {
            return d * 50;
        });
};


// We can make this look good too. :)
window.updateDataBest = function(someNewData) {

    rectangles = rectangles.data(someNewData);

    // Create
    rectangles.enter()
        .append('rect')

        .attr({
            x: function(d, i) {return 100 + i * 100},
            y: 100,
            width: 50,
            height: 0, // We want new rects to start at height 0 and animate up.
            class: 'blueShape'
        });

    // Destroy
    rectangles.exit()
        .transition()
        .attr('height', 0)  // We want old rects to animate down to 0 before removing.
        .remove();

    // Update (same as updateHeightDataWithTransition() from lesson 2)
    rectangles
        .data(someNewData)
        .transition()
        .duration(2000)
        .attr('height', function(d) {
            return d * 50;
        });
};
