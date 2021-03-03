// Ik heb voor de eerste drie datavisualisaties chart.js gebruikt en de laatste heb ik zelf gemaakt. 




// Javascript voor de brandstof meter.  

    var ctz = document.getElementById('doughnut')
Chart.defaults.global.defaultFontFamily = "'Poppins', Arial';";
Chart.defaults.global.defaultFontColor = 'black';
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
                    text: 'Brandstof',
                    fontFamily: 'Poppins'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            },
            scale: {
                ticks: {
                    fontSize: 29,
                }
            }
        });

// Javascript voor de elektriciteit meter. 
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
                    'rgb(255, 226, 28)'
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
                    text: 'Elektriciteit (in %)',
                    fontFamily: 'Poppins'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });



// Javascript voor de afgelegde kilometers. 
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // Type datvisualisatie
    type: 'line',

    // De data van de grafiek
    data: {
        labels: ['0 uur', '2 uur', '4 uur', '6 uur', '8 uur', '10 uur', '12 uur'],
        datasets: [{
            label: 'x miljoen',
            backgroundColor: 'rgb(0, 128, 255)',
            borderColor: 'rgb(0, 128, 255)',
            data: [3000, 2080, 1500, 1400, 1400, 3000, 4500]
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Totaal aantal afgelegde kilometers per 2 uur',
            fontFamily: 'Poppins'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});    

      