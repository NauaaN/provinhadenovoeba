import { Link } from "react-router-dom";


export default function index(){
    return(
        <main>

        <h1>Home</h1>
            <ul>
                
                <li><Link to='/corPrimaria'>Cor Primaria</Link> </li>
                <li><Link to='/freqCaract'>Frequencia de caractr</Link> </li>
                <li><Link to='/ingrssoCinema'>Ingresso cinemea</Link> </li>
                <li><Link to='/maiorNum'>Maior Numero</Link> </li>

                
             </ul>
        </main>
    )
}