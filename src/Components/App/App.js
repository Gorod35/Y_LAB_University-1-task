import './App.css';
import Login from '../Login/Login.jsx';
import mainApi from '../../vendor/utils/MainApi.js';

function App() {

  const handleLogin = (values) => {
    console.log(values);
    mainApi.login(values);
  }

  
  return (
    <div className='app'>
      <Login onLogin={handleLogin}></Login>
    </div>
  );
}

export default App;
