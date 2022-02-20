import Logo from "../images/Logo.png"
export default function Header(){
    return (
        <header>
            <img src={Logo}/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </header>
    )
}