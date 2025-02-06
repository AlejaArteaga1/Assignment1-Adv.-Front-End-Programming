// Component for displaying workout routines
const WorkoutCard = ({ name, description, duration }) => {
    return (
        <div className="workout-card">
            <h3>{name}</h3>
            <p>{description.length > 100 ? description.slice(0, 100) + "..." : description}</p>
            <p><strong>Duration:</strong> {duration} minutes</p>
        </div>
    );
};

export default WorkoutCard;

