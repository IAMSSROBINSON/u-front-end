# Performance

`performance.now()` has microsecond precision.

new elements in the DOM trigger a reflow to determine the new screen layout
the screen then needs to be repainted to reflect these changes

`document.createDocumentFragment()` is not present in the DOM
documentFragment is a pseudo dom tree unto itself
does not trigger reflow
no performance cost to using it
changes happen off screen

reflow: occurs after DOM and CSS are loaded
occurs every time something in layout changes
slow process time complexity

repaint: occurs after reflow
browser paints layout to screen


# The Event Loop: Code run in response to an event
JavaScript concurrency model:
- if code is running let it run-to-completion
- if no code is running then run any pending event handlers

The Event Loop:
- the calls stack
- web apis / the browser: addEventListener, setTimeout API from the browser interface
- event queue

