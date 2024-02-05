import React from 'react';
import "../../Styles/Routine/Routine.css"

const ButtonGroup = ({ activeBtn, handleBtnClick }) => (
  <div className="btn">
      
    <button className={activeBtn === 'morning' ? 'active' : 'inactive'} onClick={() => handleBtnClick('morning')}>아침</button>

    <button className={activeBtn === 'evening' ? 'active' : 'inactive'} onClick={() => handleBtnClick('evening')}>저녁</button>

    <button className={activeBtn === 'health' ? 'active' : 'inactive'} onClick={() => handleBtnClick('health')}>건강</button>

    <button className={activeBtn === 'mood' ? 'active' : 'inactive'} onClick={() => handleBtnClick('mood')}>기분</button>

  </div>
);

export default ButtonGroup;
