# CSS: Cascading Style Sheets
Styling HTML elements and webpages.


## Selectors
Selecting HTML elements to style in CSS.

### Pseudo-class
Specifies a `:state` of an element.
```CSS
.element:hover {
    property : value;
}
```

### Attribute Selectors
Select elements based on attributes and attribute values.

```CSS

/* `[attributeName]` => match all attributes of this name */
a[class] {

}

img[alt] {
    
}

/* `[attributeName=value]` => match all attributes with this name and value */
a[href="www.example.com"] {

}

/* `[attributeName~=value]` => match all attributes with this name that contains this value */
a[class~="logo"] {

}
```

### `@import "./filePath.css";`
Import an external stylesheet into a main.css file so that all individual css files are served out of the main.css file.


### Specificity

- type / `tagName`, `::pseudo-elements` selectors
- `.class`, `:pseudo-classes` selectors
- `#id` selectors
- `!important` selectors


## Typography
Styling of text.

