import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Logout</MyButton>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
