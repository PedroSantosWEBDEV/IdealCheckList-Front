import {FC, useState} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../helpers'
import {TeamModalContent} from './TeamModalContent'
import {ID} from '../../../helpers'
import {getTeamById} from './core/_requests'

type Props = {
  id: ID
  handleClose: () => void | undefined
}

const TeamModalContentWrapper: FC<Props> = ({id, handleClose}) => {
  // debugger;
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(id)
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: teams,
    error,
  } = useQuery(
    `${QUERIES.TEAMS_LIST}-TEAMS-${itemIdForUpdate}`,
    () => {
      // return getTaskById(itemIdForUpdate)
      return getTeamById(itemIdForUpdate)
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
    return (
      <TeamModalContent
        handleClose={handleClose}
        isTeamLoading={isLoading} team={{
          teams: {
            id: undefined,
            name: '',
            team: '',
            user: []
          },
          message: '',
          errors: false
        }}     
      />
    )
  }

  if (!isLoading && !error && teams) {
    // console.log(teams)
    return <TeamModalContent handleClose={handleClose} isTeamLoading={isLoading} team={teams} />
  }

  return null
}

export {TeamModalContentWrapper}
