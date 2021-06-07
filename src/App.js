import './App.css';
import Login from './components/Login';
import BuildingCard from './components/BuildingCard'
import { useEffect, useState } from 'react';

function App() {
  const [currentUser,setCurrentUser] = useState({})

  const renderBookings=()=>{
    if(currentUser.buildings.length>0){
      return(
        <div className = 'my-building'>
          <h1>My Buildings</h1>
            <div className= 'building-card-container'>
              { currentUser.buildings.map(b=><BuildingCard 
              myBuilding={true} 
              building={b}
              key ={b.id}
              />)}
            </div> 
        </div>
      )
    }else{
      return(
        <div className ='my-building'>
          <h1>My Buillings</h1>
              <h3>You don't have any bookings! Book now from following list!
              </h3>
        </div>
      ) 
    }
  }
  return (
    <div className="App">
      {!currentUser.username && <Login
      setCurrentUser={setCurrentUser}
      />}
      
      {currentUser.username &&
      <div className ='main-container'>
        <h1>Hi, {currentUser.name}!</h1>
        <div className = 'add-building-button-div'>
            <h1>
              Add Building
            </h1>
            <h1 id='plus'>
              +
            </h1>
          </div>
        <div>
          {renderBookings()}
        </div>
      </div>
       }
    </div>
  );
}

export default App;
