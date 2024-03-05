import React from 'react'
import Table from './Screens/Table'
import Addtodo from './Screens/Addtodo'


export default function App() {
  const todoitem = [
    {
      Title: "shopping",
      Desc: "Go to mall",
      Remark: "laptop budget-15K",
    },
    {
      Title: "Food",
      Desc: "Go to mall",
      Remark: "Burger",
    },
  ];


  return (
    <div>
       <Addtodo/>
      <Table todo={todoitem}/>
     
    </div>
  )
}
