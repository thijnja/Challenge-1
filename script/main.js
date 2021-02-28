

/* document.getElementById('doughnut');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['orange', 'red'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor:[
            window.chartColors.orange,
            window.chartColors.red ],
            borderColor: 'rgb(255, 255, 255)',
            data: [0, 10]
        }]
    },
    options: {}
});
*/


// Ik heb voor de datavisualisatie chart.js gebruikt. //  

    var ctz = document.getElementById('doughnut')

        var myDoughnut = new Chart(ctz, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        10, 90
                    ],
                    backgroundColor: [
                    'rgb(255, 0, 0)',
                    'rgb(58, 255, 36)'
                    ],
                    
                    label: 'Dataset 1'
                }],
                labels: [
                    'Verbruikt',
                    'Resterend',
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Brandstof'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(255, 255, 255)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});    

      