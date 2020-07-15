document.body.onload = function () {
	addPacks();
};

/** 
 * adds "hi there and greetings" to the pack selection div; 
 * edit later to create the checkbox lists 
 */
function addPacks () { 
  // create a new div element 
  const newDiv = document.createElement("div"); 
  // and give it some content 
  const newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  
  // add the newly created element and its content into the DOM 
	const currentDiv = document.getElementById("pack-selection"); 
	currentDiv.append(newDiv);	
}