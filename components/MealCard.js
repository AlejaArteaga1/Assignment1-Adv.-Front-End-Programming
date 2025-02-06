/*Displays meal information*/
export default function MealCard({ name, calories, protein, description }) {
    return (
        <div className="meal-card">
            <h3>🥗 {name}</h3>
            <p><strong>Calories:</strong> {calories} kcal</p>
            <p><strong>Protein:</strong> {protein}g</p>
            <p className="meal-description">{description.length > 100 ? description.slice(0, 100) + "..." : description}</p>
        </div>
    );
}

/*By using the props, people will add any meal that they desire to keep track of their food*/
/*It is a component that is reusable many times as the user want*/