import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';

const Header = () => {
  const {user,logout} = useContext(AuthContext);
  const handleLogOut =() =>{
   logout()
  .then(()=>{})
.catch(error =>console.log(error))
  }
    return (
      <div>
        <div className="navbar bg-primary text-primary-content">
          <a className="btn btn-ghost normal-case text-xl">AuthMaster</a>
          <Link className="btn btn-ghost normal-case text-xl" to="/">
            {" "}
            Home
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/login">
            {" "}
            Login
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/orders">
            {" "}
         Orders
          </Link>
          <Link className="btn btn-ghost normal-case text-xl" to="/register">
            {" "}
            Register
          </Link>
          {user ? (
            <span>{user.email} <button onClick={handleLogOut} className="btn btn-xs">sign out</button>
</span> 
          ) : (<Link to='/login'>Login</Link>
          )}
        </div>
      </div>
    );
};

export default Header;