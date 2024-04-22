document.addEventListener("DOMContentLoaded", function () {

    let scatterChart = document.getElementById("splc");
    Plotly.newPlot(scatterChart, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }], {
        margin: { t: 0 }
    });

    let barChart = document.getElementById("bc");
    Plotly.newPlot(barChart, [{
        x: ['A', 'B', 'C', 'D', 'E'],
        y: [10, 20, 30, 40, 50],
        type: 'bar'
    }]);

    let pieChart = document.getElementById("pc");
    Plotly.newPlot(pieChart, [{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        values: [12, 19, 3, 5, 2],
        type: 'pie'
    }]);

    let donutChart = document.getElementById("dc");
    Plotly.newPlot(donutChart, [{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        values: [12, 19, 3, 5, 2],
        type: 'pie',
        hole: 0.4
    }]);

    let bubbleChart = document.getElementById("bbc");
    Plotly.newPlot(bubbleChart, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16],
        mode: 'markers',
        marker: {
            size: [10, 20, 30, 40, 50]
        }
    }]);
});

