console.log('Luma content script loaded');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPageContent') {
    const selection = window.getSelection().toString();
    const pageText = selection || document.body.innerText;
    sendResponse({ content: pageText, hasSelection: !!selection });
  }
  return true;
});

document.addEventListener('selectionchange', () => {
  const selection = window.getSelection().toString();
  if (selection && selection.length > 10) {
    // Could highlight selected text or show floating action bar
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'summarizeSelection') {
    // Handle right-click summarize
    alert(`Summarize: ${request.text}`);
  }
  if (request.action === 'translateSelection') {
    // Handle right-click translate  
    alert(`Translate: ${request.text}`);
  }
  return true;
});