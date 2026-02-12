function UserCryptoInfo ({crypto}){


  return(
    <div>
        {crypto && (
          <ul>
            <li>Coin: {crypto?.coin}</li>
            <li>Network: {crypto?.network}</li>
            <li>Wallet: {crypto?.wallet}</li>
          </ul>
        )}
    </div>
  )
}

export default UserCryptoInfo;