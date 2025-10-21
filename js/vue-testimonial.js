// Simple Vue testimonial component for homepage
window.addEventListener('DOMContentLoaded', function() {
  if (!document.getElementById('vue-testimonial')) return;
  var testimonialApp = new Vue({
    el: '#vue-testimonial',
    data: {
      testimonial: 'Splash made my child love swimming! The coaches are amazing and the classes are fun.',
      author: 'Priya S.'
    },
    template: `<div class='card bg-light p-3 mb-3'><blockquote class='blockquote mb-0'>{{ testimonial }}<div class='blockquote-footer mt-2'>{{ author }}</div></blockquote></div>`
  });
});