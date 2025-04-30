import { Fragment } from 'react'
import {Toaster} from 'react-hot-toast'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Routeway from './Routes/Routes';
function App() {

  return (
    <Fragment>
      <Toaster position='top-right'></Toaster>
      <Routeway></Routeway>
    </Fragment>
  )
}

export default App
