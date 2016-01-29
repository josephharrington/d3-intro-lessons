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


// Lesson 3: Enter and Exit

// In the last lesson we saw that we can bind data to elements on the page, and then use that
// data to change the appearance of the elements. But what if the data we're using is not a fixed
// length? We'll probably want to add and remove elements if the size of our data changes. That's
// where D3's enter() and exit() methods come in.


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

// Either way we still have 5 rectangles. :(



// When we bind data to a selection with the data() method, it gives us back the same selection
// so that we can chain more calls. But that selection is actually slightly modified! If the number
// of data elements changed, enter() and exit() will refer to the additional or missing elements.
window.updateDataBetter = function(someNewData) {

    rectangles = rectangles.data(someNewData);

    // Create new rectangles
    rectangles.enter()
        .append('rect')
        .attr({
            x: function(d, i) {return 100 + i * 100},
            y: 100,
            width: 50,
            height: function(d) {return d * 50},
            class: 'blueShape'
        });

    // Destroy old rectangles
    rectangles.exit()
        .remove();

    // Update existing (same as updateData() above)
    rectangles.data(someNewData)
        .attr('height', function(d) {
            return d * 50;
        });
};

// Try:
//   updateDataBetter([1, 2])
//   updateDataBetter([1, 2, 3, 4, 5, 6, 7])


// And of course can make this look good too just by adding transition(). :)
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

// Try:
//   updateDataBest([1, 2])
//   updateDataBest([1, 2, 3, 4, 5, 6, 7])
