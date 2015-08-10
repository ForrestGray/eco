/*!
 * == HTML5 Image Preview ==
 * Created By: finn
 * Version: 1.0
 * Documentation: you're looking at it.
 *
 * HTML structure:
 * <div class="imagePreview"></div>
 * <span class="inputFile label">Select image<input type="file" onchange="previewImage(this);"></span>
 *
 */
function previewImage(el){
	// this function 
	// declare variables
	var uploadedFiles = el.files;
	var uploadDisplayElement = document.getElementsByClassName('imagePreview')[0];
	var allowedTypes = ['JPG','JPEG','PNG'];
	var file = uploadedFiles[0];
	var imageMIMEType = /image.*/;
	var img='';
	var errorMsg = '';
	var reader = new FileReader();
	
	reader.onload = (function(aImg) {
		return function(e) {
			var format = e.target.result.split(';');
			format = format[0].split('/');
    		format = format[1].split('+');
			format = format[0].toUpperCase();

			if (!file.type.match(imageMIMEType)) {
				errorMsg = 'This is not an image.';
			}

			if (allowedTypes.indexOf(format)<0) {
				errorMsg = 'This is not an image format we can work with.';
			}
			
			if (errorMsg == ''){
					var image = document.createElement('img');
					var src = e.target.result;
					image.src = src;
					image.src = window.URL.createObjectURL(uploadedFiles[0]);
					image.width = 256;
					uploadDisplayElement.appendChild(image);

			} else {
				// throw error, using alert for now…
				alert(errorMsg);
				return false;
			}						
		};
	})(img);
	reader.readAsDataURL(file);
}
