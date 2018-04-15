class UI{
	constructor(){

	}



	formLabelSlideInit(){
		 $('.js--labelFocusSlide').each(function() {
	               let inputWrapper = this;
	               let $inputField = $('.form__inputField', inputWrapper);
	               let $inputLabel = $('.form__inputLabel', inputWrapper);
	               console.log($inputField);

	              	$inputField.on('ifEmpty', function(){
							
							     if($.trim(this.value).length!=0) { // zero-length string AFTER a trim
					     	
					            $inputLabel.addClass('m--form__inputLabel-slideUp');
					           
						     }
					});

					$inputField.keydown(function(){
						 $inputLabel.addClass('m--form__inputLabel-slideUp');
					});
					$inputField.keyup(function(){
						 $inputLabel.addClass('m--form__inputLabel-slideUp');
					});

					
					$inputField.trigger('ifEmpty');


	              	$inputField.on('click', function(){
	              		
						 $inputLabel.addClass('m--form__inputLabel-slideUp');
					});
					
					$inputLabel.on('click', function(){
						$inputLabel.addClass('m--form__inputLabel-slideUp');
					});

					$inputField.blur(function() {
						     if(!$.trim(this.value).length) { 
						            $inputLabel.removeClass('m--form__inputLabel-slideUp');
						           
						           console.log(!$.trim(this.value).length);
						     }
					});
	     });
	}



}


proj.ui = new UI();