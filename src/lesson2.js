require('d3');
var svg = d3.select('#content').append('svg')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight);



// Make 5 rectangles for us to play with.
for (var i = 0; i < 5; i++) {
    svg.append('rect').attr({
        x: 200 + i * 200,
        y: 100,
        width: 100,
        height: 200,
        class: 'blueShape'
    });
}


// Selections are one of the core concepts of d3. A selection is essentially an
// array of DOM elements. But a selection is a special d3 object -- it's
// actually a subclass of array with lots of extra methods.
var rectangles = svg.selectAll('rect');


// Assigning properties to "window" makes them available in the js console.
// Try inspecting the rects variable in the JS console.
window.rectangles = rectangles;


// See a description and list of all the selection methods:
// https://github.com/mbostock/d3/wiki/Selections


// You can also provide a function when assigning attributes.
// D3 will call the function to get a value for the attribute.
window.randomize = function() {
    rectangles.attr('height', function() {
        return Math.random() * 300;
    });
};


// You can "bind" data to a selection. Here, we'll bind ints to the rects.
rectangles.data([1, 2, 3, 4, 5]);
// Binding data doesn't do anything by itself. It actually just assigns each
// value to the __data__ property of each element. (You can see this in the
// Properties inspector in Chrome devtools.)


// If we use a function to assign an attribute, D3 passes the element's data
// as the first argument.
window.updateHeight = function() {
    rectangles
        .attr('height', function(datum) {
            return datum * 50;
        });
};


// Try running these in the console.
//    rectangles.data([5, 4, 3, 2, 1])
//    rectangles.attr('height', function(d) {return d * 50})



// Setting data and updating attributes is often done at the same time.
window.updateHeightData = function(someNewData) {
    rectangles
        .data(someNewData)
        .attr('height', function(d) {
            return d * 50;
        });
};


// And we can easily make these data changes look nice. :)
window.updateHeightDataWithTransition = function(someNewData) {
    rectangles
        .data(someNewData)
        .transition()
//        .duration(2000)
        .attr('height', function(d) {
            return d * 50;
        });
};


// But what happens if your selection and data are different sizes?
// Try:
//  updateHeightData([1, 2])
//  updateHeightData([1, 2, 3, 4, 5, 6, 7])

// Neither of the above do what we want...