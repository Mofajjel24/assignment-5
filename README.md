

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?
- **getElementById** → returns one element by ID.  
- **getElementsByClassName** → returns a live HTMLCollection of elements with the class.  
- **querySelector** → returns the first element matching a CSS selector.  
- **querySelectorAll** → returns a static NodeList of all matches.  

---

## 2. How to create and insert a new element into the DOM?
```js
const div = document.createElement("div");
div.textContent = "Hello!";
document.body.appendChild(div); // adds to DOM

3. What is Event Bubbling?

Events on a child element bubble up to its parents. Example: clicking a button triggers its parent’s event too.

4. What is Event Delegation? Why useful?

Attaching a single listener to a parent to handle events on children.
✅ Fewer listeners, ✅ works for dynamic elements, ✅ cleaner code.

5. Difference between preventDefault() and stopPropagation()?

preventDefault() → stops default browser action (e.g., form submit, link open).

stopPropagation() → stops event from bubbling up to parent elements.
