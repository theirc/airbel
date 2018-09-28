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

var initialFilter = 'all';
var hash = window.location.hash.replace(/^#/g, '');
window.console.log(hash);

if (hash) {
  initialFilter = '.' + hash;
  // $('#filter-text').text(hash);
  // var offset = $('#projects-wrapper').offset().top;
  // window.console.log(offset);
  // $('html, body').animate({ scrollTop: offset }, 700);
}

if (containerEl) {
  var mixer = mixitup(containerEl, {
    load: {
      filter: initialFilter
    },
    selectors: {
      control: '[data-mixitup-control]'
    }    
  });
}

$('.filter').on('click', function(){
  var text = $(this).text();
  $('#filter-text').text(text);
});


