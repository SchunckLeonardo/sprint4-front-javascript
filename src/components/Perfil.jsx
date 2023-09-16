import '../assets/css/perfil.css'

function Perfil() {
    return (
        <>
            <section className="container-fluid perfil-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start pb-3">
                            <h2 className='display-1 text-dark'>Perfil do cliente</h2>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center ps-5 border-start">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Compromisso com a responsabilidade social corporativa</li>
                                <li className="list-group-item">Interesse em colaborar com outras empresas para alcançar objetivos em comum</li>
                                <li className="list-group-item">Dispostas a investir em iniciativas ambientais que agreguem valor ao negócio</li>
                                <li className="list-group-item">Busca por imagem positiva e uma reputação sustentável perante a sociedade, consumidores e fornecedores</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Perfil