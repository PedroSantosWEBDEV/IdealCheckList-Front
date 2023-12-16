/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
// import {useIntl} from 'react-intl'
import {UsersSymbolGroup} from '../../widgets/userSelection/UsersSymbolGroup'

interface IconUserModel {
  name: string
  avatar?: string
  color?: string
  initials?: string
}

type Props = {
  title: string
  subtitle?: string
  status: string
  budgetedHours?: number
  recordedHours?: number
  profitMargin?: number
  deadline?: string
  users: Array<IconUserModel>
}

const Card9: FC<Props> = ({
  title,
  subtitle,
  budgetedHours,
  recordedHours,
  profitMargin,
  status,
  deadline,
  users,
}) => {
  // const intl = useIntl()

  // const openEditModal = () => {
  //   // setItemIdForUpdate(id)
  // }

  // const deleteItem = useMutation(() => deleteUser(id), {
  //   // 💡 response of the mutation is passed to onSuccess
  //   onSuccess: () => {
  //     // ✅ update detail view directly
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //   },
  // })

  return (
    <Link className='card border border-2 border-gray-300 border-hover' to='/projects/overview'>
      <div className='card-body'>
        <div className='card-header border-0'>
          <div className='card-title m-0'>
            <div className='fs-3 fw-bolder text-dark'>{title}</div>
          </div>
          <div className='card-toolbar'>
            <span className='badge badge-light-primary fw-bolder me-auto px-4 py-3'>{status}</span>
          </div>
        </div>
        <p className='text-gray-400 fw-bold fs-5 mt-1 mb-7'>{subtitle}</p>
        <div className='d-flex mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px col-6 py-3 px-4 me-7 mb-3'>
            <div className='fs-6 text-gray-800 fw-bolder'>Horas orçadas:</div>
            <div className='fw-bold text-gray-400'>{budgetedHours && budgetedHours + 'h'}</div>
          </div>
          <div className='border border-gray-300 border-dashed rounded min-w-125px col-6 py-3 px-4 mb-3'>
            <div className='fs-6 text-gray-800 fw-bolder'>Horas lançadas:</div>
            <div className='fw-bold text-gray-400'>{recordedHours && recordedHours + 'h'}</div>
          </div>
        </div>
        <div className='d-flex mb-5'>
          <div className='border border-gray-300 border-dashed rounded min-w-125px col-6 py-3 px-4 me-7 mb-3'>
            <div className='fs-6 text-gray-800 fw-bolder'>Margem lucro:</div>
            <div className='fw-bold text-gray-400'>{recordedHours && recordedHours + '%'}</div>
          </div>
          <div className='border border-gray-300 border-dashed rounded min-w-125px col-6 py-3 px-4 mb-3'>
            <div className='fs-6 text-gray-800 fw-bolder'>Prazo:</div>
            <div className='fw-bold text-gray-400'>{deadline && deadline}</div>
          </div>
        </div>
        <div
          className='h-4px w-100 bg-light mb-5'
          data-bs-toggle='tooltip'
          title='This project completed'
        >
          <div className='bg-primary rounded h-4px' role='progressbar' style={{width: '50%'}}></div>
        </div>
        <div className='symbol symbol-35px symbol-circle'>
          <UsersSymbolGroup users={users} classes='justify-content-end' />
        </div>
      </div>
    </Link>
  )
}

export {Card9}
