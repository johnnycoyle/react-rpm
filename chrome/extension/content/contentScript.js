

// function onPageMessage(event) {
//   const message = event.data;
//   console.log('Page receiving message:', message);
//   if (event.source !== window) {
//     return;
//   }

//   // Only accept messages that we know are ours
//   if (typeof message !== 'object' || message === null ||
//     message.source !== 'react-rpm') {
//     return;
//   }

//   // Ignore messages send from contentScript, avoid infinite dispatching
//   if (message.sender === 'contentScript') {
//     return;
//   }

//   chrome.runtime.sendMessage(message);
// }

// function onMessage(message, /* sender, sendResponse */) {
//   // relay all messages to pageScript
//   window.postMessage({ ...message, sender: 'contentScript' }, '*');
// }

// window.addEventListener('message', onPageMessage);
// chrome.runtime.onMessage.addListener(onMessage);


