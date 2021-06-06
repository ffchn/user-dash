import { Switch, Route } from 'react-router-dom'

import UserList from '../modules/UserList'
import UserDetails from '../modules/UserDetails'

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={UserList}/>
      <Route exact={true} path='/user/:userId' component={UserDetails}/>
    </Switch>
  )
}

export default Routes
