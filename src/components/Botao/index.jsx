const Botao = (props) =>{
    const alerta = ()=>{
        alert(props.msg)
    }
    return(
        <button onClick={alerta}>Botão</button>
        
    )
}
export default Botao 