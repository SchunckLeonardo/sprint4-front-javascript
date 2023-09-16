import ChallengeIBM from "./ChallengeIBM"
import Projetos from "./Projetos"
import Funcionamento from "./Funcionamento"
import Perfil from './Perfil'

function Home(){
    return (
        <>
            <ChallengeIBM/>
            <Projetos/>
            <Funcionamento/>
            <Perfil/>
        </>
    )
}

export default Home