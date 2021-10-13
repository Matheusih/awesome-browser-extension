let counter = 0;


chrome.runtime.onConnect.addListener((port: chrome.runtime.Port) => {
  if (port.name === 'popup') {
    port.onMessage.addListener((msg) => {
      if (msg.method === 'incrementCounter') {
        counter += 1;
        port.postMessage({ method: 'counterUpdate', counter })
      } else if (msg.method === 'decrementCounter') {
        counter -= 1;
        port.postMessage({ method: 'counterUpdate', counter })
      }
    });
  }
});

export {};