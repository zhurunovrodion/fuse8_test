class UI{
	constructor(){

	}



	formLabelSlideInit(){
		 $('.js--labelFocusSlide').each(function() {
	               let inputWrapper = this;
	               let $inputField = $('.form__inputField', inputWrapper);
	               let $inputLabel = $('.form__inputLabel', inputWrapper);
	              
	               
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
						           
						          
						     }

						     if($.trim(this.value).length) { 
						            $inputLabel.addClass('m--form__inputLabel-slideUp');
						           
						          
						     }


						     
					});


	     });
	}

	inputDatepickerInit(inputWithDatepicker){
			$.fn.datepicker.language['eng'] =  {
			    days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
			    daysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
			    daysMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
			    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
			    monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
			    today: 'Today',
			    clear: 'Clear',
			    dateFormat: 'dd.mm.yyyy',
			    timeFormat: 'hh:ii',
			    firstDay: 1
			};

			 let $deviceType= $('html');
                console.log($deviceType);
              
                if(!$deviceType.is('.desktop')){
                	
                	
                	inputWithDatepicker.attr('type','date');
                	
                } else{
                	inputWithDatepicker.datepicker({
						dateFormat: 'yyyy-mm-dd',
						language: 'eng'
					});
                }

			
			

			
	}



}


proj.ui = new UI();