// 
//	jQuery Validate for task.jsp
//

$.validator.addMethod("panduan",function(value,element,params){
	 var p = /\s/;
	 var q = /(.*)[\u4E00-\u9FA5]+(.*)/; 
	 if(q.test(value) || p.test(value)) return false; 
	 return true; 
},"文件名必须没有中文,且不包含空格");
  
	 
$(document).ready(function(){
	// Validate

	$('#deploy-form').validate({
		rules: {
    		host: {
        		required: function(element) {
                	return ($("#autodeploy").attr("checked") != "checked" );
        		}
    		}, 
    		uploadFile: {
    			required: function(element) {
                	return ($("#autodeploy").attr("checked") == "checked" );
        		},
    			panduan: function(element) {
                	return ($("#autodeploy").attr("checked") == "checked" );
        		}
    		}    
		}, 
	    highlight: function(label) {
	    	$(label).closest('.control-group').removeClass('success').addClass('error');
	    },
	    success: function(label) {
	    	label.addClass('valid').text('OK!')
	    		.closest('.control-group').removeClass('error').addClass('success');
	    },			
	});
	$('#basic-form').validate({
	    rules: {
	    	taskName: {
	    		minlength: 2,
	    		required: true
	    	},
	    	crontab: {
	    		required: true,
	    		minlength: 6
	    	},
	    	taskCommand: {
	    		required: true
	    	},
			proxyUser: {
				required: false
			},
	    	taskMail: {
	    		required: true,
	    	},
	    	description: {
	    		required: true,
	    	}
	    },
	    highlight: function(label) {
	    	$(label).closest('.control-group').removeClass('success').addClass('error');
	    },
	    success: function(label) {
	    	label.addClass('valid').text('OK!')
	    		.closest('.control-group').removeClass('error').addClass('success');
	    },
	  });
	  $('#extended-form').validate({
	    rules: {
	    	maxExecutionTime: {
	    		required: true,
	    	},
			dependency: {
			},
			maxWaitTime: {
	    		required: true
	    	},
	    	retryTimes: {
	    		required: true,
	    	},
	    	multiInstance: {
	    		required: true,
	    	}
	    },
	    highlight: function(label) {
	    	$(label).closest('.control-group').removeClass('success').addClass('error');
	    },
	    success: function(label) {
	    	label.text('OK!').addClass('valid')
	    		.closest('.control-group').removeClass('error').addClass('success');
	    },
	  });
	  
}); // end document.ready