"use client";

import { useState } from "react";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");

  const goals: Record<string, string[]> = {
    PHYSICAL: ["Gym", "Running", "Yoga"],
    MENTAL: ["Meditation", "Reading", "Option3"],
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedGoal(null);
    setCompletedDays([]);
    setNote("");
    setStatus("");
  };

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    setCompletedDays([]);
    setNote("");
    setStatus("");
  };

  const toggleDay = (day: number) => {
    if (completedDays.includes(day)) {
      setCompletedDays(completedDays.filter((d) => d !== day));
    } else {
      setCompletedDays([...completedDays, day]);
    }
  };

  return (
    <div style={{ minHeight: "100vh", padding: "40px", textAlign: "center" }}>
      <h1>SET YOUR GOAL AND MAKE IT WHOLE COMPLETE</h1>

      {!selectedCategory && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "400px",
            marginTop: "500px",
          }}
        >
          <div
            onClick={() => handleCategorySelect("PHYSICAL")}
            style={{
              width: "220px",
              height: "220px",
              background: "#25b94a",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            PHYSICAL
          </div>

          <div
            onClick={() => handleCategorySelect("MENTAL")}
            style={{
              width: "220px",
              height: "220px",
              background: "#a52d08",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            MENTAL
          </div>
        </div>
      )}

      {selectedCategory && !selectedGoal && (
        <div style={{ marginTop: "40px" }}>
          <h2>{selectedCategory} Goals</h2>

          {goals[selectedCategory].map((goal) => (
            <div
              key={goal}
              onClick={() => handleGoalSelect(goal)}
              style={{
                padding: "15px",
                margin: "10px auto",
                width: "240px",
                background: "#e43fb8",
                color: "white",
                cursor: "pointer",
                borderRadius: "6px",
              }}
            >
              {goal}
            </div>
          ))}

          <button
            style={{ marginTop: "20px" }}
            onClick={() => setSelectedCategory(null)}
          >
            Back
          </button>
        </div>
      )}

      {selectedGoal && (
        <div style={{ marginTop: "40px" }}>
          <h2>{selectedGoal} - 7 Day Tracker</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div
                key={day}
                onClick={() => toggleDay(day)}
                style={{
                  width: "100px",
                  height: "100px",
                  background: completedDays.includes(day) ? "green" : "#ddd",
                  color: completedDays.includes(day) ? "white" : "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  borderRadius: "6px",
                }}
              >
                {day}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "20px" }}>
            <textarea
              placeholder="Write your note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              style={{ width: "300px", height: "100px", padding: "10px" }}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <button
              style={{
                padding: "10px 20px",
                marginRight: "10px",
                background: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setStatus("Completed")}
            >
              Complete
            </button>

            <button
              style={{
                padding: "10px 20px",
                background: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setStatus("Not Completed")}
            >
              Not Complete
            </button>
          </div>

          {status && (
            <p style={{ marginTop: "15px", fontWeight: "bold" }}>
              Status: {status}
            </p>
          )}

          <button
            style={{ marginTop: "20px" }}
            onClick={() => setSelectedGoal(null)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
