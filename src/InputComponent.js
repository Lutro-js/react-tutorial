import React,{ useState } from "react"
import styles from "./InputComponent.css"

export default function InputComponent(props) {

    const [title, setTitle] = useState('')

    //テキストのonChange用の処理
    const changeTitle = (e) => {
        setTitle(e.target.value)    
    }

    //保存ボタンのonClick用のメソッド
    const save = (e) => {
        e.preventDefault()
        props.addTodoItem(title)
        setTitle('')
    }
    return (
        <form>
        <ul className="title">
        <h1>ToDoリスト</h1>
        </ul>

            <ul className="input">
            <h2>InputComponent</h2>
            <input type="text" placeholder="タイトル" value={title} onChange={changeTitle}/>
            <button onClick={save}>保存</button>
            </ul>
        </form>
    )
}