# Creating Elements With JavaScript

## `insertAdjacentHTML("locationOfHTml", "HTMLtextToInsert")`
- beforebegin => insert as previous sibling
- afterbegin => insert as first child
- beforeend => insert as last child
- afterend => insert as following sibling


# Removing Content
When storing an element in a variable and attempting to access its children the `parent.firstChild` property may be used. 

The `.firstChild` however may inadvertently be a text node by way of white space entries that have unintentionally been accrued. 

To ensure the `.firstChild` is an element and not character spaces, use `parent.firstElementChild` property instead.

When the `firstElementChild` is stored in a `firstElementChildVariable` it can then be removed if required with `parentContainer.remove(firstElementChildVariable)` method to remove the child element from its parent container.

The child can also be removed by not having explicit access to the parent but instead by getting the child, calling the`.parentElement` and then calling`.removeChild(nameOfChild)`:
`nameOfChild.parentElement.removeChild(nameOfChild)`.

To save time the childElement itself can just be removed without need to reference the parent at all with: `childElement.remove()` method. The `.remove()`method is much quicker and just as accurate.

