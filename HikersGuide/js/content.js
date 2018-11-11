/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://jbonline.bitbucket.io/data/hikersguide.json
*/

 var xhr = new XMLHttpRequest();

 xhr.onload = function(){

 	var responseObject = JSON.parse(xhr.responseText);

// Location Section ===================================================================
 	
 	var locSection = document.querySelector('#locations>.wrapper');
 	

 	if(locSection){
 		var newLocations = '<ul>';
		for (var i = 0; i < responseObject.locations.length; i++){

			newLocations += '<li>'
			newLocations += '<a href=""></a>';
			newLocations += '<h2>'+ responseObject.locations[i].city+ ', '+responseObject.locations[i].state+'</h2>';
			newLocations += '<h4>'+ responseObject.locations[i].title+'</h4>';
			newLocations += '<p>' + responseObject.locations[i].text+'</p>';
			newLocations += '</li>';
		}
		newLocations += '</ul>';
 		
 		locSection.insertAdjacentHTML('afterbegin', newLocations);
 	}
// Desitnations Page ==================================================================
	var newDest = '<ul>';
	var locPage = document.querySelector('#destinations');

	if(locPage){
		for (var i = 0; i < responseObject.locations.length; i++){
			newDest += '<li>'
 			newDest += '<a href=""></a>';
 			newDest += '<h2>'+ responseObject.locations[i].city+ ', '+responseObject.locations[i].state+'</h2>';
 			newDest += '<h4>'+ responseObject.locations[i].title+'</h4>';
 			newDest += '<p>' + responseObject.locations[i].text+'</p>';
 			newDest += '</li>';
		}

		locPage.insertAdjacentHTML('beforeend', newDest + '</ul>');
	}

// Blog Section =======================================================================
 	var newBlogs ='<ul>';
 	var blogSection = document.querySelector('#blogs>.wrapper');

 	if(blogSection){
 	for(var i =0; i < responseObject.posts.length; i++){

 		newBlogs += '<li>';
 		newBlogs +='<p><img src="'+ responseObject.posts[i].imageURL+'" alt="picture"></p>';
 		newBlogs +='<h4>'+responseObject.posts[i].title+'</h4>';
 		newBlogs +='<p>'+responseObject.posts[i].text+'</p>';
 		newBlogs +='<p><a href="" class="readmore">Read More</a></p>';
 		newBlogs += '</li>';
 		}
 		
 		blogSection.innerHTML =  newBlogs + '</ul>';
 	}

// Event Section =======================================================================

 	var eventSection = document.querySelector('#events');

 	if(eventSection){
 		var newEvents = '<ul>';
 	for(var i =0; i < responseObject.events.length; i++){

 		newEvents += '<li>';
 		newEvents += '<time datetime="'+responseObject.events[i].date+'">'+responseObject.events[i].date+'</time>';
 		newEvents += '<h4>'+responseObject.events[i].title+'</h4>';
 		newEvents += '<p>'+responseObject.events[i].text+'</p>';
 		newEvents += '</li>';
 		}
 		
 		eventSection.insertAdjacentHTML('beforeend', newEvents + '</ul>');
 	}

// Hikers Section =======================================================================
 	
 	var hikers = document.querySelector('#hikers');
 	var newHikers = '<ul>';
 	if(hikers){
 	for(var i =0; i < responseObject.hikers.length; i++){

 		newHikers += '<li>';
 		newHikers += '<p class="hikerpic"><img src="'+responseObject.hikers[i].imageURL+'" alt="picture"></p>';
 		newHikers += '<p>'+responseObject.hikers[i].lastname+', '+responseObject.hikers[i].firstname+'</p>';
 		newHikers += '<p>'+responseObject.hikers[i].city+', '+responseObject.hikers[i].state+'</p>';
 		newHikers += '</li>';
 	}
 	hikers.insertAdjacentHTML('beforeend', newHikers + '</ul>');
 }
		 
		 

// about Section =======================================================================
	var about = document.querySelector('#about');
	if(about){
	var aboutSection ='';

		aboutSection += '<h3>About</h3>';
		aboutSection += '<p>'+responseObject.about.title+'</p>';
		aboutSection += '<p>'+responseObject.about.text+'</p>';
		aboutSection += '<p>'+responseObject.about.copyright+'</p>';

		about.innerHTML = aboutSection;
	}

// Events Page Date Selector =============================================================
	
	
	var eventSelection = document.querySelector('#eventSelection')
	if(eventSelection){
		var eventSelector = '<ul id="dateSelector">';
		for (var i = 0; i < responseObject.events.length; i++) {
			
			eventSelector +=	'<li><button>'+responseObject.events[i].date+'</button></li>'

		}
		eventSelector += '</ul>';
		eventSelector += '<ul id="eventList">';
		for (var i = 0; i < responseObject.events.length; i++) {
			eventSelector += '<li>';
			eventSelector += '<h2>'+responseObject.events[i].title+'</h2>';
			eventSelector += '<p>'+responseObject.events[i].text+'</p>';
			eventSelector += '<dl>';
			eventSelector += '<dt>Sponser</dt>';
			eventSelector += '<dd>'+responseObject.events[i].sponsor+'</dd>';
			eventSelector += '<dt>Date</dt>';
			eventSelector += '<dd>'+responseObject.events[i].date+'</dd>';
			eventSelector += '<dt>Location</dt>';
			eventSelector += '<dd>'+responseObject.events[i].location+', '+responseObject.events[i].state+'</dd>';
			eventSelector += '</dl>';
			eventSelector += '<button>DETAILS</button>';
		}
		eventSelection.insertAdjacentHTML('beforeend', eventSelector + '</ul>')
	}

	var events
	
  }
  xhr.open('GET', 'https://jbonline.bitbucket.io/data/hikersguide.json', true);

 	xhr.send(null);
