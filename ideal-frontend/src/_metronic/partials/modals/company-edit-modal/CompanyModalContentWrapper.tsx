import {FC, useState} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../helpers'
import {CompanyModalContent} from './CompanyModalContent'
import {getCompanyById} from './core/_requests'
import {ID} from '../../../helpers'
import {CompanyListLoading} from './loading/CompanyListLoading'

type Props = {
  id: ID
  handleClose: () => void | undefined
}

const CompanyModalContentWrapper: FC<Props> = ({
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
      return getCompanyById(itemIdForUpdate)
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
      <CompanyModalContent
        handleClose={handleClose} isCompanyLoading={isLoading} type={{
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
      <CompanyModalContent
        handleClose={handleClose}
        type={type} isCompanyLoading={isLoading}/>
    )
  } else {
    return <CompanyListLoading />
  }

  return null
}

export {CompanyModalContentWrapper}
