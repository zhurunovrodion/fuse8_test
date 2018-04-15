class Validator{
	constructor(){

	}

	formValidatorInit(form){
		console.log(form);
		 let $formElements = $('.js--validateElement', form);
		 let $submitButton = $('.js--validateSubmitButton .defaultButton', form);
		 let errors= '';
		 console.log($formElements);

		  $submitButton.on('click', function(){

		  		errors = proj.validator.validate($formElements);

		  		if(!errors){
		  			console.log('form not validate');
		  		}else{
		  			form.submit();
		  		}

		  });
		  $formElements.each(function() {
		  		 proj.validator.realtimeValidate($(this));
		  });
		  
		 

	}

	realtimeValidate($validateElement){
		let errorsArray = 0;

		$validateElement.change(function() {
			
			let $inputField = $('.form__inputField', this);
			let $errorMessage = $('.form__inputErrorMessage', this);
			let $errorIcon =  $('.form__inputErrorIcon', this);
			let $successIcon =  $('.form__inputSuccessIcon', this);
			
			let validateSettings = '';
			if($inputField.attr('data-validate')){
				validateSettings = $inputField.attr('data-validate').split(" ");
				let fieldErrors = 0;

				for (let setting of validateSettings){
					if (fieldErrors>0){
						continue;
					}
					switch(setting) {
					  case 'required': 
					  
					   		console.log('проверка пустоты');
					  		if($inputField.val().trim().length == 0) {
					  			   if($successIcon.is('.m--inputSuccessIcon-isShowned')){
					  			   		$successIcon.removeClass('m--inputSuccessIcon-isShowned');
					  			   } 
						           $errorIcon.addClass('m--inputErrorIcon-isShowned');
						           $errorMessage.html('This field is required');
						           $errorMessage.addClass('animated fadeIn m--inputErrorMessage-isShowned');
						           fieldErrors++;
						           errorsArray++;
						          
						     }else{
						     	if($errorIcon.is('.m--inputErrorIcon-isShowned')){
						     		 $errorIcon.removeClass('m--inputErrorIcon-isShowned');
						     		 $errorMessage.removeClass('animated fadeIn m--inputErrorMessage-isShowned');
						     	}
						     	$successIcon.addClass('m--inputSuccessIcon-isShowned');
						     	  
						     }
					   	break; 
					   case 'email': 
					  		if(!(/^([a-z0-9_-]+.)*[a-z0-9_-]+@([a-z0-9][a-z0-9-]*[a-z0-9].)+[a-z]{2,4}$/i).test($inputField.val().trim())){
					  			 if($successIcon.is('.m--inputSuccessIcon-isShowned')){
					  			   		$successIcon.removeClass('m--inputSuccessIcon-isShowned');
					  			   } 
						           $errorIcon.addClass('m--inputErrorIcon-isShowned');
						           $errorMessage.html('Invalid email format');
						           $errorMessage.addClass('animated fadeIn m--inputErrorMessage-isShowned');
						           fieldErrors++;
						           errorsArray++;
					  		}else{
						     	if($errorIcon.is('.m--inputErrorIcon-isShowned')){
						     		 $errorIcon.removeClass('animated fadeIn m--inputErrorIcon-isShowned');
						     		 $errorMessage.removeClass('animated fadeIn m--inputErrorMessage-isShowned');
						     	}
						     	$successIcon.addClass('animated fadeIn m--inputSuccessIcon-isShowned');
						     
						     }

					   		console.log('проверка почты');
					  		console.log('2');
					   	break;
					   	case 'date': 
					  		if(!proj.validator.isValidDate($inputField.val().trim())){
					  			 if($successIcon.is('.m--inputSuccessIcon-isShowned')){
					  			   		$successIcon.removeClass('animated fadeIn m--inputSuccessIcon-isShowned');
					  			   } 
						           $errorIcon.addClass('animated fadeIn m--inputErrorIcon-isShowned');
						           $errorMessage.html('Invalid date format');
						           $errorMessage.addClass('animated fadeIn m--inputErrorMessage-isShowned');
						           fieldErrors++;
						           errorsArray++;
					  		}else{
						     	if($errorIcon.is('.m--inputErrorIcon-isShowned')){
						     		 $errorIcon.removeClass('animated fadeIn m--inputErrorIcon-isShowned');
						     		 $errorMessage.removeClass('animated fadeIn m--inputErrorMessage-isShowned');
						     	}
						     	$successIcon.addClass('animated fadeIn m--inputSuccessIcon-isShowned');
						     	
						     }
					   		console.log('проверка даты');
					   		console.log('2');
					   	break;

					   

					
					}	
				}
			}
			
			

		});
		console.log('количество ошибок '+ errorsArray);
		return 0;
	}

	validate($validateElements){
		let errorsArray = 0;

		$validateElements.each(function() {
			
			let $inputField = $('.form__inputField', this);
			let $errorMessage = $('.form__inputErrorMessage', this);
			let $errorIcon =  $('.form__inputErrorIcon', this);
			let $successIcon =  $('.form__inputSuccessIcon', this);
			
			let validateSettings = '';
			if($inputField.attr('data-validate')){
				validateSettings = $inputField.attr('data-validate').split(" ");
				let fieldErrors = 0;

				for (let setting of validateSettings){
					if (fieldErrors>0){
						continue;
					}
					switch(setting) {
					  case 'required': 
					  
					   		console.log('проверка пустоты');
					  		if($inputField.val().trim().length == 0) {
					  			   if($successIcon.is('.m--inputSuccessIcon-isShowned')){
					  			   		$successIcon.removeClass('m--inputSuccessIcon-isShowned');
					  			   } 
						           $errorIcon.addClass('m--inputErrorIcon-isShowned');
						           $errorMessage.html('This field is required');
						           $errorMessage.addClass('animated fadeIn m--inputErrorMessage-isShowned');
						           fieldErrors++;
						           errorsArray++;
						          
						     }else{
						     	if($errorIcon.is('.m--inputErrorIcon-isShowned')){
						     		 $errorIcon.removeClass('m--inputErrorIcon-isShowned');
						     		 $errorMessage.removeClass('animated fadeIn m--inputErrorMessage-isShowned');
						     	}
						     	$successIcon.addClass('m--inputSuccessIcon-isShowned');
						     	  
						     }
					   	break; 
					   case 'email': 
					  		if(!(/^([a-z0-9_-]+.)*[a-z0-9_-]+@([a-z0-9][a-z0-9-]*[a-z0-9].)+[a-z]{2,4}$/i).test($inputField.val().trim())){
					  			 if($successIcon.is('.m--inputSuccessIcon-isShowned')){
					  			   		$successIcon.removeClass('m--inputSuccessIcon-isShowned');
					  			   } 
						           $errorIcon.addClass('m--inputErrorIcon-isShowned');
						           $errorMessage.html('Invalid email format');
						           $errorMessage.addClass('animated fadeIn m--inputErrorMessage-isShowned');
						           fieldErrors++;
						           errorsArray++;
					  		}else{
						     	if($errorIcon.is('.m--inputErrorIcon-isShowned')){
						     		 $errorIcon.removeClass('animated fadeIn m--inputErrorIcon-isShowned');
						     		 $errorMessage.removeClass('animated fadeIn m--inputErrorMessage-isShowned');
						     	}
						     	$successIcon.addClass('animated fadeIn m--inputSuccessIcon-isShowned');
						     
						     }

					   		console.log('проверка почты');
					  		console.log('2');
					   	break;
					   	case 'date': 
					  		if(!proj.validator.isValidDate($inputField.val().trim())){
					  			 if($successIcon.is('.m--inputSuccessIcon-isShowned')){
					  			   		$successIcon.removeClass('animated fadeIn m--inputSuccessIcon-isShowned');
					  			   } 
						           $errorIcon.addClass('animated fadeIn m--inputErrorIcon-isShowned');
						           $errorMessage.html('Invalid date format');
						           $errorMessage.addClass('animated fadeIn m--inputErrorMessage-isShowned');
						           fieldErrors++;
						           errorsArray++;
					  		}else{
						     	if($errorIcon.is('.m--inputErrorIcon-isShowned')){
						     		 $errorIcon.removeClass('animated fadeIn m--inputErrorIcon-isShowned');
						     		 $errorMessage.removeClass('animated fadeIn m--inputErrorMessage-isShowned');
						     	}
						     	$successIcon.addClass('animated fadeIn m--inputSuccessIcon-isShowned');
						     	
						     }
					   		console.log('проверка даты');
					   		console.log('2');
					   	break;

					   		case 'checked': 
					  		if(!$inputField.is(':checked')){
					  			 if($successIcon.is('.m--inputSuccessIcon-isShowned')){
					  			   		$successIcon.removeClass('animated fadeIn m--inputSuccessIcon-isShowned');
					  			   } 
						           $errorIcon.addClass('animated fadeIn m--inputErrorIcon-isShowned');
						           $errorMessage.html('Must be checked');
						           $errorMessage.addClass('animated fadeIn m--inputErrorMessage-isShowned');
						           fieldErrors++;
						           errorsArray++;
					  		}else{
						     	if($errorIcon.is('.m--inputErrorIcon-isShowned')){
						     		 $errorIcon.removeClass('animated fadeIn m--inputErrorIcon-isShowned');
						     		 $errorMessage.removeClass('animated fadeIn m--inputErrorMessage-isShowned');
						     	}
						     	$successIcon.addClass('animated fadeIn m--inputSuccessIcon-isShowned');
						     	
						     }
					   		console.log('проверка чекбокса');
					   		console.log('2');
					   	break;

					   

					
					}	
				}
			}
			
			

		});
		console.log('количество ошибок '+ errorsArray);
		if(errorsArray>0){
			return false;
		}else{
			return true;
		}
		
	}

	isValidDate(value){
	  console.log(value);
	  var arrD = value.split("-");
	  arrD[1] -= 1;
	  var d = new Date(arrD[0], arrD[1], arrD[2]);
	   console.log(d);
	  if ((d.getFullYear() == arrD[0]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[2])) {
	    return true;
	  } else {
	    
	    return false;
	  }
	}

}