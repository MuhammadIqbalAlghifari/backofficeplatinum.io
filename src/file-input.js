var loadFile = function(event) {
            
	var input = event.target;
	var file = input.files[0];
	var type = file.type;

   var output = document.getElementById('preview_img');


	output.src = URL.createObjectURL(event.target.files[0]);
	output.onload = function() {
		URL.revokeObjectURL(output.src) // free memory
	}
};