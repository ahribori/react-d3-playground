import React, { Component } from 'react';
import './sample.scss';
import KoreaMap from '../../components/KoreaMap';

class Sample extends Component {
  state = {
    scale: 3000
  };

  render() {
    const { scale } = this.state;

    return (
      <div
        onWheel={e => {
          const nextValue = scale - e.deltaY * 10;
          if (nextValue >= 1000 && nextValue <= 10000) {
            this.setState({ scale: nextValue });
          }
        }}
      >
        <h3>Scale: {scale}</h3>
        <KoreaMap scale={scale} translate={[0, 0]} />
      </div>
    );
  }
}

export default Sample;
