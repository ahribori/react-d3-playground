import React, { Component } from 'react';
import './sample.scss';
import KoreaMap from '../../components/KoreaMap';
import SeoulMap from '../../components/SeoulMap';

class Sample extends Component {
  render() {
    return (
      <div
      >
        <KoreaMap scale={5500} translate={[0, 0]} />
        <SeoulMap scale={6000} translate={[0, 0]} />
      </div>
    );
  }
}

export default Sample;
