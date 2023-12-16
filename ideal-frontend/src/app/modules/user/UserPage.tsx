import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import { UsersListWrapper } from './components/user-list/UserList'


const UserPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='/'
        element={
          <>
            {/* <NewUser userId={undefined} /> */}
            <UsersListWrapper/>
          </>
        }
      />
    </Route>
  </Routes>
)

export default UserPage
