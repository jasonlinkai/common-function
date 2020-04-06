function debounce({
  callback,
}) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, 200);
  };
}
