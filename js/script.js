var newItem;
var Shop ={

	/*********************
		INPUT VALIDATION
	**********************/
	isInputValid: function(){
		if(newItem === "" || newItem === "  "){
			alert('Enter an item');	
		}
		else if(newItem.length < 3){
			alert('Item description too short');
		}
		else if(newItem.length > 30){
			alert('Item description too long');

		}
		else{
		Shop.createList();
		}
	},
	
	/*********************
		ADD ITEMS
	*********************/
	createList: function(){
	 	$('#lists').append('<li>'+ '<input type="checkbox" class="checkbox" name="lists">'+ newItem + '<button id="delete">'+ 'Delete'+ '</button>'+ '</li>');
		}
};


$('button').click(function(event){
	event.preventDefault();
	newItem = $('#newItem').val();
	 Shop.isInputValid();
	 $('#newItem').val("");
});
// DELETE LIST ITEMS
$(document).on("click", "#delete", function(){
   $(this).parent('li').remove();
});

// CHECK LIST ITEMS ON INTENDED LIST
$('#lists').on('change',"input[type =checkbox]",function(){
		var check_off = $(this).parent();
		$('#purchased').append(check_off);
	});

// CHECK LIST ITEMS ON COMPLETED LIST
$('#purchased').on('change',"input[type =checkbox]",function(){
		var check_off = $(this).parent();
		$('#lists').append(check_off);
	});
