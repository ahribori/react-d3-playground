import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.scss';

const Sidebar = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <Link href="/" prefetch>
          <a>Index</a>
        </Link>
      </li>
      <li>
        <Link href="/geo/sample" prefetch>
          <a>Geo Sample</a>
        </Link>
      </li>
      <li>
        <Link href="/chart/sample" prefetch>
          <a>Chart Sample</a>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
