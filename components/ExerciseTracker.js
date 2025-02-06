// Component for tracking completed workouts
import { useState } from "react";

export default function ExerciseTracker() {
    const [workouts, setWorkouts] = useState(0);
    const [exerciseType, setExerciseType] = useState("");
    const [duration, setDuration] = useState("");
    const [intensity, setIntensity] = useState("Medium");

    const handleSubmit = (e) => {
        {/*use of event handlers(form submission*/}
        e.preventDefault();
        if (!exerciseType.trim() || !duration) {
            alert("Please enter valid exercise details.");
            return;
        }
        setWorkouts(workouts + 1);
        alert(`You completed a ${exerciseType} workout for ${duration} minutes at ${intensity} intensity.`);
        setExerciseType("");
        setDuration("");
        setIntensity("Medium");
    };

    return (
        <div className="exercise-tracker">
            <h2>🏋️ Workouts Completed: {workouts}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Exercise Type:
                    <input
                        type="text"
                        placeholder="Exercise Type"
                        value={exerciseType}
                        onChange={(e) => setExerciseType(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Duration (minutes):
                    <input
                        type="number"
                        placeholder="Duration (minutes)"
                        value={duration}
                        onChange={(e) => setDuration(Math.max(1, Number(e.target.value)))}
                        required
                    />
                </label>
                <label>
                    Intensity:
                    <select value={intensity} onChange={(e) => setIntensity(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>
                <button type="submit">Log Workout</button>
            </form>
        </div>
    );
}


