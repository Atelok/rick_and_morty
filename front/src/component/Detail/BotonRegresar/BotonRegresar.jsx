import style from "./BotonRegresar.module.css"


const Boton = () => {

    return (
        <>
            <button type="button" className={style.btn}>
                <strong>{"<"} REGRESAR</strong>
                <div className={style.containerStars}>
                    <div className={style.stars}></div>
                </div>

                <div className={style.glow}>
                    <div className={style.circle}></div>
                    <div className={style.circle}></div>
                </div>
            </button>
        </>
    )
} 
export default Boton