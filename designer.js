(function(KendoMaskedTextBox) {
	'use strict';
	
	KendoMaskedTextBox.setWidth('130');
	KendoMaskedTextBox.setHeight('22');
	
    KendoMaskedTextBox.addLabel({
        'defaultValue': 'Label',
        'position': 'left'
    });
    
    KendoMaskedTextBox.setPanelStyle({
        'fClass': true,
        'text': true,
        'background': true,
        'border': true,
        'sizePosition': true,
        'label': true,
        'disabled': ['border-radius']
    });
    
});
