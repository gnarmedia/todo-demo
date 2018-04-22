```jsx
function handleSubmit(task) {
  const util = require('util');
  alert(`add task: ${util.inspect(task)}`);
  return false;
};
<AddTask onSubmit={(task) => handleSubmit(task)} />
```