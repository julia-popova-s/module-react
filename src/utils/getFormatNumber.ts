export const getFormatNumber = (price: number) => {
  return Number(price).toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  });
};
