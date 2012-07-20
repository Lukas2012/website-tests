//define jQuery
(function($){
    //Document ready
    $(function(){
        // if we clcik an anchor in the navigation (footer)
        $('#floatnav a').click(function(){
            // first we will get the target of this link
            var target = $(this).attr('href');
            // next let's check for active elements and remove their class
            $('.active').removeClass('active');
            // and finally add the active class to the target
            $(target).addClass('active');
            // and also add the active class to the clicked anchor
            $(this).addClass('active');
        });
    });
    
}(jQuery));
            
        
