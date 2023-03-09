import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

// if a function starts with the use Keywrod, it is a react hook.

function App() {
  const [showModal, setShowModals] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "marios birthday", id: 1},
    {title: "bowsers live stream", id: 2},
    {title: "race on moo moo farm", id: 3},
  ])
  
  const handleClick = (id) => {
    setEvents( (prevEvents) => {
      return prevEvents.filter( (event)=> {
        return id !== event.id
      })
    } ) 
    console.log(id)
  }

  const handleClose = () => {
    setShowModals(false)
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
        
      <div>
        <button onClick = {()=> setShowModals(true)}>Add New Event</button>
      </div>

      {showModal && <Modal handleClose = {handleClose}>
        <h2>10% Discount Code</h2>
        <p>Use the code NINJA10 at the checkout</p>
      </Modal>}



    </div>
  );
}

export default App;
