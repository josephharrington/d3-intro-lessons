require('d3');
var svg = d3.select('#content').append('svg')
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight);



// Make 5 circles for us to play with.
for (var i = 0; i < 5; i++) {
    svg.append('circle').attr({
        cx: 200 + i * 200,
        cy: 300,
        r: 50,
        class: 'blueCircle'
    });
}


// Selections are one of the core concepts of d3. A selection is essentially an
// array of DOM elements. But a selection is a special d3 object -- it's
// actually a subclass of array with lots of extra methods.
var circles = svg.selectAll('circle');


// Assigning properties to "window" makes them available in the js console.
// Try inspecting the circles variable in the JS console.
window.circles = circles;


// See a description and list of all the selection methods:
// https://github.com/mbostock/d3/wiki/Selections


// You can also provide a function when assigning attributes.
// D3 will call the function to get a value for the attribute.
window.randomize = function() {
    circles.attr('r', function() {
        return Math.random() * 100;
    });
};


// You can "bind" data to a selection. Here, we'll bind ints to the circles.
circles.data([1, 2, 3, 4, 5]);
// Binding data doesn't do anything by itself. It actually just assigns each
// value to the __data__ property of each element. (You can see this in the
// Properties inspector in Chrome devtools.)


// If we use a function to assign an attribute, D3 passes the element's data
// as the first argument.
window.update1 = function() {
    circles
        .attr('r', function(datum) {
            return datum * 10;
        });
};


// Try running these in the console.
//    circles.data([5, 4, 3, 2, 1])
//    circles.attr('r', function(d) {return d * 10})



// Setting data and updating attributes is often done at the same time.
window.update2 = function(someNewData) {
    circles
        .data(someNewData)
        .attr('r', function(d) {
            return d * 10;
        });
};


// And we can easily make these data changes look nice. :)
window.update3 = function(someNewData) {
    circles
        .data(someNewData)
        .transition(1000)
        .attr('r', function(d) {
            return d * 10;
        });
};
//circles.data([1, 2, 3, 4, 5]).attr('r', function(d) {return d * 10});
//circles.data([1, 5, 2, 2, 1]).transition(3000).attr('r', function(d) {return d * 10});










// But what happens if your selection and data are different sizes?...
