import Botao from "../../components/Botao"


const Principal = () => {
    const msg = "Olá Devs!"
    const outraMsg = "Até logo!"
    return (
        <>
            <h1>Página Principal </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem eaque consequuntur dolorum itaque quos ut iste nemo corporis! Eos necessitatibus numquam molestiae vel accusamus, facere magni tenetur amet velit veritatis?</p>
            <hr />
            <Botao msg={msg} />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ex veritatis ducimus vitae saepe quas sint deleniti dicta! Non, quibusdam. Tenetur delectus aspernatur consequuntur similique, maxime repellendus reiciendis aliquid explicabo.</p>
            <Botao msg={outraMsg} />
        </>
    )
}

export default Principal