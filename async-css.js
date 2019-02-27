// Automatically replaces all noscript.load-async elements with their content when the document loads
(function () {
  function loadElementAsync(element) {
    element.outerHTML = element.innerHTML;
  }

  function loadAsync() {
    document.querySelectorAll("noscript.load-async").forEach(loadElementAsync);
  }

  document.addEventListener('DOMContentLoaded', loadAsync);
})();
