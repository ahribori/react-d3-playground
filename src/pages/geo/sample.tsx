import React, { Component } from 'react';
import styles from  './sample.scss';
import KoreaMap from '../../components/geo/KoreaMap';
import SeoulMap from '../../components/geo/SeoulMap';

class Sample extends Component {
  render() {
    return (
      <div className={styles.geo}>
        <KoreaMap scale={5500} translate={[0, 0]} />
        <SeoulMap scale={6000} translate={[0, 0]} />
      </div>
    );
  }
}

export default Sample;
