import {useState} from 'react'
import {useIntl} from 'react-intl'
import {ListViewProvider} from '../core/ListViewProvider'
import {QueryRequestProvider} from '../core/QueryRequestProvider'
import {QueryResponseProvider, useQueryResponseData, useQueryResponse} from '../core/QueryResponseProvider'
import {UsersListHeader} from './components/header/UsersListHeader'
import {UsersTable} from './table/UsersTable'
import {UsersCard} from './card/UsersCard'
import {KTCard} from '../../../../../_metronic/helpers'
import {PageTitle, PageToolbar} from '../../../../../_metronic/layout/core'
import {UsersPlaceholder} from './components/placeholder/UsersPlaceholder'
import { UserModal } from '../../../../../_metronic/partials/modals/user-create-modal-stepper/UserModal'

const UsersList = () => {
  const intl = useIntl()
  const users = useQueryResponseData()
  const {isLoading} = useQueryResponse()
  const [showModalStepper, setShowModalStepper] = useState<boolean>(false)

  const buttons = [
    {
      text: intl.formatMessage({id: 'TOOLBAR.NEW_USER'}),
      onClick: () => setShowModalStepper(true),
      class: 'btn btn-sm fw-bold btn-primary'
    }
  ]
  
  return (
    <>
      {
        !isLoading && users.length === 0
        ?
          <UsersPlaceholder setShowCreateModal={setShowModalStepper} />
        :
        <>
          <PageTitle>{intl.formatMessage({id: 'MENU.USERS'})}</PageTitle>
          <PageToolbar buttons={buttons} />
          <KTCard className='bg-transparent'>
            <UsersListHeader />
            <div className="tab-content">
                <UsersCard />
                <UsersTable />
            </div>
          </KTCard>
        </>
      }
      <UserModal userId={undefined} show={showModalStepper} handleClose={() => setShowModalStepper(false)} />
    </>
  )
}

const UsersListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <UsersList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {UsersListWrapper}
