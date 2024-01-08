// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "extractContent") {
    // Your web scraping logic goes here
    var paragraphs = document.querySelectorAll("p");
    var content = Array.from(paragraphs, (paragraph) => paragraph.textContent);
    alert(content.join("\n"));
  }
});
