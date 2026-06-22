// Shared site behavior for New Generation HVAC.
// Injects a floating "Call now" button on every page so visitors can reach us
// in one tap from anywhere on the site.
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var call = document.createElement('a');
    call.href = 'tel:9788768558';
    call.className = 'floating-call';
    call.setAttribute('aria-label', 'Call New Generation HVAC at 978-876-8558');
    call.textContent = '☎ Call';
    document.body.appendChild(call);
  });
})();
