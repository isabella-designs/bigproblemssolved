import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from "react";
import './Heatmap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Heatmap from 'highcharts/modules/heatmap.js';
Heatmap(Highcharts);

const HeatmapGraph = ({ data, onClose }) => {
  const closeWindow = (event) => {
    onClose()
  }

  const Options = {
    chart: {
      type: 'heatmap',
      backgroundColor: null,
    },
    title: {
      text: 'Correlation Heatmap of Various Health Outcomes to Health Factors'
    },
    credits: {
      enabled: false
  },
    xAxis: {
      categories: ['Years Of Potential Life Lost Rate', '% Fair or Poor Health', '% Frequent Mental Distress', '% Frequent Physical Distress']
    },
    yAxis: {
      categories: ['% Adults with Diabetes', '% with Insufficient Sleep', '% Smokers', '% Adults with Obesity', '% Physically Inactive', "% Unemployed", "Violent Crime Rate", "% Vaccinated", "High School Graduation Rate"],
    },
    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
  },
    series: [{
      name: 'Correlation',
      borderWidth: 1,
      data: [[0, 0, 0.56], [1, 0, 0.53], [2, 0, 0.56], [3, 0, 0.54], [0, 1, 0.58], [1, 1, 0.72], [2, 1, 0.79], [3, 1, 0.74], [0, 2, 0.71], [1, 2, 0.71], [2, 2, 0.86], [3, 2, 0.81], [0, 3, 0.45], [1, 3, 0.4], [2, 3, 0.42], [3, 3, 0.41],],
      dataLabels: {
        enabled: true,
        color: '#000000'
      }
    }],
  }

  return (
    <div class="heatmap">
      <button class="closeButton" onClick={closeWindow}>
        <FontAwesomeIcon className="fa-3x" icon={faXmark} />
      </button>
      <div class="visualization">
        <HighchartsReact highcharts={Highcharts} options={Options}></HighchartsReact>
      </div>

    </div>
  )
}
export default HeatmapGraph;