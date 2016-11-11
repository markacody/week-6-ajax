//create an initial array of topics
var topics = ['hedgehog', 'honeybadger', 'mongoose', 'ferret', 'skunk', 'hawk', 'eagle', 'falcon'];

//create buttons for each topic in the array
for (var i = 0; i < topics.length; i++) {
	var button = $("<button>").text(topics[i]); 
	$("#topicButtons").append(button);
}

//


//listen for clicks on the buttons
$("#topicButtons").on("click", function(){

	//query the giphy API

	//call the function that prints results

});

//define a function that prints results on the page



//collect new input from the form 
$("#addTopic").on("click", function(){

// 	//get the value input
 	var newTopic = $("#topic-input").val().trim();

// 	//add the value to the array
 	topics.push(newTopic);

// 	//display the new button on the page
	var newButton = $("<button>").text(newTopic);
	$("#topicButtons").append(newButton);

 	return false;
});