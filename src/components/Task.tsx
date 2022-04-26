import React from 'react'

export interface ITask {
  id: number; 
  title: string;
  complete: boolean; 
}

export const Task: React.FC<ITask> = (props) => {
  const { id, title, complete } = props;
  
  return (
    <div>
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <p>Complete: {complete}</p>
    </div>
  )
}

