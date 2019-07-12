import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import './sample.scss';

const koreaMap = require('../../topojson/skorea-provinces-2018-topo-simple.json');
const geojson = (topojson.feature(koreaMap, koreaMap.objects.skorea_provinces_2018_geo) as any)
  .features;

class Sample extends Component {
  render() {
    return <div className="d3" />;
  }

  renderMap() {
    const width = 800;
    const height = 800;

    const svg = d3
      .select('.d3')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    let projection = d3
      .geoMercator()
      .center([128, 36])
      .scale(5000)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    svg
      .append('g')
      .selectAll('path')
      .data(geojson)
      .enter()
      .append('path')
      .attr('d', path);
  }

  componentDidMount(): void {
    this.renderMap();
  }
}

export default Sample;
