$(document).ready(function(){

	//create an initial array of topics
	var topics = ['hedgehog', 'honeybadger', 'mongoose', 'ferret', 'skunk', 'hawk', 'eagle', 'falcon'];
	var topic;
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC";
	
	//create buttons for each topic in the array
	for (var i = 0; i < topics.length; i++) {
		var button = $("<button>").text(topics[i]); 
		$("#topicButtons").append(button);
	}

	//listen for clicks on the buttons
	$("#topicButtons").on("click", function(e){
		topic = $(this).val().trim();
		//call a function to query the giphy API
		queryGiphyAPI();
	});
	
	//listen for new input from the form 
	$("#addTopic").on("click", function(){

	 	//get the value input
	 	var newTopic = $("#topic-input").val().trim();

	 	//add the value to the array
	 	topics.push(newTopic);

	 	//display the new button on the page
		var newButton = $("<button>").text(newTopic);
		$("#topicButtons").append(newButton);

	 	return false;
	});


	//define a function that queries the GIPHY API
	function queryGiphyAPI(){
		$.ajax({
		            url: queryURL,
		            method: 'GET'
		        })
		        .done(function(response) {
		        	console.log(response);
		        	       	
		        	for (i=0; i<=9; i++){
		        		var imgURL = response.data[i].images.original_still.url;
		        		var gifURL = response.data[i].images.original.url;
		        		var rating = response.data[i].rating;
		        		var type = response.data[i].type; 
		        		$("#topix").append('<span class="rating">' + 'Rating: ' + rating);
		        		$("#topix").append('<img src=' + imgURL + '>');
		        	}
		        	return gifURL;
		        });		       
	};/*END query GIPHY API */
	//listen for clicks on an image and start/stop giphy image

	queryGiphyAPI();
}); /*END DOCUMENT READY*/