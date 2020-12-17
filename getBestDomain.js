const pingIp = ({
  url,
}) => {
  return new Promise((reslove) => {
    const started = new Date().getTime();
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);
    xhr.timeout = 2000;
    xhr.onreadystatechange = () => {
      const ended = new Date().getTime();
      const latencyMs = ended - started;
      if (xhr.readyState == 2 && xhr.status === 200) {
        reslove({
          isSuccess: true,
          ms: latencyMs,
          readyState: xhr.readyState,
        });
      } else {
        console.log('getErrorCodeDomain:', url);
        console.log('errorCode:', xhr.status);
        reslove({ isSuccess: false });
      }
    };
    xhr.ontimeout = () => {
      console.log('onTimeout');
      reslove({ isSuccess: false });
    };
    xhr.onerror = () => {
      console.log('onError');
      reslove({ isSuccess: false });
    }
    try {
      xhr.send(null);
    } catch(e) {
      console.log(e);
      reslove({ isSuccess: false, error: e });
    }
  });
}

export { pingIp };
  
