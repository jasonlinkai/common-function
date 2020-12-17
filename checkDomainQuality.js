const checkDomainQuality = ({
  url,
}) => {
  return new Promise((reslove, reject) => {
    const started = new Date().getTime();
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);
    xhr.timeout = 2000;
    xhr.onreadystatechange = () => {
      const ended = new Date().getTime();
      const latencyMs = ended - started;
      if (xhr.readyState == 2) {
        reslove({
          isSuccess: xhr.status === 200,
          latencyMs,
          statusCode: xhr.status,
        });
      }
    };
    xhr.ontimeout = () => {
      reject({
        isSuccess: false,
        errorType: 'ontimeout',
      });
    };
    xhr.onerror = () => {
      reject({
        isSuccess: false,
        errorType: 'onerror',
      });
    }
    try {
      xhr.send(null);
    } catch(e) {
      reject({
        isSuccess: false,
        errorType: 'excutionerror',
      });
    }
  });
}

export { checkDomainQuality };
  
