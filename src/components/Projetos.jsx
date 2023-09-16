import '../assets/css/projetos.css'
import projeto from '../assets/imgs/projeto.png'

function Projetos() {
    return (
        <>
            <section className="container-fluid projetos-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start pb-3">
                            <h2 className='display-1 projetos-title'>Projeto</h2>
                            <p className='lead fw-semibold'>
                                Desenvolvemos a “ Corp”,
                                a fim de atender esse problema entre parcerias,
                                o aplicativo possui como objetivo proporcionar
                                relacionamentos entre empresas.
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center ps-5">
                            <img src={projeto} alt="Imagem de 3 icones com gravatas" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projetos