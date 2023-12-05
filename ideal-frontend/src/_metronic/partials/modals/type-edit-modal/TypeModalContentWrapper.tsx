import {FC, useState} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../helpers'
import {TypeModalContent} from './TypeModalContent'
import {getTypeById} from './core/_requests'
import {ID} from '../../../helpers'
import {TypeListLoading} from './loading/TypeListLoading'

type Props = {
  id: ID
  handleClose: () => void | undefined
}

const TypeModalContentWrapper: FC<Props> = ({
  id,
  handleClose,
}) => {
  // debugger;
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(id)
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)

  const {
    isLoading,
    refetch,
    data: type,
    error,
  } = useQuery(
    `${QUERIES.TYPE_LIST}-TYPE-${itemIdForUpdate}`,
    () => {
      // return getTaskById(itemIdForUpdate)
      // debugger;
      return getTypeById(itemIdForUpdate)
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
      <TypeModalContent
        handleClose={handleClose} isTypeLoading={isLoading} type={{
          types: {
            id: undefined,
          },
          message: '',
          errors: false
        }}      />
    )
  }

  if (!isLoading && !error && type) {
    // console.log('update')
    return (
      <TypeModalContent
        handleClose={handleClose}
        type={type} isTypeLoading={isLoading}/>
    )
  } else {
    return <TypeListLoading />
  }

  return null
}

export {TypeModalContentWrapper}
