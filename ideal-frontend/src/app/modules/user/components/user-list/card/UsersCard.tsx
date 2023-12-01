import {useMemo} from 'react'
// import {UserCard} from '../../../../../../_metronic/partials/content/cards/UserCard'
import {KTCardBody} from '../../../../../../_metronic/helpers'
import {useQueryResponseData, useQueryResponseLoading} from '../../core/QueryResponseProvider'

const UsersCard = () => {
    const users = useQueryResponseData()
    const data = useMemo(() => users, [users])

    const participants = [
        {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
        {name: 'Marcos Alberto', avatar: '/media/avatars/300-3.jpg'},
        {name: 'Lucão', initials: 'L', color: 'primary'},
    ]

    return (
        <div id="kt_users_cards_pane" className='tab-pane fade show active'>
            <KTCardBody className="px-0">
                <div className='row g-6 g-xl-9'>
                    {data.map(user => (
                        <div key={user.id} className='col-md-6 col-xl-4 col-xxl-3'>
                            {/* <UserCard
                                id={parseInt(user.id!)}
                                name={user.name}
                                client={user.client?.name}
                                budgetedHours={user.budgeted_hours}
                                profitMargin={52}
                                users={participants}
                                begin_date={user.begin_date}
                                end_date={user.end_date}
                                closed_at={user.closed_at}
                            /> */}
                      </div>
                      
                    ))}
                </div>
            </KTCardBody>
        </div>
    )
}

export {UsersCard}