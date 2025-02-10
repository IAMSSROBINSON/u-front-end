# JavaScript And The DOM

## Hoisting
`let` and `const` declared variables are block scoped not function scoped.
`var` declared variables are function scoped (or globally scoped if not contained).

## Variadic functions
Functions that accept an unlimited number of arguments

## DOM
The browser encounters the HTML as bytes. The bytes are converted to tags, characters.

`<html>` => When the browser encounter a recognized tag from a document it omits a `Token` that represents it. This process it performed by the `Tokenizer`. The `Tokenizer` goes character by character to build up a recognized Token:
`StartTag: HTML` Token. 

`<head>`
`StartTag: Head` Token.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
`Tag: meta`

`</head>`
`TagEnd: head` Token


While the `Tokenizer` tokenizes the HTML tags into Tokens another process converts the tags into `Node Objects` (the start and end tags do not appear in the Node Tree):

`<html>` Tag
`StartTag: HTML` Token
(html) Node (before all other nodes, root node)

`<head>` Tag
`StartTag: head` Token
(head) Node (after the html node, child of the html node)

The full tree of parsed Nodes is converted to the DOM (Document (node)Object Model). Each node object contains the properties of the tag elements e.g. `<img src="example.jpg">`, `StartTag: img` Token, `(img)Node Object.property.src=example.jpg`.

The DOM is accessed by a special object provided by the browser: `document`.

1. Characters
2. Tags
3. Tokens
4. Node Objects
   - Node: Class that returns node objects.
   - node objects contain the properties and methods available on the node that represent the element
5. DOM

## Node Interface
- Blueprint for creating nodes
- Node Interface => you call call properties and methods of Nodes
- When you call Element.appendChild(), the Element is the Node and appendChild is a method.

## Element Interface
- Blueprint for creating elements
- Descendent of Node Interface so inherits properties and methods from it
- element.addEventListener is a method available to the element



