import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormData = ({ listTransactions, setListTransactions }) => {
  const [newList, setNewList] = useState({
    description: "",
    price: "",
    type: "Entrada",
  });

  const submit = (e) => {
    e.preventDefault();
    setListTransactions([...listTransactions, { ...newList, id: uuidv4() }]);
    setNewList({ description: "", price: "", type: "Entrada" });
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="">Descrição</label>
      <input
        type="text"
        onChange={(e) =>
          setNewList({
            ...newList,
            description: e.target.value,
          })
        }
        value={newList.description}
        placeholder="Digite aqui sua descrição"
      />
      <label htmlFor="">Valor(R$)</label>
      <input
        type="number"
        onChange={(e) =>
          setNewList({
            ...newList,
            price: Number(e.target.value),
          })
        }
        value={newList.price}
        placeholder="Digite aqui o valor"
      />
      <label htmlFor="">Tipo de valor</label>
      <select
        onChange={(e) =>
          setNewList({
            ...newList,
            type: e.target.value,
          })
        }
        value={newList.type}
      >
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </select>
      <button type="submit">Inserir valor</button>
    </form>
  );
};
