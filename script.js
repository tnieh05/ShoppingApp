$(document).ready(function(){

	var check = "<i class='fa fa-check-circle'>"
	var removeItem = "<i class='fa fa-times-circle'>"

//This function allows user to press "Enter" to add item to list
function enterItem() {
	$("#textbox-enter").keydown(function(enter){
		if(enter.keyCode == 13) {
			var textInput = $("#textbox-enter").val();
			var addItems = $("<li>" + check + textInput + removeItem + "</li>");
			$(".list").append(addItems);
			
		}
	})
}

enterItem();

//Adds item when submit button is clicked
$(document).on("click", "#get", function(){
	postItem();
});


//Function to add item to list
function postItem(){
	
	var textInput = $("#textbox-enter").val();
	var addItems = $("<li>" + check + textInput + removeItem + "</li>");
	$(".list").append(addItems);
	
};

//Toggles the check mark on and off
$(".main").on("click", ".fa-check-circle", function(){
		$(this).toggleClass("clicked");
	
	})

// Removes a line
$("ul").on("click", ".fa-times-circle", function(){
	$(this).parent().closest("li").remove();
} );

	
});








