import React from "react";
import "./Main.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";
const Main = (props) => {
  const { onDelete, cardItem } = props;

  return (
    <div className="card-row">
      {/* {console.log(props)} */}
      {cardItem.length !== 0 ? (
        <h2>Cards Go Here !</h2>
      ) : (
        <h2>Oops ! Sorry No Cards Left &#9785;</h2>
      )}

      <TransitionGroup component="div" className="card-container">
        {cardItem.map((card) => (
          <CSSTransition key={card.name} classNames="cardMain" timeout={700}>
            <div className="card-item">
              <h3>{card.name}</h3>
              <div>
                <p>{card.model_name}</p>
                <p>$&nbsp;{card.price}</p>
              </div>
              <button onClick={() => onDelete(card)} className="delete-btn">
                Delete
              </button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Main;
