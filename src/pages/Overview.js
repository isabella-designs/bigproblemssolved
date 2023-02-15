import './Overview.css';
import React, { useState } from "react";
import { useGlobalState } from "../GlobalState.js"
import Footer from './Footer.js'
import Graphs from './Graphs.js'
import SpecificNewsTopics from './SpecificNewsTopics'

function Overview() {
    const [globalState, updateGlobalState] = useGlobalState()
    const Options1 = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Weekly Topic Coverage Frequency'
        },
        xAxis: {
            categories: [
                'Topic 1',
                'Topic 2',
                'Topic 3',
                'Topic 4',
                'Topic 5',
                'Topic 6',

            ],
            crosshair: true
        },
        series: [{
            name: 'New York Times',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0,]

        }, {
            name: 'Fox News',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5,]

        }, {
            name: 'CNN',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 59.6,]

        }, {
            name: 'ABC News',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5,]

        }, {
            name: 'Wall Street Journal',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5,]
        }]
    }

    const Options2 = {
        chart: {
            type: 'column'
        },
        title: {
            text: '% Biased News Content'
        },

        xAxis: {
            type: 'News Sources'
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
        series: [
            {
                name: 'News Site',
                colorByPoint: true,
                data: [
                    {
                        name: 'New York Times',
                        y: 63.06,
                        drilldown: 'Chrome'
                    },
                    {
                        name: 'Fox News',
                        y: 19.84,
                        drilldown: 'Safari'
                    },
                    {
                        name: 'ABC News',
                        y: 4.18,
                        drilldown: 'Firefox'
                    },
                    {
                        name: 'Wall Street Journal',
                        y: 4.12,
                        drilldown: 'Edge'
                    },
                    {
                        name: 'CNN',
                        y: 2.33,
                        drilldown: 'Opera'
                    },

                ]
            }
        ],
        drilldown: {
            breadcrumbs: {
                position: {
                    align: 'right'
                }
            },
            series: [
                {
                    name: 'Chrome',
                    id: 'Chrome',
                    data: [
                        [
                            'v65.0',
                            0.1
                        ],
                        [
                            'v64.0',
                            1.3
                        ],
                        [
                            'v63.0',
                            53.02
                        ],
                        [
                            'v62.0',
                            1.4
                        ],
                        [
                            'v61.0',
                            0.88
                        ],
                        [
                            'v60.0',
                            0.56
                        ],
                        [
                            'v59.0',
                            0.45
                        ],
                        [
                            'v58.0',
                            0.49
                        ],
                        [
                            'v57.0',
                            0.32
                        ],
                        [
                            'v56.0',
                            0.29
                        ],
                        [
                            'v55.0',
                            0.79
                        ],
                        [
                            'v54.0',
                            0.18
                        ],
                        [
                            'v51.0',
                            0.13
                        ],
                        [
                            'v49.0',
                            2.16
                        ],
                        [
                            'v48.0',
                            0.13
                        ],
                        [
                            'v47.0',
                            0.11
                        ],
                        [
                            'v43.0',
                            0.17
                        ],
                        [
                            'v29.0',
                            0.26
                        ]
                    ]
                },
                {
                    name: 'Firefox',
                    id: 'Firefox',
                    data: [
                        [
                            'v58.0',
                            1.02
                        ],
                        [
                            'v57.0',
                            7.36
                        ],
                        [
                            'v56.0',
                            0.35
                        ],
                        [
                            'v55.0',
                            0.11
                        ],
                        [
                            'v54.0',
                            0.1
                        ],
                        [
                            'v52.0',
                            0.95
                        ],
                        [
                            'v51.0',
                            0.15
                        ],
                        [
                            'v50.0',
                            0.1
                        ],
                        [
                            'v48.0',
                            0.31
                        ],
                        [
                            'v47.0',
                            0.12
                        ]
                    ]
                },
                {
                    name: 'Internet Explorer',
                    id: 'Internet Explorer',
                    data: [
                        [
                            'v11.0',
                            6.2
                        ],
                        [
                            'v10.0',
                            0.29
                        ],
                        [
                            'v9.0',
                            0.27
                        ],
                        [
                            'v8.0',
                            0.47
                        ]
                    ]
                },
                {
                    name: 'Safari',
                    id: 'Safari',
                    data: [
                        [
                            'v11.0',
                            3.39
                        ],
                        [
                            'v10.1',
                            0.96
                        ],
                        [
                            'v10.0',
                            0.36
                        ],
                        [
                            'v9.1',
                            0.54
                        ],
                        [
                            'v9.0',
                            0.13
                        ],
                        [
                            'v5.1',
                            0.2
                        ]
                    ]
                },
                {
                    name: 'Edge',
                    id: 'Edge',
                    data: [
                        [
                            'v16',
                            2.6
                        ],
                        [
                            'v15',
                            0.92
                        ],
                        [
                            'v14',
                            0.4
                        ],
                        [
                            'v13',
                            0.1
                        ]
                    ]
                },
                {
                    name: 'Opera',
                    id: 'Opera',
                    data: [
                        [
                            'v50.0',
                            0.96
                        ],
                        [
                            'v49.0',
                            0.82
                        ],
                        [
                            'v12.1',
                            0.14
                        ]
                    ]
                }
            ]
        }
    }
    const Options3 = {
        chart: {
            type: 'sline'
        },
        title: {
            text: 'Topic Fluctuation Over Months'
        },

        xAxis: {
            type: 'News Sources'
        },

    }

    const graphs = [{
        "Description": "description placeholder", "options": Options1
    }, {
        "Description": "Click on each news bar to see detailed bias breakdown of each source", "options": Options2
    }, {
        "Description": "Click on each news bar to see detailed bias breakdown of each source", "options": Options3
    }]
    const [showLearnMore, setshowLearnMore] = useState(false);
    const [clickedButton, setclickedButton] = useState("");
    const onClick = (event) => {
        setclickedButton(event.target.name)
        setshowLearnMore(true)
    }
    const onClose = () => {
        setshowLearnMore(false)
        setclickedButton("")
    }
    return (
        <div class="overview" >
            <h1 class='heading'> Most Factual News</h1>
            <div class="scrollableContainerOverview">
                {graphs.map((item, index) => (
                    <div class="cardOverview">
                        <Graphs options={item.options}></Graphs>
                        <p>{item.Description}</p>

                    </div>
                ))}
            </div>
            <div class="topics">
                <h1> Most Popular and Accurate News This Week</h1>
                <div>
                    <button class="newsButton" name="disease" onClick={onClick}>Disease</button>
                    <button class="newsButton" name="cancer" onClick={onClick}>Cancer</button>
                    <button class="newsButton" name="finance" onClick={onClick}>Finance</button>
                    <button class="newsButton" name="politics" onClick={onClick}>Politics</button>
                </div>
                {showLearnMore &&
                    <SpecificNewsTopics name={clickedButton} onClose={onClose}>
                    </SpecificNewsTopics>
                }
            </div>
            <Footer>

            </Footer>
        </div >
    )
}

export default Overview;