import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import MainLayout from './Components/Pages/Layout/MainLayout';
import FAQs from './Components/Pages/FAQs/FAQs';
import Listeners from './Components/Pages/Listeners/Listeners';
import Blog from './Components/Pages/Home/Blog/Blog';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Home' element={
          <privateRoute>
              <MainLayout>
                <Home/>
              </MainLayout>
          </privateRoute>
          }/>

           <Route path='/Listeners' element={
          <privateRoute>
              <MainLayout>
                <Listeners/>
              </MainLayout>
          </privateRoute>
         }/>

          <Route path='/Blog' element={
          <privateRoute>
              <MainLayout>
                <Blog/>
              </MainLayout>
          </privateRoute>
         }/>

           <Route path='/FAQs' element={
          <privateRoute>
              <MainLayout>
                <FAQs/>
              </MainLayout>
          </privateRoute>
         }/>
      </Routes>
    </>
  );
}

export default App;
