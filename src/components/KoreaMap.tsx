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
  console.log('render');
  useEffect(() => {
    const width = 800;
    const height = 800;

    d3.selectAll('svg')
      .remove()
      .exit();

    let x = width / 2;
    let y = height / 2;

    let projection = d3
      .geoMercator()
      .center([128, 36])
      .scale(scale)
      .translate([x, y]);

    let path = d3.geoPath().projection(projection);

    let _x = null;
    let _y = null;

    const drag = d3
      .drag()
      .on('start', () => {
        _x = d3.event.sourceEvent.pageX;
        _y = d3.event.sourceEvent.pageY;
      })
      .on('drag', () => {
        const currentX = d3.event.sourceEvent.pageX;
        const currentY = d3.event.sourceEvent.pageY;
        const dx = _x - currentX;
        const dy = _y - currentY;
        x = x - dx;
        y = y - dy;
        projection.translate([x, y]);
        path = d3.geoPath().projection(projection);
        d3.selectAll('path').attr('d', path);
        _x = currentX;
        _y = currentY;
      });

    const svg = d3
      .select('.d3')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .call(drag)
      .append('g')
      .selectAll('path')
      .data(geojson)
      .enter()
      .append('path')
      .attr('d', path);
  });

  return <div className="d3"/>;
};

export default KoreaMap;
