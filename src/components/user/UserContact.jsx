function UserContact ({authData}){

  return(
    <div>
        <ul>
          {authData?.phone && <li>phone: {authData?.phone}</li>}
          {authData?.email && <li>email: {authData?.email}</li>}
        </ul>
    </div>
  )
}

export default UserContact;