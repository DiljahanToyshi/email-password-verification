import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';

const Home = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
    return (
        <div>
           <h2>Home {user && <span>{user.displayName}</span>}</h2> 
        </div>
    );
};

export default Home;