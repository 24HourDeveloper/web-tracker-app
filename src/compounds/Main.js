import React from 'react'

export const Fitness = () => {


  const levels = [
    {
      id: 1, pressure: 123, cholesterol: 'High',
      sex: 'Male', race: 'Black',
    },
    {
      id: 2, pressure: 147, cholesterol: 'Low',
      sex: 'Female', race: 'White',
    }
  ]

  return (
    <>
    <header>
      <h1>Fitness Levels</h1>
    </header>
    <table>
      <thead>
        <tr>
        <th></th>
        </tr>
      </thead>
    </table>
    </>
  )
}