# Task 3 - React Native Performance & Debugging

## Question 1

### Why does FlatList become laggy with 5000 items?

When FlatList contains a very large number of items, more data needs to be rendered on the screen. This can increase memory usage and affect scrolling performance.

### How would I optimize it?

* Use React.memo to reduce unnecessary re-renders.
* Use keyExtractor for unique keys.
* Use getItemLayout when item sizes are fixed.
* Use removeClippedSubviews to remove off-screen items.
* Use initialNumToRender to render fewer items at first.
* Use maxToRenderPerBatch and windowSize for better rendering performance.
* Avoid inline functions where possible.
* Use Pagination or Infinite Scroll for large data.

---

## Question 2

### How would I identify excessive re-renders?

* Use React DevTools Profiler.
* Use console.log render tracking.
* Check if components are rendering multiple times unnecessarily.

### How would I fix excessive re-renders?

* Use React.memo.
* Use useCallback for functions.
* Use useMemo for expensive calculations.
* Optimize state updates.
* Avoid unnecessary parent component re-renders.
* Optimize Context usage.
