export const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce(
    (acm, crmV) =>
      crmV.type === "Despesa" ? acm - crmV.price : acm + crmV.price,
    0
  );

  return (
    <>
      {total === 0 ? null : (
        <div className="warningTheTotalAmount">
          <div className="amount">
            <p>Valor total:</p>
            <span className="valueTheTotal">
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <p className="pValueAmount">O valor se refere ao saldo</p>
        </div>
      )}
    </>
  );
};
