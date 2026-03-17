import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';

function App() {

  return (
    <>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
    </>
  )
}

export default App
