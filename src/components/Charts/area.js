import React, { Component } from 'react';
import MyTemplete  from '../Template';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, AreaSeries} from 'react-vis';
import CodeBlock from '../';
import ReactMarkdown from 'react-markdown';

class MyArea extends Component
{

  renderArea()
  {
    const data = [
      {x: 0, y: 15},
      {x: 1, y: 10},
      {x: 2, y: 9},
      {x: 3, y: 12},
      {x: 4, y: 10},
      {x: 5, y: 4},
      {x: 6, y: 8},
      {x: 7, y: 13},
      {x: 8, y: 10},
      {x: 9, y: 9},
      {x: 10, y: 14},
      {x: 11, y: 14},
      {x: 12, y: 11},
      {x: 13, y: 8},
      {x: 14, y: 15},
      {x: 15, y: 10}
    ];
    return (
      <div className = "area-display">
        <XYPlot margin={{bottom: 70, top: 30}} height={700} width= {700} yDomain={[0, 18]}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <AreaSeries curve="curveMonotoneX" data={data} color="#404040"/>
        </XYPlot>
      </div>
    );
  }
  render()
  {
      let output = this.renderArea();
      let myName = "Area";
      let string = `
      const data = [
        {x: 0, y: 15},
        {x: 1, y: 10},
        {x: 2, y: 9},
        {x: 3, y: 12},
        {x: 4, y: 10},
        {x: 5, y: 4},
        {x: 6, y: 8},
        {x: 7, y: 13},
        {x: 8, y: 10},
        {x: 9, y: 9},
        {x: 10, y: 14},
        {x: 11, y: 14},
        {x: 12, y: 11},
        {x: 13, y: 8},
        {x: 14, y: 15},
        {x: 15, y: 10}
      ];
      return (
        <div className = "area-display">
          <XYPlot margin={{Bottom: 20, top: 30}} height={700} width= {700} yDomain={[0, 18]}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <AreaSeries curve="curveMonotoneX" data={data} color="#404040"/>
          </XYPlot>
        </div>
      );
      `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyArea;
