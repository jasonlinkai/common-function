

export default function throttle({
  callback,
  delay,
}) {
  let prevTime = 0;
  let nowTime = 1;
  return () => {
    nowTime = Date.now();
    if (nowTime - prevTime >= delay) {
   	  callback(); 
      prevTime = nowTime;
    }
  };
}
