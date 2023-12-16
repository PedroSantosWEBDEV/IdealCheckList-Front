/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {UsersSymbolGroup} from '../../widgets/userSelection/UsersSymbolGroup'

interface IconUserModel {
  name: string
  avatar?: string
  color?: string
  initials?: string
}

type Props = {
  title: string
  budgetedHours?: number
  recordedHours?: number
  profitMargin?: number
  deadline?: string
  users: Array<IconUserModel>
}

const Card7: FC<Props> = ({
  title,
  budgetedHours,
  recordedHours,
  profitMargin,
  deadline,
  users
}) => {
  const intl = useIntl()

  const openEditModal = () => {
    // setItemIdForUpdate(id)
  }

  // const deleteItem = useMutation(() => deleteUser(id), {
  //   // 💡 response of the mutation is passed to onSuccess
  //   onSuccess: () => {
  //     // ✅ update detail view directly
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //   },
  // })

  return (
    <Link
      to='/projects/overview'
      className='card border-hover-primary '
    >
      <div className="card-header border-0 pt-9">
        <div className='card-title m-0'>
          <div className="symbol symbol-50px w-50px bg-light">
            <div className='card-title m-0'>
              <p className='fs-2 fw-bolder text-dark'>
                {title}
              </p>
            </div>
          </div>
          <div className="col-4">
            <UsersSymbolGroup users={users} classes="justify-content-end" />
          </div>
        </div>

        <div className='card-body p-5'>
          <div className="d-flex flex-wrap">
            <div className="col-6 mb-5 fs-6">
              <span className="fw-bold text-dark me-1">
              Horas orçadas:
              </span>
              <div className="text-dark me-2">
                {budgetedHours && budgetedHours + 'h'}
              </div>
            </div>
            <div className="col-6 mb-5 fs-6">
              <span className="fw-bold text-dark me-1">
              Horas lançadas:
              </span>
              <div className="text-dark me-2">
                {recordedHours && recordedHours + 'h'}
              </div>
            </div>
            <div className="col-6 fs-6">
              <span className="fw-bold text-dark me-1">
              Margem de lucro:
              </span>
              <div className="text-dark me-2">
                {recordedHours && recordedHours + '%'}
              </div>
            </div>
            <div className="col-6 fs-6">
              <span className="fw-bold text-dark me-1">
              Prazo:
              </span>
              <div className="text-dark me-2">
                {deadline && deadline}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export {Card7}
