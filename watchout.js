// start slingin' some d3 here.
//

var width = 700,
    height = 500;

var board = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('border', '1px solid black');

var playerAttributes = {
  fill : 'black',
  x : 200,
  y : 200,
  rx : 15,
  ry : 15
};

var player = board.selectAll('ellipse').data([playerAttributes]);


    player.enter()
          .append('ellipse')
          .attr('rx', function(d){return d.rx})
          .attr('ry', function(d){return d.ry})
          .attr('cx', function(d){return d.x})
          .attr('cy', function(d){return d.y})
          .style('fill', function(d){return d.fill});


var drag = d3.behavior.drag()
            .on('drag', function() {
                player.attr('cx', d3.event.x)
                      .attr('cy', d3.event.y);
              });

player.call(drag);

var color = ['purple', 'green', 'red', 'yellow', 'orange', 'blue'];

var generatePosition = function(){
  var dataArray = [];
  for (var i = 0; i < enemyData.length; i++){
    var posObj = {
      x: Math.random()* width,
      y: Math.random()* height,
      color: color[Math.floor(Math.random()*color.length)]
    }

    dataArray.push(posObj);
  }
  return dataArray;
}

var enemyData = [
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'},
                 {x:200, y:200, color: 'black'}
                 ];
var enemies;
var update = function(data) {
enemies = d3.select('svg').selectAll('circle')
       .data(data);

// enemies.attr('r', 10)
       // .style('fill', function(d){return d.color})


enemies.enter()
       .append('circle');
       // .attr('r', 10)
      // .style('fill', function(d){return d.color})


enemies.transition()
        .duration(1000)
        .attr('cy', function(d){return d.y})
        .attr('cx', function(d){return d.x})
        .attr('r', 10)
        .style('fill', function(d){return d.color})
        .tween('changeColor', function(){
          return function(t){
            var xPos = enemies.attr('cx');
            var yPos = enemies.attr('cy');
            var enemyRad = enemies.attr('r');
          };


        });
};

update(enemyData); //initialize
setInterval(function(){return update(generatePosition());}, 1000);

// compare the position of each enemy to the position of player
// if the difference in locations < sum of radii -- collision occured
//
// enemies --- d.r -- this
// player -- d.rx
//
// enemies --- d.x, d.y
// player --- d.x, d.y
//
// return function()


