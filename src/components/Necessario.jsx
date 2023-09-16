import '../assets/css/necessario.css'

function Necessario() {
    return (
        <>
            <section className="container-fluid necessario-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12 text-center">
                            <h2 className='display-1 text-light fw-bolder'>Necessário</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <h3 className='display-5 text-light fw-semibold'>01. Marketing</h3>
                            <p className="lead text-light fw-light">
                                Seria necessário realizar um
                                excelente marketing, para
                                conseguirmos cadastrar o maior
                                número de empresas possíveis
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h3 className='display-5 text-light fw-semibold'>02. Parcerias</h3>
                            <p className="lead text-light fw-light">
                                Também, faríamos parceria
                                com diversas ongs e empresas
                                que tem como foco a sustentabilidade
                                para que ela consiga ajudar àquelas
                                que buscam melhorar.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h3 className='display-5 text-light fw-semibold'>03. Feedback</h3>
                            <p className="lead text-light fw-light">
                                O feedback seria muito
                                importante, para que conseguissimos
                                melhorar sempre, e atender
                                aos pedidos das empresas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Necessario