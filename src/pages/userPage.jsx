import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

function UserPage() {
  const {
    states: { authData },
  } = useContext(LoginContext);

  if (!authData) return null;

  const { address, company, bank, crypto, hair } = authData;

  return (
    <main>
      <section>
        <img
          src={authData.image}
          alt={`${authData.firstName} ${authData.lastName}`}
        />
        <div>
          <h1>
            {authData.firstName} {authData.lastName}
          </h1>
          <p>Username: {authData.username}</p>
          <p>Role: {authData.role}</p>
        </div>
      </section>

      <section>
        <h2>Dados pessoais</h2>
        <ul>
          <li>Idade: {authData.age}</li>
          <li>Data de nascimento: {authData.birthDate}</li>
          <li>Gênero: {authData.gender}</li>
          <li>Altura: {authData.height} cm</li>
          <li>Peso: {authData.weight} kg</li>
          <li>Grupo sanguíneo: {authData.bloodGroup}</li>
          <li>Cor dos olhos: {authData.eyeColor}</li>
          <li>
            Cabelo: {hair?.color} ({hair?.type})
          </li>
        </ul>
      </section>

      <section>
        <h2>Contato</h2>
        <ul>
          <li>Email: {authData.email}</li>
          <li>Telefone: {authData.phone}</li>
        </ul>
      </section>

      <section>
        <h2>Endereço</h2>
        {address && (
          <ul>
            <li>Endereço: {address.address}</li>
            <li>Cidade: {address.city}</li>
            <li>Estado: {address.state}</li>
            <li>País: {address.country}</li>
            <li>CEP: {address.postalCode}</li>
            <li>Latitude: {address.coordinates?.lat}</li>
            <li>Longitude: {address.coordinates?.lng}</li>
          </ul>
        )}
      </section>

      <section>
        <h2>Empresa</h2>
        {company && (
          <>
            <p>
              <strong>{company.name}</strong>
            </p>
            <ul>
              <li>Departamento: {company.department}</li>
              <li>Cargo: {company.title}</li>
              {company.address && (
                <>
                  <li>Endereço: {company.address.address}</li>
                  <li>Cidade: {company.address.city}</li>
                  <li>Estado: {company.address.state}</li>
                  <li>País: {company.address.country}</li>
                </>
              )}
            </ul>
          </>
        )}
      </section>

      <section>
        <h2>Banco (apenas para treino)</h2>
        {bank && (
          <ul>
            <li>Bandeira: {bank.cardType}</li>
            <li>Validade: {bank.cardExpire}</li>
            <li>Moeda: {bank.currency}</li>
            <li>IBAN: {bank.iban}</li>
          </ul>
        )}
      </section>

      <section>
        <h2>Crypto (apenas para treino)</h2>
        {crypto && (
          <ul>
            <li>Coin: {crypto.coin}</li>
            <li>Network: {crypto.network}</li>
            <li>Wallet: {crypto.wallet}</li>
          </ul>
        )}
      </section>

      <section>
        <h2>Informações técnicas</h2>
        <ul>
          <li>IP: {authData.ip}</li>
          <li>MAC Address: {authData.macAddress}</li>
          <li>User Agent: {authData.userAgent}</li>
          <li>Universidade: {authData.university}</li>
          <li>EIN: {authData.ein}</li>
        </ul>
      </section>
    </main>
  );
}

export default UserPage;