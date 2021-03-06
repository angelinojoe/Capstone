import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import React, {Component} from 'react';

let data = [
      {song: 'Click some songs!', happiness: .5},
     ];

export default class CreateChart extends Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    mutateData(nextProps.playlist);
  }

  render () {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    return (
      <AreaChart width={windowWidth * .75} height={windowHeight * .4} data={data}
            margin={{top: 0, right: 0, left: 0, bottom: 0}}>
        <XAxis dataKey="song" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type='monotone' dataKey='happiness' stroke='#f26d26' fill='#f26d26' />
      </AreaChart>
    );
  }
}

function mutateData(playlist) {
  if (playlist.length > 0) {
    data = playlist.map(val => {
      if (val){
        return {song: val.name, happiness: val.audioFeatures.valence};
      }
    }).filter(( element ) => {
      return element !== undefined;
    });
  }
  else {
    data = [{song: 'Click some songs!', happiness: .5}];
  }
}
//
