import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./Data";
import { useState } from "react";
import CardForm from "./components/CardForm";
const App = () => {
  const { cards } = data;
  // console.log(data);
  const [cardItem, setCardItem] = useState(data.cards);

  const onDelete = (card) => {
    setCardItem(cardItem.filter((x) => x.id !== card.id));
  };

  const addCard = (cardName, cardPrice, modelname) => {
    let newCardItem = [...cardItem];
    newCardItem = [
      {
        name: cardName,
        price: parseInt(cardPrice),
        model_name: modelname,
      },
      ...newCardItem,
    ];
    setCardItem(newCardItem);
  };

  return (
    <div>
      <Header />
      <CardForm addCard={addCard} />
      <Main cards={cards} onDelete={onDelete} cardItem={cardItem} />
    </div>
  );
};

export default App;
