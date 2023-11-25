import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {NewUser} from './components/NewUser'

const wizardsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Novo Usuario',
    path: '/config/user/new-user',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const UserPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='new-user'
        element={
          <>
            <PageTitle breadcrumbs={wizardsBreadCrumbs}>Novo Usuario</PageTitle>
            <NewUser />
          </>
        }
      />
      <Route index element={<Navigate to='/config/user/new-user' />} />
    </Route>
  </Routes>
)

export default UserPage
