function UserAddress ({address}){


  return(
    <div>
          <ul>
            <li>Endereçoooo: {address?.address}</li>
            <li>Cidade: {address?.city}</li>
            <li>Estado: {address?.state}</li>
            <li>País: {address?.country}</li>
            <li>CEP: {address?.postalCode}</li>
            <li>Latitude: {address?.coordinates?.lat}</li>
            <li>Longitude: {address?.coordinates?.lng}</li>
          </ul>
    </div>
  )
}

export default UserAddress;