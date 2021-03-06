import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import React, {Component} from 'react';

let data = [
      {song: 'Click a playlist!', happiness: .5},
     ];


export default class PlaylistChart extends Component {
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
      <AreaChart width={windowWidth * .8} height={windowHeight * .5} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="song" hide={true}/>
        <YAxis domain={[0, 1]}/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip />
        <Area type='monotone' dataKey='happiness' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    );
  }
}


function mutateData(playlist) {
  if (playlist.length) {
    data = playlist.map(val => {
      if (val){
        return {song: val.track.name, happiness: val.valence};
      }
    }).filter(( element ) => {
      return element !== undefined;
    });
  }
}
//
