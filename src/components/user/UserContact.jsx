function UserContact ({authData}){


  return(
    <div>
          <ul>
            <li>phone: {authData?.phone}</li>
            <li>email: {authData?.email}</li>
          </ul>
    </div>
  )
}

export default UserContact;