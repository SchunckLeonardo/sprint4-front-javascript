import '../assets/css/login.css'
import fotoLogin from '../assets/imgs/fotosprint2.jpeg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {

    let [emailInput, setEmailInput] = useState('')
    let [passwordInput, setPasswordInput] = useState('')

    let navigate = useNavigate()

    let enterAccount = () => {
        localStorage.setItem('email', emailInput)
        localStorage.setItem('password', passwordInput)
        navigate('/validation')
    }

    return (
        <>
            <main className="container d-flex flex-column justify-content-center align-items-center p-5">
                <div className="login-box row my-5 border border-2 border-dark p-5 rounded">
                    <div className="col-lg-6 mb-3 mb-lg-0 d-flex flex-column justify-content-center align-items center">
                        <h2 className='display-3 text-center mb-5'>Entrar na sua conta</h2>
                        <form className='d-flex flex-column justify-content-between'>
                            <label htmlFor="email" className='form-label'>E-mail:</label>
                            <input placeholder='Digite o seu email' value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required id="emailInput" type="email" name='email' className='form-control mb-3' />
                            <label htmlFor="password" className='form-label'>Senha:</label>
                            <input placeholder='Digite a sua senha' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} required id="passwordInput" type="password" name='password' className='form-control mb-3' />
                            <button onClick={enterAccount} className='btn btn-outline-dark w-100'>Logar</button>
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