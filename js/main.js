

$(document).ready(initialize);

function initialize(){

		proj.ui.formLabelSlideInit();
		try{
			proj.ui.inputDatepickerInit($('.js--datepickerInit'));
		}catch(e){
			
		}
		proj.validator.formValidatorInit($('.js--formValidate'));
		
}

