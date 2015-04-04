// start slingin' some d3 here.
//

var width = 700,
    height = 500;

var board = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('border', '1px solid black');

var spaceCircles = [{x: 30, y: 50, color: 'purple'}, {x:70, y: 50, color:'purple'}, {x:110, y: 200, color: 'purple'}, {x:100, y: 100, color: 'green'}];

var update = function(data) {
var enemies = d3.select('svg').selectAll('circle')
       .data(data)
       .enter()
       .append('circle');


    enemies.attr('cx', function(d){return d.x})
       .attr('cy', function(d){return d.y})
       .attr('r', 20)
       .style('fill', function(d){return d.color});
}
var newPos = [{x: 40, y: 80, color: 'black'}, {x:50, y: 90, color:'black'}, {x:210, y: 100, color: 'black'}];

update(newPos);
update(spaceCircles);



//     enemies.data(newPos)
//           .attr('cx', function(d){return d.x})
//           .attr('cy', function(d){return d.y})
//           .attr('r', 20)
//           .style('fill', 'black');
