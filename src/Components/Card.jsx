export const Card = ({ card, removeCard }) => {
  return (
    <li className={card.type === "Entrada" ? "green" : "gray"}>
      <h1>{card.description}</h1>
      <span>{card.type}</span>
      <div className="btnValue">
        <span>
          {card.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => removeCard(card.id)}>Excluir</button>
      </div>
    </li>
  );
};
