import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from "react";
import mapDataUS from './MapDataUS.js' 
require('highcharts/modules/map')(Highcharts);
const Maps = () => {
const data = []

const mapOptions = {
    title: {
      text: ''
    },
    colorAxis: {
      min: 0,
      stops: [[0.4, '#ffff00'], [0.65, '#bfff00'], [1, '	#40ff00']]
    },
  
    series: [
      {
        mapData: mapDataUS,
        name: 'US',
        data: data
      }
    ]
  };

    return (
        <div>
            <HighchartsReact highcharts = {Highcharts} options = {mapOptions} constructorType={'mapChart'}></HighchartsReact>
            
        </div>
    )
    }
export default Maps;