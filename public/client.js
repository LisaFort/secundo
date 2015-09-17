$(function(){
	$.get('/what',appendSentence);

	function appendSentence(sentence) {
	var sentence1 = [];
	sentence1.push($('<li>', {text: sentence}));
	$('.sentence-to').append(sentence1);
	}
})