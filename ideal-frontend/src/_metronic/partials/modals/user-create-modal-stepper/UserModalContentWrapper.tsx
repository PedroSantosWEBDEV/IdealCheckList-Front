import {FC, useState} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../helpers'
import {UserModalContent} from './UserModalContent'
import {getUserById} from './core/_requests'
import {ID} from '../../../helpers'
import {StepperComponent} from '../../../assets/ts/components'
import {UsersListLoading} from './loading/UsersListLoading'

type Props = {
  id: ID
  handleClose: () => void | undefined
}

const UserModalContentWrapper: FC<Props> = ({
  id,
  handleClose,
}) => {
  // debugger;
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(id)
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-USER-${itemIdForUpdate}`,
    () => {
      // return getTaskById(itemIdForUpdate)
      // debugger;
      return getUserById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    // console.log("AQUII")
    return (
      <UserModalContent
        handleClose={handleClose}
        user={{
          users: {
            id: 0,
            cost_hour: '0',
            avatar: '',
            types: [],
            shift_time: '',
            name: '',
            username: '',
            email: '',
            phone: '',
            job_role: '',
            password: '',
            in_company_since: '',
            birthday: '',
            instance_id: '',
            creator_id: '',
            administrator: 0,
            company: []
          },
          message: '',
          errors: false
        }}
        userId={undefined} isUserLoading={false}      />
    )
  }

  if (!isLoading && !error && user) {
    // console.log('update')
    // debugger;
    return (
      <UserModalContent
        handleClose={handleClose}
        userId={id}
        user={user} 
        isUserLoading={isLoading}      />
    )
  } else {
    return <UsersListLoading />
  }

  return null
}

export {UserModalContentWrapper}
