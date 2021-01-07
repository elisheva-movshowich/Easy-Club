import React from 'react'
const card = (props) => {
  return (
    <div className="flip-box-user-card">
      <div className="flip-box-inner-user-card">
        <div className="flip-box-front-user-card" style={{ backgroundImage: `url(${props.Img})`}}>
        </div>
        <div className="flip-box-back-user-card">
          <div className="user-card-name"> {props.name}</div>
          <div className="user-card-type">{props.type}</div>
          <p className="user-card-points">points:{props.points}</p>
          <p className="user-card-date">Expire Date: {new Date(props.expire).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
export default card