import '../assets/css/login.css'
import fotoLogin from '../assets/imgs/fotosprint2.jpeg'

function Login() {
    return (
        <>
            <main className="container d-flex flex-column justify-content-center align-items-center p-5">
                <div className="login-box row my-5 border border-2 border-dark p-5 rounded">
                    <div className="col-lg-6 mb-3 mb-lg-0 d-flex flex-column justify-content-center align-items center">
                        <h2 className='display-3 text-center mb-5'>Entrar na sua conta</h2>
                        <form className='d-flex flex-column justify-content-between'>
                            <label htmlFor="email" className='form-label'>E-mail:</label>
                            <input type="email" name='email' className='form-control mb-3' />
                            <label htmlFor="password" className='form-label'>Senha:</label>
                            <input type="password" name='password' className='form-control mb-3' />
                            <button className='btn btn-outline-dark w-100'>Logar</button>
                        </form>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img className='login-image rounded' src={fotoLogin} alt="Foto de 6 pessoas em reunião" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login