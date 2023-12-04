/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useIntl} from 'react-intl'

type Props = {
  title?: string
  client?: string
  badgeColor?: string
  src?: string
  about?: string
  status?: string
  statusColor?: string
  budgetProgress?: number
  deadlineProgress?: number
}

const Card8: FC<Props> = ({
  title,
  client,
  about,
  badgeColor,
  status,
  src,
  statusColor,
  budgetProgress,
  deadlineProgress,
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
    // <Link
    //   to='/crafted/pages/profile/overview'
    //   className='card rounded-0 border border-1 border-gray-200 overflow-hidden'
    // >
    <div className='col-md-4'>ssss
                  <div className='card-xl-stretch me-md-6'>
                    <Link className='d-block overlay' data-fslightbox='lightbox-hot-sales' to='/wiki/overview'>
                      <img
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-100px w-100'
                        src={src}
                        alt={title}
                      />
                      {/* <!--begin::Action--> */}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-2x text-white'></i>
                      </div>
                      {/* <!--end::Action--> */}
                    </Link>
                    <div className='mt-5'>
                      {/* <!--begin::Title--> */}
                      <Link
                        to='#'
                        className='fs-4 text-dark fw-bold text-hover-primary text-dark lh-base'
                      >
                        {title}
                      </Link>
                      {/* <!--end::Title--> */}
                      {/* <!--begin::Text--> */}
                      <div className='fw-semibold fs-5 text-gray-600 text-dark mt-3'>
                        {about}
                      </div>
                      {/* <!--end::Text--> */}
                    </div>
                  </div>
                </div>
    // </Link>
  )
}

export {Card8}
