
$(window).on('load', function(){
  $('.fixed_loading').fadeOut().resize();
});


// tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });

  // search
  $('.right_header .search > .search_icon').click(function(){
    $(this).parent().addClass('show_search')
  });
  $('.right_header .search > .search_close').click(function(){
    $(this).parent().removeClass('show_search')
  });


  // sidebar toggle
  $('.left_header .toggle_bar').click(function(){
    $('body').toggleClass('sidebar_close');
  });


  // filter
  $(".recent_filter").click(function(){
    $(".recent_filter_part").slideToggle();
  });


  // pages filter
  $(".page_filter").click(function(){
    $(".page_filter_part").slideToggle();
  });

  
  // datatable
  $(document).ready( function () {
      $('.tableLayout').DataTable({
          responsive: true,
          language: { search: '', searchPlaceholder: "Search..." },
      });
  });