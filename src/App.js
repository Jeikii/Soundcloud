import { ToastContainer, toast } from 'react-toastify'
import { Home, Login, Discover } from './containers/public'
import 'react-toastify/dist/ReactToastify.css'
// import appReducer from './store/reducer/appReducer'
import { Routes, Route } from 'react-router-dom'
import path from './utils/path'

function App() {
  return (
    <>
      <div className=''>
        <Routes>
          <Route path={path.DISCOVER} element={<Discover />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {/* Same as */}
      <ToastContainer />
    </>
  )
}

export default App
