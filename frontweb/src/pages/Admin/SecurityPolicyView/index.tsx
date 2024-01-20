import { useEffect, useState } from 'react';
import { SecurityPolicy } from 'types/securitypolicy';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import SecurityPolicyForm from './SecurityPolicyForm';
import SecurityPolicyTable from './SecurityPolicyTable';

const SecurityPolicyView = () => {
  const [securityPolicys, setSecurityPolicys] = useState<SecurityPolicy[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/security-policy',
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setSecurityPolicys(response.data);
    });
  }, []);

  const handleInsertSecurityPolicy = (securityPolicy: SecurityPolicy) => {
    const clone = [...securityPolicys];
    clone.push(securityPolicy);
    setSecurityPolicys(clone);
  };
  return (
    <div className="security-policy-view-container">
      <SecurityPolicyForm onInsertSecurityPolicy={handleInsertSecurityPolicy} />
      <SecurityPolicyTable securityPolicy={securityPolicys} />
    </div>
  );
};

export default SecurityPolicyView;
