
// var $item = $('input').val();
// var $list = $('<ul id="lists"></ul>');
// var $listitem = $('<li id="listitem"></li>');
// $('button').click (function(event){
// 	event.preventDefault();
// $list.append($listitem);
// $listitem.append($item);
// });


var userItem;
isInputValid = function(){
if(newItem === null || newItem=== undefined){
	$('#feedback').text("You must enter an item");
}
};


$('button').click(function(event){
	event.preventDefault();
	userItem = $('#newItem').val();
	console.log(userItem);
	isInputValid();
});