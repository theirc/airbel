import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

import App from './App';
import mixitup from 'mixitup';

$(function() {
  $('#focus-tabs').tabCollapse();
});

const containerEl = document.getElementById('projects')

if (containerEl) {
  var mixer = mixitup(containerEl, {
    selectors: {
      control: '[data-mixitup-control]'
    }
  });
}

$('.filter').on('click', function(){
  var text = $(this).text();
  $('#filter-text').text(text);
});
