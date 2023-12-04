import {FC, useState} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../helpers'
import {SummaryModalContent} from './SummaryModalContent'
import {summaryById} from './core/_requests'
import {ID} from '../../../helpers'

type Props = {
  id: ID
  handleClose: () => void | undefined
}

const SummaryModalContentWrapper: FC<Props> = ({id, handleClose}) => {
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(id)
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
      isLoading,
      data: summary,
      error,
    } = useQuery(
      `${QUERIES.PROJECTS_LIST}-SUMMARY-${itemIdForUpdate}`,
      () => {
        // return getTaskById(itemIdForUpdate)
        return summaryById(itemIdForUpdate)
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
    return <SummaryModalContent handleClose={handleClose} isSummaryLoading={isLoading} summary={{id: undefined}} />
  }

  if (!isLoading && !error && summary) {
    return <SummaryModalContent handleClose={handleClose} isSummaryLoading={isLoading} summary={summary} />
  }

  return null
}

export {SummaryModalContentWrapper}