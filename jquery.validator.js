define(['jquery'], function(jQuery){
 (function($) {
    
    var validateEmail = function(email) {
        if(email.lenght>256){
            return false;
        }
        var emailReg = /(?:[A-Za-z\d][\w!#$%&'*+-/=?^`{|}~]{0,200}\.?)+@[A-Za-z\d][A-Za-z\d\-\.]*\.[A-Za-z]{2,6}/;
        
       if(emailReg.test(email.trim())) {
           return true;
       }else{
           return false;
       }
    };
    
     
    $.extend({
        is_valid_email: validateEmail
    });
    
    
    
    })(jQuery);
});