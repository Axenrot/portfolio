export default function debounce(func, timeout = 1000) {
  let timer;
  console.log(timer, "debounce");
  return (...args) => {
    clearTimeout(timer);
    console.log(timer, "cleared timer");
    timer = setTimeout(() => {
      console.log(timer, "called function");
      func.apply(this, args);
    }, timeout);
  };
}
