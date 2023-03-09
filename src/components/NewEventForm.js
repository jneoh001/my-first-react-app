import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm( {addEvent} ) {
  const[title, setTitle] = useState(' ')
  const[date, setDate] = useState(' ')
  const [location, setLocation] = useState('Singapore')

  // const handleChange = (e) => {
  //   setTitle(e.target.value)
  // }

  const resetForm = () => {
    setTitle(' ');
    setDate(' ')
    setLocation('Singapore')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random()*1000)  // we want to give the submit a random Id, use Math.random for practice purposes only
    }
    console.log(event)
    addEvent(event)
    resetForm()
  }
  
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
          <span>Event Title:</span>
          <input 
          type="text" 
          onChange = {(e) => setTitle(e.target.value)}
          value = {title}
          /> 
        </label>

        <label>
          <span>Event Date:</span>
          <input 
          type="date" 
          onChange = { (e) => setDate(e.target.value)}
          value = {date}
          />
        </label>
        <label>
          <span>Event Location:</span>
          <select onChange={ (e) => setLocation(e.target.value)} >
            <option value = "Singapore">Singapore</option>
            <option value = "Malaysia">Malayisa</option>
            <option value = "London">London</option>
          </select>
        </label>
        <button>Submit</button>
        <p> title {title} date - {date}</p>

        <p onClick={resetForm}>Reset the form </p>
        
    </form>
  )
}
