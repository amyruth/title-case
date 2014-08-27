/*EXPLANATION

convert the string to a lower case array before any processing is done
check the length of the array
if it's a single word
	convert back to a string
	use string methods to convert the word to title case and return the word
if there is more than one word
	use a regular for loop BUT decrement the counter after the processing of each word
	WHY?
		Shifting the array affects the length of the array, causing the loop to skip words if the increment is used
		push each word into a holder array
		return the array joined into a string with .join() method*/

var titleCase = function(string){
	var stringArray = string.toLowerCase().split(" ");
  var holding = [];
	if(stringArray.length === 1){
		string = stringArray.toString();
	  	var stringslice = string.slice(0,1);
	 	console.log(stringslice);
	  	var slicecap = stringslice.toUpperCase();
	  	var word = slicecap + string.slice(1);
	  	return word;
	}else{
    for(var j = 0; j<stringArray.length;j+=1){
      var firstword = stringArray.shift();
      var firstletter = firstword.slice(0,1);
      var capital = firstletter.toUpperCase();
      var capitalized = capital + firstword.slice(1);
      holding.push(capitalized);
      j-=1;
    }
    return holding.join(" ");
 }
};

$(document).ready(function(){
	$('form#blanks').submit(function(event){
		var textInput = $('input#start-text').val();
		var result = titleCase(textInput);

		$('p#titlecaps').text(result);
		$('#results').show();
		$('#blanks')[0].reset();
		event.preventDefault();
	});
});