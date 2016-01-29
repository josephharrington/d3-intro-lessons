require('d3');
var svg = d3.select('#content').append('svg')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight);

// Put 5 rectangles on the page for us to play with.
for (var i = 0; i < 5; i++) {
    svg.append('rect').attr({
        x: 200 + i * 200,
        y: 100,
        width: 100,
        height: 200,
        class: 'blueShape'
    });
}


// Lesson 2: Selections and Data

// "Selections" are one of the core concepts of d3. A selection is conceptually just an
// array of DOM elements. But a selection isn't actually an array -- it's a special d3 object.
// (In fact it's actually a subclass of a javascript array with lots of extra methods.)


// This call gives us a selection of all the <rect> elements on the page (the five we created above).
var rectangles = svg.selectAll('rect');


// There are a bunch of ways to select elements. For a description and list of all the selection methods:
// https://github.com/mbostock/d3/wiki/Selections


// Assigning properties to "window" makes them available in the js console.
// Try typing "rectangles" into the JS console. (https://developer.chrome.com/devtools/docs/console)
window.rectangles = rectangles;


window.randomize = function() {

    // You can provide a function when assigning attributes to a selection.
    // D3 will call the function to get a value for the attribute.
    rectangles.attr('height', function() {
        return Math.random() * 300;
    });

};
// Now we have a function called "randomize" that will give a random height to each
// element in the rectangles selection.


// Try typing this in the js console:
//   randomize()

// You should see the rectangles all change height every time randomize() is called.



// You can "bind" data to a selection. Here, we'll bind integers to the <rect> elements.
rectangles.data([1, 2, 3, 4, 5]);

// Binding data doesn't do anything by itself. It actually just assigns each
// value to the __data__ property of each element. (You can see this in the
// Properties inspector in Chrome devtools.)


// So, how is data binding useful?



window.updateHeight = function() {

    // If we use a function to assign an attribute to a selection of elements,
    // D3 passes each element's bound data as the first argument.
    rectangles
        .attr('height', function(datum) {
            return datum * 50;
        });

};

// Try running these commands in the javascript console:
//   rectangles.data([5, 4, 3, 2, 1]);
//   updateHeight();



window.updateHeightData = function(someNewData) {

    // Setting data and updating attributes is often done at the same time.
    rectangles
        .data(someNewData)
        .attr('height', function(d) {
            return d * 50;
        });

};

// Try this your browser's js console:
//   updateHeightData([7, 1, 7, 1, 7])



window.updateHeightDataWithTransition = function(someNewData) {

    // And we can easily make these data changes look nice with animation. :)
    rectangles
        .data(someNewData)
        .transition()
//        .duration(2000)  // Transitions are customizable. Try uncommenting this line.
        .attr('height', function(d) {
            return d * 50;
        });

};

// Try this your browser's js console:
//   updateHeightDataWithTransition([1, 1, 3, 5, 2])



// But what happens if your selection and data are different sizes?
// Try this your browser's js console:
//   updateHeightData([1, 2])
//   updateHeightData([1, 2, 3, 4, 5, 6, 7])

// Neither of the above do what we'd expect! We still have five rectangles. :(
// But we can fix that...
