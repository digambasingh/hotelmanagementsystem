import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import appStore from './utils/appStore.js'
import { Provider } from 'react-redux'
import { RoomProvider } from "./context";
// import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoomProvider>
    {/* <Provider > */}
    <App />
    {/* <ToastContainer position="top-right"  autoClose={2000}/> */}
    {/* </Provider> */}
  </RoomProvider>
  </StrictMode>
  
)
