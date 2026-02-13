import { useContext, useState } from "react";
import { LoginContext } from "../contexts/loginContext";

import UserAddress from "../components/user/UserAddress";
import UserCompany from "../components/user/UserCompany";
import UserBankInfo from "../components/user/UserBankInfo";
import UserCryptoInfo from "../components/user/UserCryptoInfo";
import UserTechnicalInfo from "../components/user/UserTechnicalInfo";
import UserPersonaInfo from "../components/user/UserPersonaInfo";
import UserHeader from "../components/user/UserHeader";
import UserContact from "../components/user/UserContact";

import "./userPage.css";

function UserPage() {
  const {
    functions: { handleProfile },
    states: { authData, profileData },
  } = useContext(LoginContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!authData) return null;

  const openModal = async () => {
    setIsModalOpen(true);
    await handleProfile(); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="userPage">
      {/* Fora do modal: apenas dados básicos do login */}
      <header className="userPage__header">
        <UserHeader authData={authData} />
      </header>
      <button className="userPage__trigger" onClick={openModal}>
        Me profile
      </button>

      {/* Modal: apenas dados detalhados de auth/me */}
      {isModalOpen && (
        <div
          className="userPage__overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="user-modal-title"
        >
          <div className="userPage__modal">
            <button
              type="button"
              className="userPage__close"
              onClick={closeModal}
              aria-label="Fechar"
            >
              FECHAR
            </button>
            <div className="userPage__modalContent">
              {!profileData ? (
                <p className="userPage__loading">Carregando perfil...</p>
              ) : (
                <>
                  <section className="userPage__section">
                    <h2 id="user-modal-title" className="userPage__sectionTitle">
                      Dados pessoais
                    </h2>
                    <UserPersonaInfo authData={profileData} />
                  </section>

                  <section className="userPage__section">
                    <h2 className="userPage__sectionTitle">Contato</h2>
                    <UserContact authData={profileData} />
                  </section>

                  <section className="userPage__section">
                    <h2 className="userPage__sectionTitle">Endereço</h2>
                    <UserAddress address={profileData.address} />
                  </section>

                  <section className="userPage__section">
                    <h2 className="userPage__sectionTitle">Empresa</h2>
                    <UserCompany company={profileData.company} />
                  </section>

                  <section className="userPage__section">
                    <h2 className="userPage__sectionTitle">Banco (apenas para treino)</h2>
                    <UserBankInfo bank={profileData.bank} />
                  </section>

                  <section className="userPage__section">
                    <h2 className="userPage__sectionTitle">Crypto (apenas para treino)</h2>
                    <UserCryptoInfo crypto={profileData.crypto} />
                  </section>

                  <section className="userPage__section">
                    <h2 className="userPage__sectionTitle">Informações técnicas</h2>
                    <UserTechnicalInfo authData={profileData} />
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPage;
