require('d3');
var width = window.innerWidth, height = window.innerHeight;
var svg = d3.select('#content').append('svg')
    .attr('width', width)
    .attr('height', height);


// Lesson 4: Force Layout

// D3 has a ton of other fun stuff to make visualizations of data easy! D3 provides a bunch
// of "layouts" which are kind of shortcuts/presets to getting nice looking visualizations.
// One of my favorites is the "force layout" which does a physical simulation on a graph of
// nodes and edges.

// This example is adapted from http://bl.ocks.org/mbostock/3750558
// The force layout is just one of several layouts that D3 provides.
// Check out other layouts at: https://github.com/mbostock/d3/wiki/Layouts


// First some basic initialization for the force layout.
// For more options see: https://github.com/mbostock/d3/wiki/Force-Layout#force
var force = d3.layout.force()
    .size([window.innerWidth, window.innerHeight])
    .charge(-800)  // Force layout has a bunch of arbitrary parameters. Just tweak them until it looks good. :)
    .linkDistance(50)
    .on('tick', tick);  // "tick" is our own update function defined below.


// Create the initial (empty) selections.
// These need to be defined here since the tick() function below will use these selections to update the DOM.
var lines = svg.selectAll('.link');
var circles = svg.selectAll('.node');


// Previous lessons just defined data inline, which actually isn't that useful in real life. D3
// has a few methods (similar to jquery) that allow you to make ajax calls to get your data. For
// this example I just use a static json file, but it could be any http endpoint, REST api, etc.
d3.json('data/lesson4.json', function(error, jsonData)
{
    if (error) {
        throw error;
    }

    force.nodes(jsonData.nodes)  // Nodes are just objects with an x and y value.
         .links(jsonData.links)  // Links are the edges of the graph, and define which nodes are linked.
         .start();  // This starts D3's simulation loop.

    // The above is all that's needed to get the force layout going! But it's only a numerical simulation.
    // All it's doing is updating the x and y values for each node several times per second.

    // That's not very useful unless we draw some svg elements to show what's happening. But we already know
    // how to do that! This is the same thing we've done in the previous lessons:
    lines = lines.data(jsonData.links);
    lines.enter()
        .append('line')
        .attr('class', 'link');  // This just adds a css class that makes things pretty.

    circles = circles.data(jsonData.nodes);
    circles.enter()
        .append('circle')
        .attr('class', 'node')
        .attr('r', 20)
        .call(force.drag);  // This binds a behavior to the circles to allow interactive dragging.
});


// Since the force layout is a physics simulation, it runs a tick function after
// every update of its internal state. This is where we can update the graphical
// elements of our page to mirror what D3's simulation is doing.
function tick() {
    // Update position attributes for all the svg lines and circles.
    lines.attr('x1', function(d) { return d.source.x; })
         .attr('y1', function(d) { return d.source.y; })
         .attr('x2', function(d) { return d.target.x; })
         .attr('y2', function(d) { return d.target.y; });

    circles.attr('cx', function(d) { return d.x; })
           .attr('cy', function(d) { return d.y; });
}


// Make some stuff accessible to js console so we can play with it.
window.force = force;

// Try playing around with force params in the js console:
//     force.charge(-100).start()
//     force.linkDistance(20).start()




// Fun fact!
// The force layout is actually what Box's ClusterRunner Slave Monitor dashboard is based on!
// Link for Boxers: http://hud.inside-box.net:7337/slave_monitor/
// Link for everyone: https://github.com/josephharrington/ClusterRunner-Dashboard#slave-monitor



// Thank you!
// Thanks for checking out this tutorial! D3 has a steep learning curve, but generally great
// documentation and a ton of examples. Hopefully now you have enough foundation about what
// D3 is doing that you can read through examples with a bit more insight into what the code
// is doing. :)

// More examples at: https://github.com/mbostock/d3/wiki/Gallery
