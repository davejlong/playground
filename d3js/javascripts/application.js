(function () {
  nv.addGraph(function () {
    var chart = nv.models.lineChart();

    chart.xAxis
      .axisLabel('Time (ms)')
      .tickFormat(d3.format(',r'));

    chart.yAxis
      .axisLabel('Voltage (v)')
      .tickFormat(d3.format('.02f'));

    d3.select('#chart svg')
      .datum(lineFixture)
      .transition().duration(500)
      .call(chart);

    nv.utils.windowResize(function () {
      d3.select('#chart svg').call(chart);
    });

    return chart;
  });
}());


/**
 * FIXTURES generator
 **/
function lineFixture () {
  var sources = ['Indeed', 'SimpleHired', 'Zip Alerts'];
  sources.forEach(function (source) {

  });
}
