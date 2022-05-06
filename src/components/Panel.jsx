import React from 'react';


const Panel = ({crypto}) => {

  return (
    <div className="panel">
      <div className="token">{`Token: ${crypto?.token}`}</div>
      <h3>
        <span>Symbol: </span>
        {crypto?.symbol}
      </h3>
      <h3>
        <span>Image: </span>
      </h3>
        <img className="image" src={`${crypto?.image}`}></img>
      <h3>
        <span>Creation Year: </span>
        {`Creation Year: ${crypto?.creationYear}`}
      </h3>
      {crypto?.creators?.map(creator => (
        <h4>Creator: {creator}</h4>
      ))}
    </div>
  );
};

export default Panel;