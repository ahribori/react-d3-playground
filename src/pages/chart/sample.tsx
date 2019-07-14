import React, { useEffect } from 'react';
import * as d3 from 'd3';
import dateFns from 'date-fns';

const Sample = () => {
  useEffect(() => {
    const width = 600;
    const height = 500;

    const svg = d3
      .select('.d3')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    let plotMargins = {
      top: 30,
      bottom: 30,
      left: 150,
      right: 30
    };

    let plotGroup = svg
      .append('g')
      .classed('plot', true)
      .attr('transform', `translate(${plotMargins.left},${plotMargins.top})`);

    let plotWidth = width - plotMargins.left - plotMargins.right;

    let plotHeight = height - plotMargins.top - plotMargins.bottom;

    const now = new Date();
    let xScale = d3
      .scaleTime()
      .domain([now, dateFns.addHours(now, 1)])
      .range([0, plotWidth]);

    let xAxis = d3.axisBottom(xScale);

    let xAxisGroup = plotGroup
      .append('g')
      .classed('x', true)
      .classed('axis', true)
      .attr('transform', `translate(${0},${plotHeight})`)
      .call(xAxis);

    let yScale = d3
      .scaleLinear()
      .domain([0, 10000])
      .range([plotHeight, 0]);

    let yAxis = d3.axisLeft(yScale);

    let yAxisGroup = plotGroup
      .append('g')
      .classed('y', true)
      .classed('axis', true)
      .call(yAxis);
  });

  return <div className="d3" />;
};

export default Sample;
