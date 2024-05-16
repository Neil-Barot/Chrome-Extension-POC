// popup.js
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("replaceButton").addEventListener("click", function() {
        var word = document.getElementById("word").value;
        var replacement = document.getElementById("replacement").value;
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "replace", word: word, replacement: replacement}, function(response) {
                console.log(response) // testing
                if (response && response.success) {
                    document.getElementById("status").innerText = "Word replaced successfully!";
                } else {
                    document.getElementById("status").innerText = "Failed to replace word.";
                }
            });
        });
    });
});
  