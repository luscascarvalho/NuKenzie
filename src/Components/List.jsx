import { Card } from "./Card";

export const List = ({ listTransactions, removeCard }) => {
  return (
    <div className="cards">
      <h3>Resumo Financeiro</h3>
      {listTransactions.length > 0 ? (
        listTransactions.map((card) => (
          <Card key={card.id} card={card} removeCard={removeCard} />
        ))
      ) : (
        <p>Você ainda não possui nenhum lançamento</p>
      )}
    </div>
  );
};
