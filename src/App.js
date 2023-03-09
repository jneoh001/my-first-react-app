import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from "./components/NewEventForm"

// if a function starts with the use Keywrod, it is a react hook.

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents( (prevEvents)=> {
      return [...prevEvents, event]  
    })
    setShowModal(false);
  }
  
  const handleClick = (id) => {
    setEvents( (prevEvents) => {
      return prevEvents.filter( (event)=> {
        return id !== event.id
      })
    } ) 
    console.log(id)
  }

  
  const subtitle = "All the latest events in Marioland"

  return (
    <div className ="App">
      <Title title="Events in Your Area" subtitle = {subtitle} />


      {showEvents &&
        (<div>
          <button onClick={() => setShowEvents(false) }>Hide events</button>
        </div>
      )}

      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}> Show Events </button>
      </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick} />}
        
      

      {showModal && <Modal>
        <NewEventForm addEvent={addEvent} />
      </Modal>}
      
      <div>
        <button onClick = {()=> setShowModal(true)}>Add New Event</button>
      </div>

    </div>
  );
}

export default App;
