import React, { useState } from 'react';
import Cooking from './Cooking';
import { toast } from 'react-toastify';
import './../Header/Header.css'

const SelectedFood = ({ selectedRecipe  , handleCooking}) => {
    const { recipe_image, calories, short_description, preparation_time } = selectedRecipe;
    const selectedRecipeForMe = [...selectedRecipe];
    // const [num ,setNum] =useState(1);
    let count = 1;
    const deleteRecipe = () =>{
        // toast("trying to delete");
        selectedRecipe.length = selectedRecipe.length -1;
    }

    
    return (
        <>
        <div className='border my-2 p-2 font rounded-2xl '>
            <h1 className='font-semibold text-center text-[24px] pt-2'>Want to Cook : {selectedRecipe.length}</h1>
            <br />
            <hr />
            <br />
            <div className='flex space-x-2 justify-between items-center px-7 text-gray-600 mb-2'>
                <h1>Name</h1>
                <h1>Calories</h1>
                <h1>Time</h1>
            </div>
            <ol  className='border mb-2 p-1 rounded-lg'>
                {
                    
                    selectedRecipe.map((selectedRecipe) => (
                        <li key={selectedRecipe.recipe_id}>
                            <div className='flex space-x-2 border mb-2 p-2 text-[14px] items-center rounded-xl shadow-md'>
                                <h1 className='font-bold'>{count++}.</h1>
                                <h1>{selectedRecipe.recipe_name}</h1>
                                <p> {selectedRecipe.preparation_time} minutes</p>
                                <p>{selectedRecipe.calories} calories</p>
                                
                                <button onClick={deleteRecipe}><button  onClick={()=> handleCooking(selectedRecipe)} className='btn btn-success text-white'>Prepare</button></button>
                                {/* <button onClick={deleteRecipe}> delete</button> */}
                                
                            </div>
                        </li>
                    ))
                }
            </ol>

        </div>
        <div>
            {/* <Cooking selectedRecipe={selectedRecipe}></Cooking> */}
        </div>
        </>
    );
};

export default SelectedFood;