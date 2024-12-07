import React, { useContext } from 'react';
import './FoodDisplay.css';
import { Storecontext } from '../../Context/Storecontext';
import FoodItem from '../Fooditem/FoodItem';

function FoodDisplay({ category }) {
    const { food_list } = useContext(Storecontext);

    // Check if food_list is available and is an array
    if (!food_list || !Array.isArray(food_list)) {
        return <div>Loading...</div>; // Ya koi aur placeholder
    }

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Cake Near You</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem 
                                key={index} 
                                id={item._id} 
                                name={item.name} 
                                description={item.description} 
                                image={item.image} 
                                price={item.price} 
                            />
                        );
                    }
                    return null; // Ensure you return something for items that don't match
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
