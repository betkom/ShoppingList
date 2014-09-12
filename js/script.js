var newItem;
// var replaceWith = $('<input name="temp" type="text"/>');

var Shop ={

	init:function(){
	$('button').click(function(){
		Shop.getItem();
		$('#newItem').val("");
	});
		Shop.checkList();
		Shop.unCheckList();
		Shop.delList();
		Shop.editList();
	},

	getItem: function(){
		newItem = $.trim($('#newItem').val());
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
		else if(newItem.length > 18){
			alert('Item must not be more than 18 characters long');
		}
		else{
		Shop.createList();
		}
	},
	
	// ADD ITEMS
	createList: function(){
	 	$('#lists').append('<li>'+ '<input type="checkbox" class="checkbox" name="lists">'+"<span>"+ newItem +"</span>"+'<button id="edit">'+ 'Edit'+ '</button>'+'<button id="delete">'+ 'Del'+ '</button>'+ '</li>');	 	
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
	},
	editList: function(){
			$(document).on("click","#edit", function(){
			var elem = $(this).prev();
			var replaceWith = $('<input name="temp" type="text"/>');
			var buttonEdit = $(this);
			Shop.itemEdit(buttonEdit, elem, replaceWith);
			$(this).hide();
		});
	},
	itemEdit: function(buttonEdit, elem, replaceWith) {
		elem.hide();
		elem.after(replaceWith);
		replaceWith.val(elem.text());
		replaceWith.focus();
		replaceWith.blur(function(){
			 if($(this).val().length > 18){
            	alert("Item must not be more than 18 characters long");
            }else if($(this).val().length < 3){
            	alert("Item description too short");
            }
			else if($(this).val() != "") {
                elem.text($(this).val());
            }
            $(this).remove();
            elem.show();
            buttonEdit.show("slow");
		});

	}
};

 Shop.init();



