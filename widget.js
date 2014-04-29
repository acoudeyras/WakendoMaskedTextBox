WAF.define('KendoMaskedTextBox', ['waf-core/widget', 'kendoCore'], function(widget, $) {
	'use strict';
		
    var KendoMaskedTextBox = widget.create('KendoMaskedTextBox', {

    	value: widget.property({
    		type: 'string'
    	}),
    	
    	mask: widget.property({
    		type: 'string'
    	}),
    	
        init: function() {
        	var self = this;

        	self.valueChangeSubscriber = self.value.onChange(function(newValue) {
        		self.kendoWidget.value(newValue);
        	});
        	self.mask.onChange(self.render);
        	
        	self.render();
        },
        
        render: function() {
        	var self = this;	
        	$(self.node).empty();
			var $el = $('<input />').appendTo(self.node);
			
        	$el.kendoMaskedTextBox({
        		mask: self.mask(),
        		change: function(event) {
        			self.valueChangeSubscriber.pause();
        			self.value(self.kendoWidget.value());
        			self.valueChangeSubscriber.resume();
        		}
        	});
        	
        	self.kendoWidget = $el.data("kendoMaskedTextBox");			        	
        },

        enable: function() {
        	self.kendoWidget.enable();
        },

        disable: function() {
        	self.kendoWidget.enable(false);
        }
        
    });

    return KendoMaskedTextBox;

});