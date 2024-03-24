import React from 'react';
import './../Header/Header.css'

const Cooking = ({ cooking }) => {
    // Access the 'cooking' array passed as prop
    console.log(cooking);
    let count = 1;

    return (
        <div className=' font border'>
            <div className='text-[24px] font-semibold text-center '>Currently Cooking : {cooking.length}</div>
            <br /><hr /><br />
            <div className='flex space-x-2 justify-between items-center px-7 text-gray-600 mb-2'>
                <h1>Name</h1>
                <h1>Calories</h1>
                <h1>Time</h1>
            </div>
            {cooking.map((cookingMan, index) => (
                <div key={index}>
                    <div className='flex space-x-2 p-2 border items-center shadow-xl rounded-lg mb-2 text-[14px]'>
                        <h1 className='font-bold'>{count++}.</h1>
                        <h2>{cookingMan.recipe_name}</h2>
                        <p>Calories: {cookingMan.calories}</p>
                        <p>Preparation Time: {cookingMan.preparation_time}</p>
                    </div>
                </div>
            ))}

             <div className='flex justify-end space-x-4 items-center px-2 font-semibold text-[14px] lg:text-[16px]'>
                <h1>Total Calories  = <br />{cooking.reduce((x,y)=> x+y.calories,0)} Calories</h1>
                <h1>Total Time =<br /> {cooking.reduce((p,c)=>p+c.preparation_time,0)} Minutes</h1>
            </div>
        </div>
    );
};

export default Cooking;
