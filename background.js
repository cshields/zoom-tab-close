// check for a zoom "status=success" redirect and close the tab

var regex = /^((http[s]?):\/)?\/?((\/\w+)*)(.*)(zoom.us)((\/\w+)*\/)(.*)?(status=|#)success$/

function closeZoomTab(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        if (regex.test(changeInfo.url)) {
            browser.tabs.remove(tabId);
        }
    }
}

browser.tabs.onUpdated.addListener(closeZoomTab);
