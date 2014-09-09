var newItem;
var Shop ={

	init:function(){
	$('button').click(function(){
		Shop.getItem();
	});
		Shop.checkList();
		Shop.unCheckList();
		Shop.delList();
	},

	getItem: function(){
		newItem = $('#newItem').val();
		Shop.isInputValid();
	},
	
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
	
	// ADD ITEMS
	createList: function(){
	 	$('#lists').append('<li>'+ '<input type="checkbox" class="checkbox" name="lists">'+ newItem + '<button id="delete">'+ 'Delete'+ '</button>'+ '</li>');	 	
	},
	//CHECK AND UNCHECK LIST ITEMS
	checkList: function(){
		$('#lists').on('change',"input[type =checkbox]",function(){
		var check_off = $(this).parent();
		$('#purchased').append(check_off);
	});
	},

	unCheckList: function(){
		$('#purchased').on('change',"input[type =checkbox]",function(){
 		var check_off = $(this).parent();
 		$('#lists').append(check_off);
 	});
	},
	//DELETE LIST ITEMS
	delList: function(){
		$(document).on("click", "#delete", function(){
   		$(this).parent('li').remove();
	});
	}
};

 Shop.init();



