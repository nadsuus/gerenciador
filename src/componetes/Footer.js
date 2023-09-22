function Footer({ social1, social2, social3, descricaoDaSocial1, descricaoDaSocial2, descricaoDaSocial3 }) {
    return (
        <Footer>
            <img className="" src={social1} alt={descricaoDaSocial1}></img>
            <img className="" src={social2} alt={descricaoDaSocial2}></img>
            <img className="" src={social3} alt={descricaoDaSocial3}></img>
        </Footer>
    )
}
export default Footer