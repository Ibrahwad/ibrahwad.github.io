document.addEventListener("DOMContentLoaded", function() {
    const colors = {
        'Example 1': {
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)'
        },
        'Example 2': {
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)'
        },
        'Country A': {
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)'
        },

        'Country B': {
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)'
        },

        'Country C': {
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86, 1)'
        },

        'Country D': {
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)'
        },
    };
    
    const yearlySums = chartData.datasets[0].data.map((_, index) => 
    chartData.datasets.reduce((sum, dataset) => sum + dataset.data[index], 0)
);

// JS to calculate percentage distribution
const percentageData = chartData.datasets.map(dataset => ({
    label: dataset.label,
    data: dataset.data.map((value, index) => 
        parseFloat(((value / yearlySums[index]) * 100).toFixed(1))
    )
}));


function generateTable(data) {
    let tableHTML = "<table><thead><tr><th>Country</th><th>2019</th><th>2020</th><th>2021</th><th>2022</th><th>2023</th></tr></thead><tbody>";
    
    for (let i = 0; i < data.datasets.length; i++) {
        tableHTML += `<tr><td>${data.datasets[i].label}</td>`;
        for (let j = 0; j < data.datasets[i].data.length; j++) {
            tableHTML += `<td>${data.datasets[i].data[j]}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += "</tbody></table>";
    
    return tableHTML;
}

document.getElementById('tableContainer').innerHTML = generateTable(chartData);

function generatePercentageTable(data) {
    let tableHTML = "<table><thead><tr><th>Country</th><th>2019 (%)</th><th>2020 (%)</th><th>2021 (%)</th><th>2022 (%)</th><th>2023 (%)</th></tr></thead><tbody>";
    
    for (let i = 0; i < data.length; i++) {
        tableHTML += `<tr><td>${data[i].label}</td>`;
        for (let j = 0; j < data[i].data.length; j++) {
            tableHTML += `<td>${data[i].data[j]}%</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += "</tbody></table>";
    
    return tableHTML;
}

document.getElementById('percentageTableContainer').innerHTML = generatePercentageTable(percentageData);

function percentageToDecimalData(percentageData) {
    return percentageData.map(country => ({
        label: country.label,
        data: country.data.map(value => value / 100),
        // The borderColor can be integrated later using the integrateColors function
    }));
}

const datasetsForChart = percentageToDecimalData(percentageData);


    const chartDataSets = {
        //initial bar chart
        'chart3': {
            type: 'bar',
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Country A',
                data: [52, 54, 51, 72, 68],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Country B',
                data: [60, 62, 64, 66, 70],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Country C',
                data: [64, 72, 54, 76, 72],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 1
            },
            {
                label: 'Country D',
                data: [53, 66, 62, 77, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }],
            options:  {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        min: 0,
                        max: 80,
                        beginAtZero: false
                    }
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        fontColor: '#FFFFFF'
                    }
                },
                title: {
                    display: true,
                    text: 'GDP Growth in Fake Countries (Bar Representation)',
                    font: {
                        size: 16,
                        color: '#FFFFFF' // or any other color you want
                    }
                }
            }
        },

      /*  //2nd bar chart
        'chart4': {
            type: 'bar',
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Country A',
                data: [52, 54, 51, 72, 68],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Country B',
                data: [60, 62, 64, 66, 70],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Country C',
                data: [64, 72, 54, 76, 72],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 1
            },
            {
                label: 'Country D',
                data: [53, 66, 62, 77, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }],
            options:  {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        min: 50,
                        max: 80,
                        beginAtZero: false
                    }
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        fontColor: 'rgb(255, 99, 132)'
                    }
                },
                title: {
                    display: true,
                    text: 'GDP Growth in Fake Countries (Bar Representation)',
                    font: {
                        size: 16,
                        color: 'black' // or any other color you want
                    }
                }
            }
        }, */


        //line chart for data
        'lineChart': {
            type: 'line',
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [ {
                label: 'Country A',
                data: [52, 54, 51, 72, 68],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false // no fill beneath the line
            },
            {
                label: 'Country B',
                data: [60, 62, 64, 66, 70],
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            },
            {
                label: 'Country C',
                data: [64, 72, 54, 76, 72],
                borderColor: 'rgba(255, 205, 86, 1)',
                fill: false
            },
            {
                label: 'Country D',
                data: [53, 66, 62, 77, 70],
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            },
        
        ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            color:'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y: {
                        min: 45, // Start the y-axis at 50%
                        max: 80,  // End the y-axis at 80%
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }

                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    title: { //title section
                        display:false,
                        text: 'Widget Companies: Total Revenue per Year',
                        font: {
                            size: 16,
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        },

        

        'stackedbar': {
            type: 'bar',  // Changed to 'bar' for a stacked bar chart
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: datasetsForChart, // This should contain your data after processing through percentageToDecimalData
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked:true,
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y: {
                        stacked:true,
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                
                            callback: function(value,index,values) {return value * 100 + '%'}
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        font: {
                            size: 16,
                            color: 'rgba(255, 255, 255, 0.7)'
                        },
                        
                    },
                    title: {
                        display: false,
                        text: 'Widget Companies: Total Revenue per Year',
                        font: {
                            size: 16,
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        },

        'areaChart': {
            type: 'line',
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                label: 'Country A',
                data: [22.7, 21.3, 22.1, 24.7, 24.3],
                shouldFill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
                },
                {
                label: 'Country B',
                data: [26.2, 24.4, 27.7, 22.7, 25.0],
                shouldFill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1
                },
                {
                label: 'Country C',
                data: [27.9, 28.3, 23.4, 26.1, 25.7],
                shouldFill: true,
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderWidth: 1
                },
                {
                label: 'Country D',
                data: [23.1, 26.0, 26.8, 26.5, 25.0],
                shouldFill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1
                }
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked:true,
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y: {
                        max:100,
                        stacked: true,
                        beginAtZero: true,
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            callback: function(value,index,values) {return value + '%'}
                            
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    title: {
                        display: false,
                        text: 'Widget Companies: Total Revenue per Year',
                        font: {
                            size: 16,
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        },

        'lineChart2': {
            type: 'line',
            labels: ['2020', '2021', '2022', '2023'],
            datasets: [ 
            {
                    label: 'Category Average',
                    data: [11.05, -8.35, 27.31, -3.46],
                    borderColor: 'rgba(255,255,255,1)',
                    borderDash: [5, 5],
                    fill: false // no fill beneath the line
            },
            {
                label: 'Country A',
                data: [3.85, -5.56, 41.18, -5.56],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false // no fill beneath the line
            },
            {
                label: 'Country B',
                data: [3.33, 3.23, 3.13, 6.06],
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            },
            {
                label: 'Country C',
                data: [12.50, -25.00, 40.74, -5.26],
                borderColor: 'rgba(255, 205, 86, 1)',
                fill: false
            },
            {
                label: 'Country D',
                data: [24.53, -6.06, 24.19, -9.09],
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            },
        
        ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            color:'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y: {
                        min: -50,
                        max: 50, 
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            callback: function(value,index,values) {return value + '%'}
                        }
                    }

                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        },

        'Chart2': {
            type: 'bar',
            labels: ['2020', '2021', '2022', '2023'],
            datasets: [ 

            {
                label: 'Company A Revenue ($M)',
                data: [52, 54, 72, 68],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        
        ],
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        ticks: {
                            color:'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y: { 
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }

                },
                plugins: {
                    legend: {
                        display: false,
                        position: 'top'
                
                    }
                }
            }
        },

        'Chart6': {
            type: 'bar',
            labels: [
                'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020', 'Dec 2020',
                'Jan 2021', 'Feb 2021', 'Mar 2021', 'Apr 2021', 'May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021',
                'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022',
                'Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023'
            ],
            datasets: [{
                label: 'Monthly Revenue',
                data: Array.from({ length: 48 }, () => Math.floor(Math.random() * 100)), // Mock data
                backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }],
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y: {
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        }
    };


// The following function integrates the data sets, as well as just updates and creates a new chart whenever required.

function integrateColors(dataset) {
    for (let data of dataset.datasets) {
        if (colors[data.label]) {
            data.backgroundColor = data.backgroundColor || colors[data.label].backgroundColor;
            data.borderColor = data.borderColor || colors[data.label].borderColor;

            // Only set fill if shouldFill property is true
            if (data.shouldFill) {
                data.fill = true;
            }
        }
    }
    return dataset;
}

    for (let chartId in chartDataSets) {
        const chartData = integrateColors(chartDataSets[chartId]);
        const ctx = document.getElementById(chartId).getContext('2d');
        
        new Chart(ctx, {
            type: chartData.type,
            data: {
                labels: chartData.labels,
                datasets: chartData.datasets
            },
            options: chartData.options
        });
    }


});


//The script to load the table for this

const chartData = {
    datasets: [
        {
            label: 'Country A',
            data: [52, 54, 51, 72, 68],
        },
        {
            label: 'Country B',
            data: [60, 62, 64, 66, 70],
        },
        {
            label: 'Country C',
            data: [64, 72, 54, 76, 72],
        },
        {
            label: 'Country D',
            data: [53, 66, 62, 77, 70],
        }
    ]
};



