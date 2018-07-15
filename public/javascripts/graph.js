
window.onload = function() {
  const ctx = document.getElementById("bar-graph");
  const barGraph = new Chart(ctx, {
    type: 'bar',
    height:1000,
    data: {
      labels: ["start-ups", "facilitator", "start-ups", "facilitator"],
      datasets: [{
        label: "data 1",
        backgroundColor: "#ff4f1a",
        data: [144, 0, 184, 0]
      }, {
        label: "data 2",
        backgroundColor: "#c64e2a",
        data: [44, 0, 109, 0]
      }, {
        label: "data 3",
        backgroundColor: "#9c6554",
        data: [28, 0, 68, 0]
      }, {
        label: "data 4",
        backgroundColor: "#004d99",
        data: [0, 27, 0, 14]
      }, {
        label: "data 5",
        backgroundColor: "#0059b3",
        data: [0, 0, 0, 25]
      }, {
        label: "data 6",
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

  const ctx1 = document.getElementById("pie-graph");
  const pieGraph = new Chart(ctx1, {
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

  const ctx2 = document.getElementById("pie-graph-2");
  const pieGraph2 = new Chart(ctx2, {
    type: 'pie',
    height: 50,
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

  const ctx3 = document.getElementById("pie-graph-3");
  const pieGraph3 = new Chart(ctx3, {
    type: 'pie',
    height: 50,
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
