import "./header.css";
import logo from '../../assets/logo.PNG';

export const Header = () => {
    return (
        <header>
            <h1>
                <img src={logo} alt="logo"/>
            </h1>
        </header>
    );
}
