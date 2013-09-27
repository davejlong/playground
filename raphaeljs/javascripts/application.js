$(document).foundation();

(function () {
  /** ============== Playing with Shapes ==================== */
  // Creates a Raphael Canvas of 250x250 in the #shapes div
  var shapePaper = Raphael(document.getElementById('shapes'), 250, 250);

  // Create a circle at 125, 125 with radius 50
  var circle = shapePaper.circle(125, 125, 50);
  circle.attr('fill', 'blue');

  // Creates a square at 5, 5 with height/width of 50
  var square = shapePaper.rect(5, 5, 50, 50);
  square.attr('fill', 'green');

  // Creates an ellipse at 180, 180 with h-axis of 20 and v-axis of 30
  var ellipse = shapePaper.ellipse(180, 180, 20, 30);
  ellipse.attr('fill', 'red');


  /** ============== Playing with Paths  ==================== */
  // Creates a Canvas of 250x250 in the #paths div
  var pathPaper = Raphael(document.getElementById('paths'), 250, 250);

  // Draw a diagonal line
  // move to 10,10, line to 90,90
  var path = pathPaper.path('M10 10 L 190 190');
  path.attr('stroke', 'red');
  path.attr('stroke-width', '3');

  // Creates a circle shape using path at 125, 125 with radius of 50
  console.log(getCircleToPath(125, 125, 0));
  var circleDrawnAsPath = pathPaper.path(getCircleToPath(125, 125, 50));
  circleDrawnAsPath.attr('stroke', 'green');
  circleDrawnAsPath.attr('stroke-width', 3);

  function getCircleToPath(x, y, r) {
    return "M" + x + "," + (y - r) + "A" + r + "," + r + ",0,1,1," + (x - 0.1) + "," + (y - r) + " z";
  }


  /** ============== Playing with Stack  ==================== */
  // Creates a canvase of 250x270 in the #stack div
  var stackPaper = Raphael(document.getElementById('stack'), 250, 270);
  DrawBars({
    "56%": 56,
    "28%": 28,
    "15%": 15,
    "01%": 1
  });
  function DrawBars (data) {
    var vals = [];
    var labels = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        labels.push(key);
        vals.push(Number(data[key]));
      }
    }
    var startingY = 55;
    var totalHeight = 60;
    var verticalGap = 8;
    var heights = _.map(vals, function (val) { return Math.round(val/100*totalHeight); });
    var drawCube = function (y, height, canvas, f1, f2, f3, label) {
      var rect1 = canvas.path("M 0 " + y + " 57 " + (y + 22) +" 188 " + y +" 127 " + (y - 16) + " 0 " + y);
      rect1.attr({fill: f1, stroke: f1, 'stroke-width': 0}); 

      var rect2 = canvas.path("M 0 " + y + " 0 " +(y + height) +" 57 " + (y + height + 22) + " 57 " + (y + 22) + " 0 " + y);         
      rect2.attr({fill: f2, stroke: f2, 'stroke-width': 0});         

      var rect3 = canvas.path("M 57 " + (y + 22) +" 57 " + (y + height + 22) +" 188 " + (y + height)+" 188 " + y +" 57 " + (y + 22));      
      rect3.attr({fill: f3, stroke: f3, 'stroke-width': 0}); 
      var labely = y+height/2;
      var label1 = canvas.path("M 188 " + labely + " 226 " + labely)
      label1.attr({stroke: "#fff", 'stroke-width': 1}); 
      var text = canvas.text(226, labely, label);
      text.attr({"text-anchor":"start",'font-size':12,"font-family":"arial","fill":"#000"});
    }
    drawCube((startingY + heights[0] + heights[1] + heights[2] + (verticalGap*3)),heights[3],stackPaper,"#BBE6FB","#89D7f8","#39C8F4",labels[3]);
    drawCube((startingY + heights[0] + heights[1] + (verticalGap*2)), heights[2], stackPaper, "#3FC8F4", "#0CB5EB", "#0094DA", labels[2]);
    drawCube((startingY + heights[0] + (verticalGap*1)), heights[1], stackPaper, "#2A80B8", "#0269A6", "#003F84", "28% Android", labels[1]);
    drawCube(startingY, heights[0] ,stackPaper, "#7F8184", "#575759", "#221E1F", labels[0]);
  }

}());
