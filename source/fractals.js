
window.addEvent('domready',function(){
	var i,f,
		fractals = [
			{	name: 'cantor',
				constructor: Cantor,
				width:800,
				height: 480 },
			{	name: 'pythagoras',
				constructor: Pythagoras,
				width:800,
				height:530 },
			{	name: 'koch',
				constructor: Koch,
				width:800,
				height:340 },
			{	name: 'tree',
				constructor: Tree,
				width:680,
				height:550 },
			{	name: 'carpet',
				constructor: Carpet,
				width:550,
				height:550 }
		];
	
	// setup th rest of the fractal stuff.
	for(i=0; i<fractals.length; i++){
		// actually instantiate each fractal.
		f = fractals[i];
		f.instance = new f.constructor(f.name+"_canvas");
	}// end for
});