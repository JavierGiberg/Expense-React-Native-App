export function getFotmattedDate(date) {
  return date.toISOString().slice(0, 10);
}
export function getDateMinusDays(date, days) {
  return Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
