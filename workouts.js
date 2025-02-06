/*List of different workout routines*/
import { useState } from "react";
import NavBar from "./NavBar";
import WorkoutCard from "./components/WorkoutCard";

const Workouts = () => {
    const [search, setSearch] = useState("");

    const workouts = [
        { name: "Full Body Strength", description: "A complete body workout.", duration: 45 },
        { name: "Cardio Blast", description: "High-intensity cardio session.", duration: 30 },
        { name: "Yoga Flow", description: "Relaxing and stretching yoga session.", duration: 60 },
    ];

    const filteredWorkouts = workouts.filter((workout) =>
        workout.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <NavBar />
            <h2>Workout Routines</h2>

            <input
                type="text"
                placeholder="Search workouts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div>
                {filteredWorkouts.length > 0 ? (
                    filteredWorkouts.map((workout, index) => <WorkoutCard key={index} {...workout} />)
                ) : (
                    <p>No workouts found</p>
                )}
            </div>
        </div>
    );
};

export default Workouts;
