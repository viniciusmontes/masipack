import { ReactComponent as Logo } from 'assets/images/masipack-logo.svg';
import Login from './Login'

import './styles.css'

const Auth = () => {
    return (
        <>
        <div className="home-container">
            <Logo/>
            <Login/>
        </div>
        </>
        
    )
}

export default Auth;