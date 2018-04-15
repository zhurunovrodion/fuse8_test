class Validator{
	constructor(){

	}

	formValidatorInit(form){
		console.log(form);
		 let $formElements = $('.js--validateElement', form);
		 let $submitButton = $('.js--validateSubmitButton', form);
		 let errorsCounter = '';
		 console.log($formElements);

		  $submitButton.on('click', function(){

		  		errorsCounter = proj.validator.validate($formElements);

		  		if(errorsCounter === 0){
		  			//alert(0);
		  		}else{
		  			//alert(1);
		  		}

		  });
		 

	}

	validate($validateElements){
		let errorsArray = 0;

		$validateElements.each(function() {
			
			let $inputField = $('.form__inputField', this);
			let $errorMessage = $('form__inputErrorMessage', this);
			let $errorIcon =  $('.form__inputErrorIcon', this);
			let $successIcon =  $('.form__inputSuccessIcon', this);
			
			let validateSettings = '';
			if($inputField.attr('data-validate')){
				validateSettings = $inputField.attr('data-validate').split(" ");
				let fieldErrors = '';
				for (let setting of validateSettings){
					switch(setting) {
					  case 'required': 
					  
					   		console.log('проверка пустоты');
					  		if($inputField.val().trim().length == 0) {
					  			   if($successIcon.is('.m--inputSuccessIcon-isShowned')){
					  			   		$successIcon.removeClass('m--inputSuccessIcon-isShowned');
					  			   } 
						           $errorIcon.addClass('m--inputErrorIcon-isShowned');
						           
						           
						          
						     }else{
						     	if($errorIcon.is('.m--inputErrorIcon-isShowned')){
						     		 $errorIcon.removeClass('m--inputErrorIcon-isShowned');
						     	}
						     	$successIcon.addClass('m--inputSuccessIcon-isShowned');
						     }
					   	break; 
					   case 'email': 
					  
					   		console.log('проверка почты');
					  		console.log('2');
					   	break;
					   	case 'date': 
					  
					   		console.log('проверка даты');
					   		console.log('2');
					   	break;

					   

					
					}	
				}
			}
			
			

		});
		return 0;
	}

}