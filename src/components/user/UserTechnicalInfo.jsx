function UserTechnicalInfo ({authData}){

  return(
    <div>
          <ul>
            {authData?.ip && <li>IP: {authData.ip}</li>}
            {authData?.macAddress && <li>MAC Address: {authData.macAddress}</li>}
            {authData?.userAgent && <li>User Agent: {authData.userAgent}</li>}
            {authData?.university && <li>Universidade: {authData.university}</li>}
            {authData?.ein && <li>EIN: {authData.ein}</li>}
          </ul>
    </div>
  )
}

export default UserTechnicalInfo;