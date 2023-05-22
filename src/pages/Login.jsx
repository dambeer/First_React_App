import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import MyButton from '../component/UI/button/MyButton';
import MyInput from '../component/UI/input/MyInput';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');

    // при входе переадресация на страницу с постами
    navigate('/posts');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput
          type="text"
          placeholder="Введите имя"
        />
        <MyInput
          type="password"
          placeholder="Введите пароль"
        />
        <MyButton>Submit</MyButton>
      </form>
    </div>
  );
};

export default Login;
