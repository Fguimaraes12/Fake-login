function UserHeader ({authData}){


  return(
    <div>
        <img
          src={authData.image}
          alt={`${authData.firstName} ${authData.lastName}`}
        />
        <div>
          <h1>
            {authData.firstName} {authData.lastName}
          </h1>
          <p>Username: {authData.username}</p>
          <p>Email: {authData.email}</p>
        </div>
    </div>
  )
}

export default UserHeader;