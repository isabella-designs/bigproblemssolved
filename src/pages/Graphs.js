import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from "react";

const Graphs = ({options}) => {



    return (
        <div>
            <HighchartsReact highcharts = {Highcharts} options = {options}></HighchartsReact>
        </div>
    )
}

export default Graphs;