import React from 'react';

const Skill = ({skill, imageUrl}) => {
  return (
    <div className="skill-div">
      {imageUrl ? <img src={imageUrl} className="skill-icon" width="30px" /> : <img />}
      <div className="skill" >{skill}</div>
    </div>
  )
}

export default Skill;
