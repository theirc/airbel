import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

// import App from './App';


$(function() {
  console.log('jQuery loaded');

  $('#focus-tabs').tabCollapse();

  var mixer = mixitup('.projects', {
    animation: {
      effects: 'fade scale(0.5)'
    },
    callbacks: {
      onMixClick: function(state, originalEvent) {
        console.log('The control "' + this.innerText + '" was clicked');
      },
      onMixFail: function(state) {
        console.log('No items could be found matching the requested filter');
      }
    }
  });

  $('.filter').on('click', function(){
    var filter_val = $(this).data('filter');
    var text = $(this).text();
    $('#filter-text').text(text);
  });

  mixer.mixFail
});
