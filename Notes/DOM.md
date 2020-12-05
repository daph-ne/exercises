DOM(Document Object Model)

Syntax:
var element = document.getElementById(id);
    => returns an element
    => returns 'null' if no matching element

element = document.querySelector(selectors);
    => returns the first element that matches the specified selector

elementList = parentNode.querySelectorAll(selectors);
    => returns a static NodeList representing a list of the document's elements that match the specified group of selectors.

var elements = document.getElementsByClassName(names); // or:
var elements = rootElement.getElementsByClassName(names);

HTMLElementObject.innerHTML
    => returns the innerHTML property
HTMLElementObject.innerHTML = text
    => sets the innerHTML property

node.innerText
    node=> every HTML element is a "node"

Example:
    <p id="demo">   This element has extra spacing     and contains <span>a span element</span>.</p>
    innerText returns: "This element has extra spacing and contains a span element."
    innerHTML returns: "   This element has extra spacing     and contains <span>a span element</span>."
    textContent returns: "   This element has extra spacing    and contains a span element."

 <input type="Type of input" id=" " value="Text in the input" onclick="function()" placeholder="gray text in input box"> 
 In js, for input => document.getElementById(" ").value;

NOTE:
    => add js file to html
    => clearly mention variable and string
