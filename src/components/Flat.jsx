import React from 'react';

const Flat = (props) => {
  const {
    flat:
    {
      id, name, imageUrl, price, priceCurrency
    }
  } = props;

  const handleClick = () => {
    props.selectFlat(props.index);
  }

  const style = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` };
  return (
    <div className={props.flat === props.activeFlat ? "card active" : "card"} style={style}>
      <div className="card-category">
        {priceCurrency} {price}
      </div>
      <div className="card-description">
        <h2>{name}</h2>
      </div>
      <a className="card-link" href="#" onClick={handleClick}></a>
    </div>
  );
};

export default Flat;
