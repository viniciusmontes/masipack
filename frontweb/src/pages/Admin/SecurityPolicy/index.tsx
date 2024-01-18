import SecurityPolicyTable from "./SecurityPolicyTable";


import './styles.css'

const SecurityPolicy = () => {
    return (
        <>
        <div className="security-policy-crud-container">
            <form>
                <h1>Politica de Segurança</h1>
                <label>Ultiliza integracção com AD ?</label>
                <select name="" id=""></select>
                <label>Quantidades de dia para expiração da senha</label>
                <select name="" id=""></select>
                <label>Senha deve conter letras maiúsculas?</label>
                <select name="" id=""></select>
                <label>Senha deve conter letras minúsculas?</label>
                <select name="" id=""></select>
                <label htmlFor="">Senha deve conter caracteres?</label>
                <select name="" id=""></select>
                <label htmlFor="">Quantas senhas antigas não poderão serem reutilizadas?</label>
                <select name="" id=""></select>
                <label htmlFor="">Tempo de sessão em segundos</label>
                <select name="" id=""></select>
            </form>
            <SecurityPolicyTable/>
        </div>
        </>
    )
}

export default SecurityPolicy;