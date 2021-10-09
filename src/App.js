import { Route, BrowserRouter } from 'react-router-dom'

import Dashboard from './pages/dashboard'
import ClippedDrawer from './components/drawer'
import Login from './pages/login'
import Signup from './pages/signup'
import Forgot from './pages/ForgotPassword'
import Reset from './pages/ResetPassword'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/auth/login' exact component={Login} />
        <Route path='/auth/signup' component={Signup} />
        <Route path='/auth/reset-password/:token' component={Reset} />
        <Route path='/auth/forgot-password' component={Forgot} />
        <Route path='/' component={ClippedDrawer} exact />
        {/* <Route path='/dashboard' component={Dashboard} exact /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
