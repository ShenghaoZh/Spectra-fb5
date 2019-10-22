import React, { Component } from 'react';
import MyTemplete  from '../Template';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';
import CodeBlock from '../';
import ReactMarkdown from 'react-markdown';

class MyLineSeries extends Component
{
  state = {
    value: false
  };
  renderHeat()
  {
    
    const data=[];
    for (let i = 0; i < 20; i++) {
      const series = [];
      for (let j = 0; j < 100; j++) {
        series.push({x: j, y: (i / 10 + 1) * Math.sin((Math.PI * (i + j)) / 50)});
      }
      data.push({color: i, key: i, data: series, opacity: 0.8});
    }

    return (
      <div style={{justifyContent:"center", display:"flex"}}>
        <XYPlot
          width={500}
          height={500}
          margin={{left: 70, top: 20, bottom: 70}}
          colorType="linear"
          colorDomain={[0, 9]}
          colorRange={['white', 'black']}
        >
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          {data.map(props => (
            <LineSeries {...props} />
          ))}
        </XYPlot>
      </div>
    );
  }
  render()
  {
    let output = this.renderHeat();
    let myName = "Line Series";
    let string = `
      import React from 'react';

      import {
        XYPlot,
        XAxis,
        YAxis,
        HorizontalGridLines,
        VerticalGridLines,
        LineSeries
      } from 'index';

      const data = [];

      for (let i = 0; i < 20; i++) {
        const series = [];
        for (let j = 0; j < 100; j++) {
          series.push({x: j, y: (i / 10 + 1) * Math.sin((Math.PI * (i + j)) / 50)});
        }
        data.push({color: i, key: i, data: series, opacity: 0.8});
      }

      export default function Example() {
        return (
          <XYPlot
            width={300}
            height={300}
            colorType="linear"
            colorDomain={[0, 9]}
            colorRange={['yellow', 'orange']}
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            {data.map(props => (
              <LineSeries {...props} />
            ))}
          </XYPlot>
        );
      }
    `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyLineSeries;
