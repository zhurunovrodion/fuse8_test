class Proj{

	сonstructor(){
		this.modal;
		this.ui;
		this.validator;
	}
	 
}

var proj = new Proj;


try{
	proj.ui = new UI(); 
}catch(e){
		console.log('get ui object error');
}

try{
	proj.validator = new Validator(); 
}catch(e){
		console.log('get validator object error');
}
