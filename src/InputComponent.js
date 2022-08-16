import { useState } from "react"
import styles from "./InputComponent.css"

export default function InputComponent() {

    const [title, setTitle] = useState('')

    //テキストのonChange用の処理
    const changeTitle = (e) => {
        setTitle(e.target.value)    
    }

    //保存ボタンのonClick用のメソッド
    const save = (e) => {
        e.preventDefault()
        console.log(title)
    }
    return (
        <form>
            <h1>InputComponent</h1>
            <input type="text" placeholder="タイトル" value={title} onChange={changeTitle}/>
            <button onClick={save}>保存</button>
        </form>
    )
}