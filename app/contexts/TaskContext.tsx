"use client";
import {createContext, ReactNode, useState} from 'react';

type TaskProps = {
    id: number,
    title: string,
    deadline: string,
    // description: string,
}

export const TaskContext = createContext<TaskProps[]>([]);

type TaskProviderProps = {
    children: ReactNode;
};

export const TaskContextProvider = ({children}: TaskProviderProps) => {
    const [tasks , setTasks] = useState<TaskProps[]>(
        [
            {id: 1 , title: 'task1 ' , deadline: ' 2 days'},
            {id: 2 , title: 'task2 ' , deadline: ' 5 days'},
            {id: 3 , title: 'task3 ' , deadline: ' 1 days'},
        ]
    );

    return(
        <TaskContext.Provider value={tasks}>
            {children}
        </TaskContext.Provider>
    )
}
