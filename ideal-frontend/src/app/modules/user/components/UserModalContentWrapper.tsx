import {FC, useState} from 'react'
import {useQuery} from 'react-query'
import {isNotEmpty, QUERIES} from '../../../../_metronic/helpers'
import {UserModalContent} from './UserModalContent'
import {getUserById} from './core/_requests'
import {ID} from '../../../../_metronic/helpers'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import {UsersListLoading} from './loading/UsersListLoading'
type Props = {
  id: ID
  loadStepper: () => void
  stepper: React.MutableRefObject<StepperComponent | null>
  stepperRef: React.MutableRefObject<HTMLDivElement | null>
  setIsLoading: React.SetStateAction<any>
}
const UserModalContentWrapper: FC<Props> = ({
  id,
  stepper,
  stepperRef,
  setIsLoading,
}) => {
  // debugger;
  const [itemIdForUpdate, setItemIdForUpdate] = useState<ID>(id)
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  setIsLoading(true);
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
        user={{
          users: {
            id: 0,
            cost_hour: '0',
            avatar: '',
            workdays: [],
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
            administrator: 0
          },
          message: '',
          errors: false
        }}
        userId={undefined}
        stepper={stepper}
        stepperRef={stepperRef}
      />
    )
  }
  if (!isLoading && !error && user) {
    // console.log('update')
    // debugger;
    setIsLoading(isLoading)
    return (
      <UserModalContent
        userId={id}
        user={user}
        stepper={stepper}
        stepperRef={stepperRef}
      />
    )
  } else {
    return <UsersListLoading />
  }
  return null
}
export {UserModalContentWrapper}