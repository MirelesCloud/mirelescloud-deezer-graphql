export function formatNum(i: number) {
  return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}