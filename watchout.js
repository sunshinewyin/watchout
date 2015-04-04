// start slingin' some d3 here.
//

var width = 700,
    height = 500;

var board = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('border', '1px solid black');

var generatePosition = function(){
  var dataArray = [];
  for (var i = 0; i < enemyData.length; i++){
    var posObj = {
      x: Math.random()* width,
      y: Math.random()* height
    }

    dataArray.push(posObj);
  }
  return dataArray;
}

var enemyData = [{x: 30, y: 50, color: 'purple'}, {x:70, y: 50, color:'purple'}, {x:110, y: 200, color: 'purple'}, {x:100, y: 100, color: 'green'}];
var newPos = [{x: 40, y: 80, color: 'black'}, {x:50, y: 90, color:'black'}, {x:210, y: 100, color: 'black'}];

var update = function(data) {
var enemies = d3.select('svg').selectAll('circle')
       .data(data);

enemies.attr('r', 10)
       .style('fill', function(d){return d.color})


enemies.enter()
       .append('circle')
       .attr('r', 10)
      .style('fill', function(d){return d.color})


enemies.transition()
        .duration(700)
        .attr('cy', function(d){return d.y})
        .attr('cx', function(d){return d.x})
}

update(enemyData); //initialize
setInterval(function(){return update(generatePosition())}, 1000);

