// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    console.log('Made it here')

    if (request.action === "replace") {
        const regex = new RegExp(request.word, "gi");
        console.log(regex);
        document.body.innerHTML = document.body.innerHTML.replace(regex, request.replacement);
    }
});
