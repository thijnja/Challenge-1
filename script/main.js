Chart.defaults.global.defaultFontFamily = "'Arial';";
Chart.defaults.global.defaultFontColor = 'black';

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

var ctz = document.getElementById('doughnut2')

        var myDoughnut = new Chart(ctz, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        30, 70
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
                    text: 'Elektriciteit (in %)'
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
        labels: ['0 uur', '2 uur', '4 uur', '6 uur', '8 uur', '10 uur', '12 uur'],
        datasets: [{
            label: 'Totaal afgelegde miljoenen kilometers per 2 uur',
            backgroundColor: 'rgb(0, 128, 255)',
            borderColor: 'rgb(0, 128, 255)',
            data: [3000, 2080, 1500, 1400, 1400, 3000, 4500]
        }]
    },

    // Configuration options go here
    options: {}
});    

      