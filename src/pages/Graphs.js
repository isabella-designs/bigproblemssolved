import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from "react";

const Graphs = () => {
const Options = {chart: {
    type: 'spline'
  },
  title: {
    text: 'My chart'
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6]
    }
  ]}



    return (
        <div>
            <HighchartsReact highcharts = {Highcharts} options = {Options}></HighchartsReact>
        </div>
    )
}

export default Graphs;