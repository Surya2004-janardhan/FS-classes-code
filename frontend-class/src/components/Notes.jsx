import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchnotes = async () => {
      const response = await axios.get("http://localhost:3000/notes");
      console.log(response);
      if (response && response.data) {
        setNotes(response.data);
      } else {
        console.log("Error fetching notes", response);
      }
    };
    fetchnotes();
  }, []);

  return (
    <div>
      <h4>All Notes:</h4>

      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <div key={note._id}>
            <h5>{note.title}</h5>
            <p>{note.body}</p>
          </div>
        ))
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
}
