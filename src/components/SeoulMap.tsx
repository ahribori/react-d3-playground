import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

const seoulMap = require('../topojson/seoul_municipalities_topo_simple.json');
const geojson = (topojson.feature(seoulMap, seoulMap.objects.seoul_municipalities_geo) as any)
  .features;

interface IProps {
  scale: number;
  translate: [number, number];
}

const SeoulMap: React.FunctionComponent<IProps> = ({ scale }) => {
  console.log('render');
  useEffect(() => {
    const width = 800;
    const height = 800;

    let x = width / 2;
    let y = height / 2;

    let projection = d3
      .geoMercator()
      .center([127, 37.5])
      .scale(scale * 15)
      .translate([x, y]);

    let path = d3.geoPath().projection(projection);

    let _x = null;
    let _y = null;

    const svg = d3
      .select('.seoul_map')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const map = svg
      .append('g')
      .selectAll('path')
      .data(geojson)
      .enter()
      .append('path')
      .attr('d', path);

    const place = svg.append('g').attr('id', 'places');

    d3.csv('../static/csv/a.csv').then(data => {
      place
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        // @ts-ignore
        .attr('cx', d => projection([d.lon, d.lat])[0])
        // @ts-ignore
        .attr('cy', d => projection([d.lon, d.lat])[1])
        .attr('r', 2);
      // @ts-ignore
    });
  });

  return <div className="seoul_map" />;
};

export default SeoulMap;
