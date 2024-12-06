import TodolistPage from "@/app/components/todolist/page";
import { TaskContextProvider } from "@/app/contexts/TaskContext";

export default function Home() {
  return (
    <div className="">
        <TaskContextProvider>
            <TodolistPage />
        </TaskContextProvider>
    </div>
  );
}
