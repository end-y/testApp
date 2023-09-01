import './App.css';
import Main from './Screens/Main';
import Head from './Screens/Head';
import { Route, Routes } from 'react-router-dom';
import Detail from './Screens/Detail';

function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/' element={<Detail edit={false} newPost={false} />} />
        <Route path='/detail/:detailId' element={<Detail edit={false} newPost={false} />} />
        <Route path='/detail/:detailId/edit' element={<Detail edit={true} newPost={false} />} />
        <Route path='/detail/new' element={<Detail edit={false} newPost={true} />} />
      </Routes>

    </>

  );
}

export default App;
