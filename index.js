import { useState } from "react";
import NavBar from "./NavBar";
import ExerciseTracker from "./components/ExerciseTracker";

export default function Home() {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div>
      <NavBar/>
      <h1>🏋️ Welcome to FitLife Tracker!</h1>
      <p>Your fitness journey starts here. Track workouts, calories, and meals.</p>
      
      <button 
        onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide Info" : "Show Info"}
      </button>

      {showInfo && (
        <section>
          <h2>📢 Why Choose FitLife?</h2>
          <p>Stay fit with our workouts and nutrition tips!</p>
        </section>
      )}

      <section>
        <h2>Start Tracking Your Workouts</h2>
        <ExerciseTracker />
      </section>

      <section>
        <h2>Quick Links:</h2>
        <ul>
          <li><a href="/workouts">Check Out Workout Routines</a></li>
          <li><a href="/Nutrition">Explore Healthy Nutrition Tips</a></li>
        </ul>
      </section>
    </div>
  );
}
