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
    data: company,
    error,
  } = useQuery(
    `${QUERIES.COMPANY_LIST}-COMPANY-${itemIdForUpdate}`,
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
        handleClose={handleClose} isCompanyLoading={isLoading} company={{
          companys: {
            id: undefined,
            total_projects: 0,
          },
          message: '',
          errors: false
        }}      />
    )
  }

  if (!isLoading && !error && company) {
    // console.log('update')
    return (
      <CompanyModalContent
        handleClose={handleClose}
        company={company} isCompanyLoading={isLoading}/>
    )
  } else {
    return <CompanyListLoading />
  }

  return null
}

export {CompanyModalContentWrapper}
