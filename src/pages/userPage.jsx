import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

import UserAddress from "../components/user/UserAddress";
import UserCompany from "../components/user/UserCompany";
import UserBankInfo from "../components/user/UserBankInfo";
import UserCryptoInfo from "../components/user/UserCryptoInfo";
import UserTechnicalInfo from "../components/user/UserTechnicalInfo";
import UserPersonaInfo from "../components/user/UserPersonaInfo";
import UserHeader from "../components/user/UserHeader";
import UserContact from "../components/user/UserContact";




function UserPage() {
  const {
    states: { authData },
  } = useContext(LoginContext);

  if (!authData) return null;

  const { address, company, bank, crypto } = authData;


  console.log(authData)
  return (
    <main>
      <section>
        <UserHeader authData={authData}/>
      </section>

      <section>
        <h2>Dados pessoais</h2>
        <UserPersonaInfo authData={authData}/>
      </section>

      <section>
        <h2>Contato</h2>
        <UserContact authData={authData}/>
      </section>

      <section>
        <h2>Endereço</h2>
        <UserAddress address={address}/>
      </section>

      <section>
        <h2>Empresa</h2>
        <UserCompany company={company}/>
      </section>

      <section>
        <h2>Banco (apenas para treino)</h2>
        <UserBankInfo bank={bank} />
      </section>

      <section>
        <h2>Crypto (apenas para treino)</h2>
       <UserCryptoInfo crypto={crypto}/>
      </section>

        <section>
          <h2>Informações técnicas</h2>
          <UserTechnicalInfo authData={authData}/>
        </section>
    </main>
  );
}

export default UserPage;