import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

import App from './App';
import mixitup from 'mixitup';
import mixitupMultifilter from './vendor/mixitup-multifilter';
mixitup.use(mixitupMultifilter);
import getUrlParameter from './params';

const containerEl = document.getElementById('projects');

if (containerEl) {
  var mixer = mixitup(containerEl, {
    multifilter: {
      enable: true
    },
    selectors: {
      control: '[data-mixitup-control]'
    },
    load: {
      filter: '.active'
    },
    callbacks: {
      onMixStart: function(state, futureState) {}
    }
  });
}


$('.filter').on('click', function(){
  var text = $(this).text();
  var target = "#"+ $(this).attr('data-active-text');
  $(target).text(text);
  $('.dropdown-menu').removeClass('show');
});


