const overviewGraphObjects = [
    {
        "Description": "Fox News topic coverage from 2021 as a percentage vs percentage of population who believe topic is a big issue in the US, showing a correlation between how frequently a topic is covered and how important the public perceives the topic to be", "options":
        {
            chart: {
                type: 'column',
                backgroundColor: null,
            },
            title: {
                text: 'Annual Topic Coverage vs Public Perceived Importance'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [
                    'Inflation',
                    'Violent Crime',
                    'Affordability of Healthcare',
                    'Covid-19',
                    'Unemployment',
                    'Racism',
                    'Illegal Immigration',
                ],
                crosshair: true
            },
            yAxis:{
                title: {
                    text: 'Percentage'
                },
            },
            series: [{
                name: 'Fox News',
                data: [54.48, 16.52, 6.57, 9.05, 0.91, 1.58, 10.9]

            }, {
                name: 'Public Perception',
                data: [70, 54, 55, 47, 23, 35, 48]

            }]
        }
    },
    {
        "Description": "Monthly Topic Coverage as a Percentage", "options":
        {
            chart: {
                type: 'column',
                backgroundColor: null,
            },
            title: {
                text: 'Monthly Topic Coverage Percentage'
            },
            credits: {
                enabled: false
            },
            yAxis:{
                title: {
                    text: 'Percentage'
                },
            },
            xAxis: {
                categories: [
                    'Inflation',
                    'Covid',
                    'Crime',
                    'Healthcare',
                    'Unemployment',
                    'Sleep Health',
                    'Womens Rights',
                    'Inclusivity',
                    'Preventative Health',

                ],
                crosshair: true
            },
            series: {
                name: "News Coverage Percentage",
                data: [17.21, 15.784, 19.070, 5.629, 13.909, 1.391, 2.371, 0.755, 0.7833]
            }
                
        }
    },
    {
        "Description": "A bias score for each news source analyzed, with negative bias leaning left, and positive bias leaning right", "options":
        {
            chart: {
                type: 'column',
                backgroundColor: null,
            },
            title: {
                text: 'Bias Score for Analyzed News Sources'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'News Sources'
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                    }
                }
            },
            series: [
                {
                    name: 'Bias Score',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'New York Times',
                            y: -2.13,
                            
                        },
                        {
                            name: 'Fox News',
                            y: 8.66,
                           
                        },
                        {
                            name: 'ABC News',
                            y: -4.41,
                           
                        },
                        {
                            name: 'Wall Street Journal',
                            y: 0.51,
                            
                        },
                        {
                            name: 'CNN',
                            y: -7.64,
                            
                        },

                    ]
                }
            ],
        }
    },
    // {
    //     "Description": "description placeholder", "options":
    //     {
    //         chart: {
    //             type: 'sline',
    //             backgroundColor: null,
    //         },
    //         title: {
    //             text: 'Topic Fluctuation Over Months'
    //         },
    //         credits: {
    //             enabled: false
    //         },
    //         xAxis: {
    //             type: 'News Sources'
    //         },

    //     }
    // }
]

export default overviewGraphObjects;