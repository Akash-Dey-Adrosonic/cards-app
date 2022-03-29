import React from "react";
import { useState } from "react";
import "./CardForm.css";

const CardForm = ({ addCard }) => {
  const [cardName, setCardName] = useState("");
  const [cardPrice, setCardPrice] = useState(0);
  const [modelName, setModelName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardName === "" && cardPrice === 0 && modelName === "") {
      alert("Please enter some values in the form !");
    } else if (cardName === "" && cardPrice === 0) {
      alert("Please enter card name and card price values in the form !");
    } else if (cardName === "" && modelName === "") {
      alert("Please enter card name and model name values in the form !");
    } else if (cardPrice === 0 && modelName === "") {
      alert("Please enter card price and model name values in the form !");
    } else if (cardName === "") {
      alert('"Please enter card name');
    } else if (cardPrice === 0 || cardPrice === "") {
      alert("Please enter card price");
    } else if (modelName === "") {
      alert("Please enter model name");
    } else {
      addCard(cardName, cardPrice, modelName);
      setCardName("");
      setCardPrice(0);
      setModelName("");
    }
  };
  const handleNameChange = (e) => {
    setCardName(e.currentTarget.value);
  };
  const handlePriceChange = (e) => {
    setCardPrice(e.currentTarget.value);
  };
  const handleModelChange = (e) => {
    setModelName(e.currentTarget.value);
  };
  return (
    <div className="form-div">
      {/* {console.log(typeof cardPrice)} */}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-item">
          <label htmlFor="cardname" className="label">
            Card Name
          </label>
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="Enter Card Name"
            id="cardname"
            className="form-input"
            value={cardName}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="price" className="label">
            Price
          </label>
          <input
            type="number"
            onChange={handlePriceChange}
            placeholder="Enter the Price"
            id="price"
            className="form-input"
            value={cardPrice}
            min="0"
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="model" className="label">
            Model Name
          </label>
          <input
            type="text"
            onChange={handleModelChange}
            placeholder="Enter Model Name"
            id="model"
            className="form-input"
            value={modelName}
          ></input>
        </div>
        <div>
          <button className="addAcard-btn">Add A Card</button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
