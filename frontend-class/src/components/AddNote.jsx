import React from "react";
import { useState } from "react";
import axios from "axios";

export default function AddNote() {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });
  const handleChange = (event) => {
    setNote((prevnote) => ({
      ...prevnote,
      [event.target.name]: event.target.value,
    }));
    console.log(note); // update state with typed value
  };
  const sendNoteToServer = async () => {
    console.log(note);
    const response = await axios.post("http://localhost:3000/add-note", note);
    if (response && response.data) {
      console.log("Note added successfully", response.data);
      setNote({
        title: "",
        body: "",
      }); // Clear the input fields after successful submission
    }
  };
  return (
    <div>
      <h4>Add Note Here: </h4>

      <label htmlFor="">Title:</label>

      <input type="text" name="title" value = {note.title} onChange={handleChange} />

      <label htmlFor="">Note Body:</label>
      <input type="text" name="body" value = {note.body} onChange={handleChange} />

      <button onClick={sendNoteToServer}>ADD NOTE</button>
    </div>
  );
}
