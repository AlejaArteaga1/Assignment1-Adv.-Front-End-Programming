import { useState } from "react";
import NavBar from "./NavBar";
import MealCard from "./components/MealCard";
import CalorieCounter from "./components/CalorieCounter";

const Nutrition = () => {
    const [meals, setMeals] = useState([
        { name: "Grilled Chicken Salad", calories: 350, protein: 30, description: "A high-protein, low-carb meal perfect for lunch." },
        { name: "Oatmeal with Fruits", calories: 250, protein: 10, description: "Great for breakfast with energy-boosting carbs and fiber." },
        { name: "Salmon with Steamed Veggies", calories: 400, protein: 35, description: "A healthy dinner packed with protein and omega-3 fatty acids." },
    ]);

    const [newMeal, setNewMeal] = useState({ name: "", calories: "", protein: "", description: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMeal({
            ...newMeal,
            [name]: name === "calories" || name === "protein" ? Number(value) : value
        });
    };


    const addMeal = (e) => {
        e.preventDefault();
        if (!newMeal.name || !newMeal.description || !newMeal.calories || !newMeal.protein) return;

        setMeals([...meals, {
            ...newMeal,
            calories: Math.max(0, Number(newMeal.calories)),
            protein: Math.max(0, Number(newMeal.protein))
        }]);

        console.log("Meals updated:", meals); // Depuración

        setNewMeal({ name: "", description: "", calories: "", protein: "" });
    };

    return (
        <>
            <NavBar />
            <div className="nutrition-container">
                <h1>🥗 Nutrition Tips</h1>
                <p>Eating healthy is a crucial part of your fitness journey. Here's some meal inspiration:</p>

                <form onSubmit={addMeal}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Meal Name"
                        value={newMeal.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={newMeal.description}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="calories"
                        placeholder="Calories"
                        value={newMeal.calories}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="protein"
                        placeholder="Protein"
                        value={newMeal.protein}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Add Meal</button>
                </form>

                <div className="meal-list">
                    {meals.map((meal, index) => <MealCard key={index} {...meal} />)}
                </div>

                <CalorieCounter />
            </div>
        </>
    );
};

export default Nutrition;



