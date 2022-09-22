export const getFormatNumber = (price) => {
  return Number(price).toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });
};
