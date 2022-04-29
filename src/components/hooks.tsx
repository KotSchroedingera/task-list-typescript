import { ITask } from "./interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../store";


export const useTasks = () => {
  const tasks: ITask[] = useSelector((state: RootState) => state.tasks.tasks);
  return tasks;
}