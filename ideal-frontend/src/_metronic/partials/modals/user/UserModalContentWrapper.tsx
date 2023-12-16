import {FC, useState} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../helpers'
import {UserModalContent} from './UserModalContent'
import {userById} from './core/_requests'
import {ID} from '../../../helpers'

type Props = {
  id: ID
  handleClose: () => void | undefined
}

const UserModalContentWrapper: FC<Props> = ({id, handleClose}) => {
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
        return userById(itemIdForUpdate)
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
    return <UserModalContent handleClose={handleClose} isTaskLoading={isLoading} user={{id: undefined}} />
  }

  if (!isLoading && !error && user) {
    return <UserModalContent handleClose={handleClose} isTaskLoading={isLoading} user={user} />
  }

  return null
}

export {UserModalContentWrapper}