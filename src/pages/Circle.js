import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from "react";
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
import HCSoldGauge from 'highcharts/modules/solid-gauge';


ChartModuleMore(Highcharts);
HCSoldGauge(Highcharts);

const Circle = ({value}) => {
    const Options = {
        chart: {
            type: 'solidgauge',
            height: '80%',
            backgroundColor: null,
        },
        title: {
            text: ''
            },
            credits: {
                enabled: false
              },
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }]
        },
    
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
    
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },
        tooltip: {
            enabled: false
          },
    
        series: [{
            name: 'Move',
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: value
            }]
        }]
    }


    return (
        <div>
            <HighchartsReact highcharts = {Highcharts} options = {Options}></HighchartsReact>
        </div>
    )
}

export default Circle;