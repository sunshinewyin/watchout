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
                 {x:0, y:0, color: 'black'},
                 {x:0, y:0, color: 'black'},
                 {x:0, y:0, color: 'black'},
                 {x:0, y:0, color: 'black'},
                 {x:0, y:0, color: 'black'},
                 {x:0, y:0, color: 'black'},
                 {x:0, y:0, color: 'black'},
                 {x:0, y:0, color: 'black'},
                 {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'},
                 // {x:0, y:0, color: 'black'}
                 ];
var enemies;
var collisions = 0;
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
        .duration(3000)
        .attr('cy', function(d){return d.y})
        .attr('cx', function(d){return d.x})
        .attr('r', 10)
        .style('fill', function(d){return d.color})
        .tween('changeColor', function(){

          return function(t){
            var collided = false;
            var enemy = d3.select(this);
            var xPos = parseFloat(enemy.attr('cx'));
            var yPos = parseFloat(enemy.attr('cy'));
            var enemyRad = parseInt(enemy.attr('r'));
            var playerXPos = parseFloat(player.attr('cx'));
            var playerYPos = parseFloat(player.attr('cy'));
            var playerXRad = parseInt(player.attr('rx'));
            var playerYRad = parseInt(player.attr('ry'));

            var distanceX = (xPos - playerXPos);
            var distanceY = (yPos - playerYPos);
            var sumRad = playerXRad + enemyRad;

            var separation = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
            if (separation < sumRad){
              collided = true;
              collided++;
              while(separation < sumRad){
                console.log('passin through');
              }
            }
          };
        });
};

update(enemyData); //initialize
setInterval(function(){return update(generatePosition());}, 3000);

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


