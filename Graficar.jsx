import React, {Component} from 'react';
import createPlotlyComponent from 'react-plotlyjs';

import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

export default class Heatmap extends Component {
  render() {
    let data = [
          {
          z: [
              [1, 30, 30],
              [20, 1, 60],
              [35, 60, 1]
            ].reverse(),
          type: 'heatmap'
          }
        ];
    let layout={
      title: 'Plot SAR',
      showlegend: false,
      width: 550,
      height: 500,
      autosize: false
    }
    return (
      <div>
        <div className="centerHead">
          <PlotlyComponent className="whatever" data={data} layout={layout}/>
        </div>
      </div>
    );
  }
}
