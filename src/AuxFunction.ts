export function formatNum(i: number) {
  return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function minutes(time: number) {
  let min = Math.floor(time/60);
  let sec = time - min * 60;
  if (sec < 10) {
    return `${min}:0${sec}`
  }
  
  return `${min}:${sec}`
}