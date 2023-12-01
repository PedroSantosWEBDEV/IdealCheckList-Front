// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {useNavigate} from 'react-router-dom'
import {User} from '../../core/_models'

type Props = {
  row: Row<User>
}

const CustomRow: FC<Props> = ({row}) =>{
  const navigate = useNavigate()

  return (
    <tr 
      {...row.getRowProps()}
      className='bg-hover-light'
    >
      {row.cells.map((cell) => {
        return (
          <td
            {...cell.getCellProps()}
            className={clsx({'text-end min-w-100px': cell.column.id === 'actions'}) + 'bg-hover-light'}
            onClick={e => cell.column.id !== 'actions' ? navigate(`/users/${row.original.id}`) : null}
          >
            {cell.render('Cell')}
          </td>
        )
      })}
    </tr>
  )
}

export {CustomRow}
