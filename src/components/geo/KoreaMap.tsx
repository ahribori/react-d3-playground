import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

const koreaMap = require('../topojson/skorea-provinces-2018-topo-simple.json');
const geojson = (topojson.feature(koreaMap, koreaMap.objects.skorea_provinces_2018_geo) as any)
  .features;

interface IProps {
  scale: number;
  translate: [number, number];
}

const KoreaMap: React.FunctionComponent<IProps> = ({ scale }) => {
  useEffect(() => {
    const width = 800;
    const height = 800;

    let x = width / 2;
    let y = height / 2;

    let projection = d3
      .geoMercator()
      .center([128, 36])
      .scale(scale)
      .translate([x, y]);

    let path = d3.geoPath().projection(projection);

    const svg = d3
      .select('.d3')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    svg
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
        .attr('r', 1);
    });

    return () => {
      svg.remove();
    }
  });

  return <div className="d3" />;
};

export default KoreaMap;
