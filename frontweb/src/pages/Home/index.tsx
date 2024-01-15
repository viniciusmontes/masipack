import { ReactComponent as Logo } from 'assets/images/masipack-logo.svg';
import Login from './Login'

import './styles.css'

const Home = () => {
    return (
        <>
        <div className="home-container">
            <Logo/>
            <Login/>
        </div>
        </>
        
    )
}

export default Home;