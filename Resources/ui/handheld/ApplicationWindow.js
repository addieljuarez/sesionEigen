//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	// var FirstView = require('ui/common/FirstView');

	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor : '#ffffff',
	});

	
	var vista = Ti.UI.createView({
		top : 60,
		backgroundColor : 'pink',
		height : 100,
		width : 100,
		borderRadius : 50,
	});

	
	self.add(vista);
	
	
	var btn = Ti.UI.createButton({
		top : 200,
		height : 50,
		width : '80%',
		title : 'click animation',
		borderColor : 'red',
	});
	
	self.add(btn);
	
	
// 	===========================================
	var animation = Ti.UI.createAnimation({
		top : 300,
		backgroundColor : 'blue',
		duration : 3000,
	});
	
	
	
	btn.addEventListener('click', function(e){
		vista.animate(animation);
	});
	
// ===========================================
	
	
	// animation.addEventListener('complete', function(e){
		// alert('animation complete');
	// });
	
	//construct UI
	// var firstView = new FirstView();
	// self.add(firstView);

	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
