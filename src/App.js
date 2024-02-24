import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BlogState from './context/BlogState';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import AddScreen from './screen/AddScreen';
import BlogScreen from './screen/BlogScreen';

function App() {
  return (
    <BlogState>
      <BrowserRouter>
        <Header />
        <Container>
          <main className='main-style'>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/add' element={<AddScreen />} />
              <Route path='/view' element={<BlogScreen />} />
            </Routes>
          </main>
        </Container>
      </BrowserRouter>
    </BlogState>
  );
}

export default App;
