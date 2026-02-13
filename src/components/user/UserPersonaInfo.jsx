function UserPersonaInfo ({authData}){

  return(
    <div>
        <ul>
          {authData?.age != null && <li>Idade: {authData.age}</li>}
          {authData?.birthDate && <li>Data de nascimento: {authData.birthDate}</li>}
          {authData?.gender && <li>Gênero: {authData.gender}</li>}
          {authData?.height && <li>Altura: {authData.height} cm</li>}
          {authData?.weight && <li>Peso: {authData.weight} kg</li>}
          {authData?.bloodGroup && <li>Grupo sanguíneo: {authData.bloodGroup}</li>}
          {authData?.eyeColor && <li>Cor dos olhos: {authData.eyeColor}</li>}
          {(authData?.hair?.color || authData?.hair?.type) && (
            <li>Cabelo: {authData.hair?.color} {authData.hair?.type && `(${authData.hair.type})`}</li>
          )}
        </ul>
    </div>
  )
}

export default UserPersonaInfo;