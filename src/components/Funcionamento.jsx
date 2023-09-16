import '../assets/css/funcionamento.css'

function Funcionamento() {
    return (
        <>
            <section className="container-fluid funcionamento-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start pb-3">
                            <h2 className='display-1 text-light'>Como irá <span className='text-warning'>funcionar?</span></h2>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center ps-5 border-start">
                            <p className="lead text-light fw-semibold">
                                O software irá analisar os objetivos da empresa, apresentar as melhores parcerias possíveis, priorizando as empresas mais próximas e com metas parecidas..
                            </p>
                            <p className="lead text-light">
                                No aplicativo, as empresas podem se expressar, de forma aberta, expor seus objetivos e dificuldades em seus feeds
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Funcionamento