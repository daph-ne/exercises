DOM(Document Object Model)
    With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

Syntax:
var element = document.getElementById(id);
    * returns an element
    * returns 'null' if no matching element

element = document.querySelector(selectors);
    * returns the first element that matches the specified selector.
    * selector is id or class or <body> or <p>, etc.

elementList = parentNode.querySelectorAll(selectors);
    * returns a static NodeList representing a list of the document's elements that match the specified group of selectors.

var elements = document.getElementsByClassName(names); // or:
var elements = rootElement.getElementsByClassName(names);

HTMLElementObject.innerHTML
    * returns the innerHTML property
HTMLElementObject.innerHTML = text
    * sets the innerHTML property

node.innerText
    node --every HTML element is a "node"

Example:
    <p id="demo">   This element has extra spacing     and contains <span>a span element</span>.</p>
    innerText returns: "This element has extra spacing and contains a span element."
    innerHTML returns: "   This element has extra spacing     and contains <span>a span element</span>."
    textContent returns: "   This element has extra spacing    and contains a span element."

<span> - specific part(may be to chane colour or font)

 <a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a> 
_blank : Opens the linked document in a new window or tab
_self :	Opens the linked document in the same frame as it was clicked
_parent : Opens the linked document in the parent frame
_top : Opens the linked document in the full body of the window

 <input type="Type of input" id=" " value="Text in the input" onclick="function()" placeholder="gray text in input box"> 
 In js, for input => document.getElementById(" ").value;

NOTE:
    * add js file to html
    * clearly mention variable and string
