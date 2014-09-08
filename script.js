
// var $item = $('input').val();
// var $list = $('<ul id="lists"></ul>');
// var $listitem = $('<li id="listitem"></li>');
// $('button').click (function(event){
// 	event.preventDefault();
// $list.append($listitem);
// $listitem.append($item);
// });


var newItem;
var Shop ={
isInputValid: function(){
if(newItem === " " || newItem === undefined){
	alert('Enter an item');
	
}
},

createList: function(){
 $('#lists').append('<li>'+ '<input type="checkbox" class="checkbox" name="lists">'+ newItem + '</li>');

}
// checkList: function(){


// 	}

};
$(document).on('change',"input[type =checkbox]",function(){
		// $(this).parent().show();
		console.log('sahga')
		var check_off = $(this).parent();
		$('#purchased').append(check_off);

	});

$('button').click(function(event){
	event.preventDefault();
	newItem = $('#newItem').val();
	console.log(typeof newItem);
	Shop.createList();
});


// $('.checkbox').click(Shop.checkList);
// $('.checkbox').click(function(event){
// 	event.preventDefault();
// 	Shop.checkList();
// });