import React from 'react'

export interface ITask {
  id: number; 
  title: string;
  complete: boolean; 
}

export const Task: React.FC<ITask> = (props) => {
  const { title, complete } = props;
  
  return (
    <div>
      <p>Title: {title}</p>
      <p>Complete: {complete.toString()}</p>
    </div>
  )
}

