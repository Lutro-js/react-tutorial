import styles from "./ListComponent.css"

export default function ListComponent(props){
    return (
        <div>
            <h1>ListComponent</h1>
            <ul>
                {props.todoItems.map(todoItem =>
                    <li key={todoItem.id}>
                        <span>{todoItem.title}</span>
                        <span><input type="checkbox" checked={todoItem.is_done}/></span>
                        <span><button>削除</button></span>
                    </li>
                )}
            </ul>
        </div>

    )
}