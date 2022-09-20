import logo from '../../assets/logo.PNG';

export const Header = ({data}) => {
    const onClick = () => {
        console.debug(data);
        console.log(data);
    }
    return (
        <header className="App-header" onClick={onClick}>
            <h1>
                <img src={logo} alt="logo"/>
            </h1>
        </header>
    );
}
