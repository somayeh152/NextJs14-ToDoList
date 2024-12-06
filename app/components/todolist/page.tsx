"use client";
import { useContext, useState} from "react";
import { TaskContext } from "@/app/contexts/TaskContext";

const TodolistPage = () => {
    const [inputText, setInputText] = useState('');
    const todos = useContext(TaskContext);

    return (
        <div className="flex flex-col items-center gap-8 p-5 bg-slate-100">
            <div>Todo List - NextJs14</div>
            <div className="flex gap-2">
                <input
                    className="text-xl rounded-md shodow-md p-2"
                    type='text'
                    placeholder='Enter Task'
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />
                <button className="text-xl rounded-md shodow-md bg-blue-600 text-white px-3 py-1">Add</button>
                <button className="text-xl rounded-md shodow-md bg-slate-400 text-white px-3 py-1">Clear</button>
            </div>
            <div className="flex flex-col gap-2 w-5/6">
                {Object.entries(todos).map(([key, value]) => (
                    <div key={key} className="flex flex-row gap-2">
                        <div className="flex flex-row gap-2"><input type='checkbox'/><div>{value.title}</div></div>
                        <div className="flex gap-2">
                            <button className="text-xl rounded-md shodow-md bg-blue-600 text-white px-3 py-1">edit</button>
                            <button className="text-xl rounded-md shodow-md bg-slate-400 text-white px-3 py-1">delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodolistPage;