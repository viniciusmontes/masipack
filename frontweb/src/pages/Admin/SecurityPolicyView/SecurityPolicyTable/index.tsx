import { SecurityPolicy } from 'types/securitypolicy';

import './styles.css';

type Props = {
  securityPolicy: SecurityPolicy[];
};

const SecurityPolicyTable = ({ securityPolicy }: Props) => {
  const renderEnableAd = (enableAd: boolean) => {
    return enableAd ? 'SIM' : 'NÃO';
  };

  return (
    <>
      <div className="security-policy-table-container">
        <table className="table table-striped security-policy-table">
          <thead className="security-policy-table-header">
            <tr className="security-policy-table-header">
              <th>Código</th>
              <th>Descrição</th>
              <th>Integração com AD</th>
              <th>Tamanho da senha</th>
              <th>Expiração da senha</th>
              <th>Tem números</th>
              <th>Letras maiúsculas</th>
              <th>Letras minúsculas</th>
              <th>Caracteres especiais</th>
              <th>Caracteres minimos</th>
              <th>Senhas antigas</th>
              <th>Tempo de sessão</th>
            </tr>
          </thead>
          <tbody>
            {securityPolicy.map((securityPolicy) => (
              <tr key={securityPolicy.code}>
                <td>{securityPolicy.code}</td>
                <td>{securityPolicy.description}</td>
                <td>{renderEnableAd(securityPolicy.enableAd)}</td>
                <td>{securityPolicy.passwordQtyMinKeys}</td>
                <td>{securityPolicy.passwordQtyDaysExpiration} dias</td>
                <td>{renderEnableAd(securityPolicy.passwordContainsNumber)}</td>
                <td>
                  {renderEnableAd(
                    securityPolicy.passwordContainsLetterUpperCase
                  )}
                </td>
                <th>
                  {renderEnableAd(
                    securityPolicy.passwordContainsLetterLowerCase
                  )}
                </th>
                <th>
                  {renderEnableAd(securityPolicy.passwordContainsSpecialKey)}
                </th>
                <th>{securityPolicy.passwordQtyMinKeys}</th>
                <th>{securityPolicy.passwordQtyOldNotUse}</th>
                <th>{securityPolicy.sessionTimeOut} segundos</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SecurityPolicyTable;
