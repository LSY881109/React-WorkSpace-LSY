import React from 'react';
import styles from '../styles/CSSModule.module.css';

const CssModule = () => {
  return (
    <div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        <span className="something">Hello CSSModule~~~,</span> 클래스명을
        중복되지 않게 사용해 주는 도구.
      </div>
    </div>
  );
};

export default CssModule;
