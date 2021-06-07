import { Switch, Route } from 'react-router-dom'

import Users from '../modules/Users'
import UserDetails from '../modules/UserDetails'

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={Users}/>
      <Route exact={true} path='/user/:userId' component={UserDetails}/>
    </Switch>
  )
}

export default Routes
