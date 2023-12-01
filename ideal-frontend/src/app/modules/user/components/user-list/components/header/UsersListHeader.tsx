import {UsersListSearchComponent} from './UsersListSearchComponent'
import {UserListPresentationComponent} from './UsersListPresentationComponent'

const UsersListHeader = () => {
  return (
    <div className='card-header bg-body align-items-center border-0 py-6'>
      <UserListPresentationComponent />
      <UsersListSearchComponent />
    </div>
  )
}

export {UsersListHeader}
