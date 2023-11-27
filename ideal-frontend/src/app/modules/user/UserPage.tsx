import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {NewUser} from './components/NewUser'

const UserPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='new-user'
        element={
          <>
            <PageTitle >Novo Usuario</PageTitle>
            <NewUser show={true} userId={undefined} />
          </>
        }
      />
      <Route index element={<Navigate to='/config/user/new-user' />} />
    </Route>
  </Routes>
)

export default UserPage
