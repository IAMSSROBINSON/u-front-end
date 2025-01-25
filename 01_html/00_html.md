# HTML: Hyper Text Markup Language

Structuring a webpage.

## Attributes
Additional information about an element.

```HTML
<!-- Anchor tag with attributes -->
<a href="www.example.com" target="_blank" rel="noopener noreferrer" />
```

`"noopener"` => means if the link is opened in a new page that it cannot control the original page via the window.opener property thus protecting your privacy.

`"noreferrer"` => withhold referrer information when a user clicks the link for anonymity.


## DOM: Document Object Model
A model of a HTML document as it should appear on a screen.

It is a tree of nodes with a hierarchy:
 - each node is an element / tag
 - each node contains objects / content

Accessing the DOM tree allows its manipulation:
 - style
 - structure
 - content

The top node is the `html` element node as seen at the top of a document.
