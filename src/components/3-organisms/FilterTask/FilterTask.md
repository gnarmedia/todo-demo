```jsx
function handleFilterClick(filter) {
  const util = require('util');
  alert(`set filter: ${filter}`);
  return false;
};
<FilterTask onFilterClick={handleFilterClick} />
```