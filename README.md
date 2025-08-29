

1. **Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll**  
   - `getElementById` → returns one element by ID.  
   - `getElementsByClassName` → returns a live collection of elements with a class.  
   - `querySelector` → returns the first element matching a CSS selector.  
   - `querySelectorAll` → returns a static list of all matches.  

2. **How to create and insert a new element into the DOM**  
   - Use `document.createElement()` to create an element.  
   - Add content with `.textContent` or `.innerHTML`.  
   - Insert with `appendChild()` or `insertBefore()`.  

3. **What is Event Bubbling and how does it work?**  
   - Event Bubbling = when an event on a child element propagates upward to its parent elements.  

4. **What is Event Delegation in JavaScript? Why is it useful?**  
   - Event Delegation = placing one event listener on a parent to handle events on its children.  
   - Useful because it reduces memory usage, keeps code clean, and works for dynamically added elements.  

5. **Difference between preventDefault() and stopPropagation()**  
   - `preventDefault()` stops the browser’s default behavior (e.g., form submit, link open).  
   - `stopPropagation()` stops the event from bubbling up the DOM tree.  

