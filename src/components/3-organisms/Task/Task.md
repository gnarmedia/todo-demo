```jsx
function handleToggleStatusClick(id) {
  alert(`toggle status: ${id}`);
  return false;
}
function handleRemoveClick(id) {
  alert(`task removed: ${id}`);
  return false;
}
<Task
  title="Sample Task"
  isComplete={false}
  onToggleStatusClick={() => handleToggleStatusClick(1)}
  onRemoveClick={() => handleRemoveClick(1)}
/>
```