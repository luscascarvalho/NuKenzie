import { useState } from "react";
import { FormData } from "./Components/FormData";
import { Header } from "./Components/Header";
import { List } from "./Components/List";
import { TotalMoney } from "./Components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const removeCard = (cardId) => {
    const newCardList = listTransactions.filter((transactions) => {
      return transactions.id !== cardId;
    });

    setListTransactions(newCardList);
  };

  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="container">
          <FormData
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="container2">
          <List listTransactions={listTransactions} removeCard={removeCard} />
        </div>
      </div>
    </>
  );
}

export default App;
