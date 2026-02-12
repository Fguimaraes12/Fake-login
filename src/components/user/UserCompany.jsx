function UserCompany ({company}){


  return(
    <div>
        {company && (
          <>
            <p>
              <strong>{company?.name}</strong>
            </p>
            <ul>
              <li>Departamento: {company?.department}</li>
              <li>Cargo: {company?.title}</li>
              {company.address && (
                <>
                  <li>Endereço: {company?.address.address}</li>
                  <li>Cidade: {company?.address.city}</li>
                  <li>Estado: {company?.address.state}</li>
                  <li>País: {company?.address.country}</li>
                </>
              )}
            </ul>
          </>
        )}
    </div>
  )
}

export default UserCompany;