
window.onload = function() {
  var ctx = document.getElementById("bar-graph");
  var bar_graph = new Chart(ctx, {
    type: 'bar',
    height:1000,
    data: {
      labels: ["start-ups", "facilitator", "start-ups", "facilitator"],
      datasets: [{
        backgroundColor: "#ff4f1a",
        data: [144, 0, 184, 0]
      }, {
        backgroundColor: "#c64e2a",
        data: [44, 0, 109, 0]
      }, {
        backgroundColor: "#9c6554",
        data: [28, 0, 68, 0]
      }, {
        backgroundColor: "#004d99",
        data: [0, 27, 0, 14]
      }, {
        backgroundColor: "#0059b3",
        data: [0, 0, 0, 25]
      }, {
        backgroundColor: "#4da6ff",
        data: [0, 14, 0, 3]
      }]
    }, 
    options: {
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: '2015                                        2017',
            fontStyle: "bold",
            fontSize: 15,
          }
        }],
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            stepSize: 50,
            min: 0,
            max: 200
          }
        }]
      }
    }
  });

  var ctx1 = document.getElementById("pie-graph");
  var pie_graph = new Chart(ctx1, {
    type: 'pie',
    height:50,
    data: {
      datasets: [{
        data: [73, 27],
        backgroundColor: [
          '#273a51',
          '#FB713E',
        ],
        borderColor: [
          '#fff',
          '#fff',
        ],
        borderWidth: 10,
      }]
    },
    options: {
      legend: {
        position: 'bottom',
      },
      responsive: true,
      animate: true,  
      label: false
    }
  });

  var ctx2 = document.getElementById("pie-graph-2");
  var pie_graph = new Chart(ctx2, {
    type: 'pie',
    height:50,
    data: {
      datasets: [{
        data: [58, 27, 15],
        backgroundColor: [
          '#273a51',
          '#FB713E',
          '#ea675c',
        ],
        borderColor: [
          '#e7e9eb',
          '#e7e9eb',
          '#e7e9eb',
        ],
        borderWidth: 10,
      }]
    },
    options: {
      legend: {
        position: 'bottom',
      },
      responsive: true,
      animate: true,  
    }
  });

  var ctx3 = document.getElementById("pie-graph-3");
  var pie_graph = new Chart(ctx3, {
    type: 'pie',
    height:50,
    data: {
      datasets: [{
        data: [47.5, 34.3, 14.1, 4],
        backgroundColor: [
          '#273a51',
          '#FB713E',
          '#ea675c',
          '#5c99df',
        ],
        borderColor: [
          '#273a51',
          '#e7e9eb',
          '#ea675c',
          '#5c99df',
        ],
        borderWidth: 3,
      }]
    },
    options: {
      legend: {
        position: 'bottom',
      },
      responsive: true,
      animate: true,  
    }
  });
}