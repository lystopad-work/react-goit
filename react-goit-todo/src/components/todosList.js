export const TodosList = ({todos, onRemoveTodoClick}) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className='todo-item-wrapper'>
                    <h4 className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        {todo.title}
                    </h4>
                    <button type='button' onClick={(e) => onRemoveTodoClick(e, todo.id)}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    )
}