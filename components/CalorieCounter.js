/*Tracks daily calorie intake*/
import { useState } from "react";

export default function CalorieCounter() {
    const [calories, setCalories] = useState(0);

    const handleAddCalories = () => setCalories(calories + 200);
    const handleRemoveCalories = () => setCalories(calories - 100);

    return (
        <div className="calorie-counter">
            <h2>🔥 Calories Consumed: {calories}</h2>
            {/*use of event handlers*/}
            <button onClick={handleAddCalories} aria-label="Add 200 Calories">Add 200 Calories</button>
            <button onClick={handleRemoveCalories} aria-label="Remove 100 Calories">Remove 100 Calories</button>
        </div>
    );
}

