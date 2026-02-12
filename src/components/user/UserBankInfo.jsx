function UserBankInfo ({bank}){


  return(
    <div>
        {bank && (
          <ul>
            <li>Bandeira: {bank?.cardType}</li>
            <li>Validade: {bank?.cardExpire}</li>
            <li>Moeda: {bank?.currency}</li>
            <li>IBAN: {bank?.iban}</li>
          </ul>
        )}
    </div>
  )
}

export default UserBankInfo;