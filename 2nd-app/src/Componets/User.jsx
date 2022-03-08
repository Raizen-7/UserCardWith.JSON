import { React,  useState } from 'react';
import users from '../users.json';



const User = () => {
    
    const [ user, setUser ] = useState( users[getRandom()]);

   

    const changeUser = () => { 
        setUser(users[getRandom()])
    } 


    return (
        <div className='shadow'>
          <h1> {user.name.title} {user.name.first} {user.name.last} </h1>
          <div className='conteiner'>
            <div>
                <img src = { user.picture.large } alt ="" />
            </div>
            </div>    
            <div className='ul'>
              <ul>
                <i className="fa-solid fa-envelopes"> </i> 
                <li> <i className="fa-solid fa-envelope"></i> {user.email} </li>
                <li> <i className="fa-solid fa-phone"></i>  {user.phone}</li>
                <li> 
                    <i className="fa-solid fa-location-pin"></i> 
                    {user.location.country}. 
                    {user.location.state}. 
                    {user.location.city} 
                </li>
              </ul>
            </div>
            <div>
                <button onClick={changeUser}> <i className="fa-solid fa-shuffle"> </i></button> 
            </div>
        
          <i className="fa-solid fa-quote-left"></i>
        </div>
    );
};
const getRandom = () => Math.floor(Math.random() * users.length);
export default User;