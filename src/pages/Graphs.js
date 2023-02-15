import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from "react";

const Graphs = ({options}) => {



    return (
        <div>
          {console.log(options)}
            <HighchartsReact highcharts = {Highcharts} options = {options}></HighchartsReact>
        </div>
    )
}

export default Graphs;