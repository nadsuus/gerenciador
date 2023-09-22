function Nav({ logo, titulo, descricao }) {
    return (
        <>
            <img className="" src={logo} alt={descricao}> </img >
            <h2 className="">{titulo}</h2>
        </>
    )
}
export default Nav