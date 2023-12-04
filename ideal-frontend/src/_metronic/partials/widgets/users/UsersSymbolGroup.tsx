import {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
interface IconUserModel {
  name: string
  avatar?: string
  color?: string
  initials?: string
}

type Props = {
  users?: Array<IconUserModel>
  classes?: string
}
const UsersSymbolGroup: FC<Props> = ({users = undefined, classes = undefined}) => {
  return (
    <>
      <div className={`symbol-group symbol-hover ${classes}`}>
        {users &&
          users.map((user, i) => {
            return (
              <OverlayTrigger
                key={`${i}-${user.name}`}
                placement='top'
                overlay={<Tooltip id='tooltip-user-name'>{user.name}</Tooltip>}
              >
                <div className='symbol symbol-35px symbol-circle'>
                  {user.avatar && <img src={toAbsoluteUrl(user.avatar)}  alt='Pic' />}
                  {user.initials && (
                    <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                      {user.initials}
                    </span>
                  )}
                </div>
              </OverlayTrigger>
            )
          })
        }
      </div>
    </>
  )
}

export {UsersSymbolGroup}
