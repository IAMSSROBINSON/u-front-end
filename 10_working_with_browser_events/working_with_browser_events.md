# Working With Browser Events

element.addEventListener("eventType", functionToExecute, phaseOfEventToExecute);
document.removeEventListener("eventType", functionExecutedByAddEventListener);

Phases of Event and delegation:
- catching: false by default
- onTarget: event.target
- bubbling: true by default

target.nodeName 
target.closest(".selectorToConfirm")

document.addEventListener("DOMContentLoaded", functionToExecute)
defer


