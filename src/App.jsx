// import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import './App.css'

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <ShowCreators />
    },
    {
      path: '/new',
      element: <AddCreator />
    },
    {
      path: '/edit/:id',
      element: <EditCreator />
    },
    {
      path: '/:id',
      element: <ViewCreator />
    },
  ])

  return element
}

export default App
