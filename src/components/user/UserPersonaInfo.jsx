function UserPersonaInfo ({authData}){


  return(
    <div>
            <ul>
          <li>Idade: {authData.age}</li>
          <li>Data de nascimento: {authData.birthDate}</li>
          <li>Gênero: {authData.gender}</li>
          <li>Altura: {authData?.height} cm</li>
          <li>Peso: {authData?.weight} kg</li>
          <li>Grupo sanguíneo: {authData?.bloodGroup}</li>
          <li>Cor dos olhos: {authData?.eyeColor}</li>
          <li>
            Cabelo: {authData.hair?.color} ({authData.hair?.type})
          </li>
        </ul>
    </div>
  )
}

export default UserPersonaInfo;