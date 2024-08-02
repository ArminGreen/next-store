export const formatCurrency = (amount: number | 0) => {
  const value = amount | 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
