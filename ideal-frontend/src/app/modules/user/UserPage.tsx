import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import { UsersListWrapper } from './components/user-list/UserList'


const UserPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='new-user'
        element={
          <>
            <PageTitle>Novo Usuario</PageTitle>
            {/* <NewUser userId={undefined} /> */}
            <UsersListWrapper/>
          </>
        }
      />
      <Route index element={<Navigate to='/config/user/new-user' />} />
    </Route>
  </Routes>
)

export default UserPage
