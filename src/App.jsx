import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Header/Navbar'
import Banner from './Header/Banner'
// import './Header/Navbar.css'
import RecipeSection from './Recipes/Recipe-section'
import SelectedFood from './Recipes/SelectedFood'
import Cooking from './Recipes/Cooking'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [count, setCount] = useState(0)
  const [selectedRecipe, setSelectedRecipe] = useState([]);


  const handleSelectedFood = (food) => {
    const alreadyExists = selectedRecipe.find(c => c.recipe_id == food.recipe_id);
    if (!alreadyExists) {
      toast.success("Food is added Succesfully!!");
      const manageFood = selectedRecipe.filter(m => m.recipe_id !== selectedRecipe.recipe_id);
      setSelectedRecipe([...selectedRecipe, food]); 
    }
    else {
      toast.warn("You already added that food item");
    }
  }
  const [cooking, setCooking] = useState([]);

  // const handleCooking = (selectedRecipe) => {
  //   const preExist = selectedRecipe.find(x => x.recipe_id == selectedRecipe.recipe_id);
  //   if(!preExist){
  //     console.log(selectedRecipe);
  //     setCooking([...cooking, selectedRecipe]);
  //     toast("Successfully added to div");
  //   }

  //   else{
  //     toast("already added to div");
  //   }

  const handleCooking = (selectedRecipe) => {
    const preExist = cooking.find(x => x.recipe_id === selectedRecipe.recipe_id);

    if (!preExist) {
        console.log(selectedRecipe);
        setCooking([...cooking, selectedRecipe]);
        toast("Successfully added to cooking list");
    } else {
       toast("already added to Cooking list");
    }
};

    console.log('mathanosto',cooking[0]); //it's an array
  



  // console.log("here's your data ,", bookmarks);
  // console.log()
  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <div className='container2 mx-auto flex items-start flex-col lg:flex-row'>
        <div className=''>
          <RecipeSection
            handleSelectedFood={handleSelectedFood}
          ></RecipeSection>
        </div>
        <div className='w-[100%] md:w-[45%] '>
          <div>
            <SelectedFood selectedRecipe={selectedRecipe} handleCooking={handleCooking}></SelectedFood>
          </div>
          <div className='border p-2'>
            <Cooking  handleCooking={handleCooking} cooking={cooking}>length from App.jsx</Cooking>
          </div>
        </div>
      </div>

      <ToastContainer></ToastContainer>



    </>
  )
}

export default App
