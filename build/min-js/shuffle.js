$(function() {
    gridContainer = $('#shuffleContainer');
    
    gridContainer.shuffle({
        sizer: '.col-md-4',
        speed: 500,
        easing: 'ease-out'
    });
    
    $(function() {
    $("#btnAll").trigger("click");
});
    
    // click button event
    $('#btnAll').on('click', function(){
        // shuffle function
        gridContainer.shuffle('shuffle', function($el, shuffle){
            return true;
        });
    });
    
    // click button event
    $('#btnPhp').on('click', function(){
        // shuffle function
        gridContainer.shuffle('shuffle', function($el, shuffle){
            return $el.data('group') == 'php';
        });
    });
    
        // click button event
    $('#btnJs').on('click', function(){
        // shuffle function
        gridContainer.shuffle('shuffle', function($el, shuffle){
            return $el.data('group') == 'js';
        });
    });
    
        // click button event
    $('#btnTutor').on('click', function(){
        // shuffle function
        gridContainer.shuffle('shuffle', function($el, shuffle){
           return $el.data('group') == 'tutor';
        });
    });
  
});

