import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import UserScreen from './screen/UserScreen';
import UserState from './context/UserState';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <UserState>
      <Header />
      <Container>
        <main className='main-style'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/add' element={<UserScreen />} />
            <Route path='/edit/:userId' element={<UserScreen />} />
          </Routes>
        </main>
      </Container>
      <ToastContainer />
    </UserState>
  );
}

export default App;
