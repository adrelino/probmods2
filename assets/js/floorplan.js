function loadImages(){
	var xhr = new XMLHttpRequest();
	var base = '../assets/img/layout-4/';
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			text = xhr.responseText;
			lines = text.split("\n"); 
			for(i = 0; i < lines.length; i++){
				if(!lines[i]) continue;
				var img = document.createElement("img");
				img.src = base+lines[i];
				var src = document.getElementById("images");
				src.appendChild(img);
			}
		}
	}
	xhr.open('GET', base+'all.txt', true);
	xhr.send();
}
