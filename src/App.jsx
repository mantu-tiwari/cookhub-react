import React from 'react'
import Navbar from './pages/Navbar'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeCard from './components/RecipeCard'
import RecipePage from './pages/RecipePage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex gap-8 p-4'>
        <AddRecipeForm/>
        <RecipePage/>
      </div>
    </div>
  )
}

export default App
