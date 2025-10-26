chrome.runtime.onInstalled.addListener(() => {
  console.log('Smart Page Assistant installed');
  
  chrome.contextMenus.create({
    id: 'summarizeSelection',
    title: 'Summarize selection',
    contexts: ['selection']
  });
  
  chrome.contextMenus.create({
    id: 'translateSelection', 
    title: 'Translate selection',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'summarizeSelection') {
    chrome.tabs.sendMessage(tab.id, { action: 'summarizeSelection', text: info.selectionText });
  }
  if (info.menuItemId === 'translateSelection') {
    chrome.tabs.sendMessage(tab.id, { action: 'translateSelection', text: info.selectionText });
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.action.openPopup();
});