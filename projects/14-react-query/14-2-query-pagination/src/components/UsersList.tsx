import { SortBy, type User } from '../types'

interface Props {
  changeSorting: (sort: SortBy) => void
  deleteUser: (email: string) => void
  showColors: boolean
  users: User[]
}

export function UsersList({ changeSorting, deleteUser, showColors, users }: Props) {
  return (
    <table width='100%' className='mx-auto'>
      <thead>
        <tr>
          <th>Foto</th>
          <th className='pointer' onClick={() => { changeSorting(SortBy.NAME) }}>Nombre</th>
          <th className='pointer' onClick={() => { changeSorting(SortBy.LAST) }}>Apellido</th>
          <th className='pointer' onClick={() => { changeSorting(SortBy.COUNTRY) }}>País</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody className={showColors ? 'table--showColors' : ''}>
        {
          users?.map((user) => {
            return (
              <tr key={user.email}>
                <td>
                  <img className='mx-auto' src={user.picture.thumbnail} />
                </td>
                <td>
                  {user.name.first}
                </td>
                <td>
                  {user.name.last}
                </td>
                <td>
                  {user.location.country}
                </td>
                <td>
                  <button onClick={() => {
                    deleteUser(user.email)
                  }}>Borrar</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}