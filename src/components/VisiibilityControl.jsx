export const VisibilityControl = ({
  setShowCompleted,
  cleanTasks,
  isChecked,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this?")) {
      cleanTasks();
    }
  };
  return (
    <div className="d-flex justify-content-between border-secondary 
    p-2 text-center border-secondary">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      
        <label> Show Tasks Done</label>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Clear
        </button>
    </div>
  );
};
