/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/

 var xhr = new XMLHttpRequest();

 xhr.onload = function(){

 	var responseObject = JSON.parse(xhr.responseText);

 	var newContent = '';

 	for (var i = 0; i < responseObject.locations.length; i++){

 		newContent += '<a href="">';
 		newContent += '<h2>'+ responseObject.locations[i].city+ responseObject.locations[i].state+'</h2>';
 		newContent += '<h4>'+ responseObject.locations[i].title+'</h4>';
 		newContent += '<p>' + responseObject.locations[i].text+'</p>';
 		newContent += '</a>';
		}
 		var content = document.querySelector('#locations');
 		content.innerHTML = newContent;
 	
    
 	var newPosts ='';

 	for(var i =0; i < responseObject.posts.length; i++){

 		newPosts += '<li>';
 		newPosts +='<img src="'+ responseObject.posts[i].imageURL+'" alt="picture">';
 		newPosts +='<h3>'+responseObject.posts[i].title+'</h3>';
 		newPosts +='<p><strong>'+responseObject.posts[i].subtitle+'</strong></p>';
 		newPosts +='<a href="'+responseObject.posts[i].moreLink+'"></a>';
 		newPosts += '</li>';
 		}
 		var content = document.querySelector('#posts');
 		content.innerHTML = newPosts;
 	
 	var newEvents = '';

 	for(var i =0; i < responseObject.events.length; i++){

 		newEvents += '<li>';
 		newEvents += '<time datetime="'+responseObject.events[i].date+'"></time>';
 		newEvents += '<h4>'+responseObject.events[i].title+'</h4>';
 		newEvents += '<p>'+responseObject.events[i].text+'</p>';
 		newEvents += '</li>';
 	}
 		var content = document.querySelector('#events');
 		content.innerHTML = newEvents;

 	var newHikers ='';

 	for(var i =0; i < responseObject.hikers.length; i++){

 		newHikers += '<li>';
 		newHikers += '<img src="'+responseObject.hikers[i].imageURL+'" alt="picture">';
 		newHikers += '<p>'+responseObject.hikers[i].lastname+', '+responseObject.hikers[i].firstname+'</p>';
 		newHikers += '<p>'+responseObject.hikers[i].city+', '+responseObject.hikers[i].state+'</p>';
 		newHikers += '</li>';
 	}
		 var hikers = document.querySelector('#hikers');
		 hikers.innerHTML = newHikers;

	var aboutSection ='';

		aboutSection += '<h3>About</h3>';
		aboutSection += '<p>'+responseObject.about.title+'</p>';
		aboutSection += '<p>'+responseObject.about.text+'</p>';
		aboutSection += '<p>'+responseObject.about.copyright+'</p>';

		var about = document.querySelector('#about');
		about.innerHTML = aboutSection;
	
  }
  xhr.open('GET', 'https://jbonline.bitbucket.io/data/hikersguide.json', true);

 	xhr.send(null);
