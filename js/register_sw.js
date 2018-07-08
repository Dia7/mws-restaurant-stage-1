
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js', {
        // adding a scope attribute
        scope: ''
    }).then(function (registration) {
        console.log('Service Worker registered!');
      })
      .catch(function (err) {
        console.log('Registration failed: ', err);
      });
  });
}