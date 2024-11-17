import React, { useState, useEffect } from "react";

function TimeApp() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

 
  const fetchTime = async () => {
    try {
      const response = await fetch("https://timeapi.io/api/time/current/zone?timeZone=Asia%2FKolkata");
      const data = await response.json();
      setDate(data.date);
      setTime(data.time); 
    } catch (error) {
      console.error("Error fetching time:", error);
    }
  };

  useEffect(() => {
    fetchTime(); 
    const interval = setInterval(fetchTime, 1000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="dateTime">
      <p>{date ? date : "Loading..."}     {time ? time : "Loading..."}</p>
    </div>
  );
};

export default TimeApp;
