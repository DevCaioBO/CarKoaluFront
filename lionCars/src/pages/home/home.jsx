import './home.css'

export default function Home() {
    return(
        <header>
            <p>KOALU</p>

            <nav>
                <ul>
                    <li><button>Veiculos</button></li>
                    <li><button>Comprar</button></li>
                    <li><button>Ofertas</button></li>
                </ul>
            </nav>

            <div id="searchHomeInputBody">
                <input type="text" placeholder='Temas,carros...'  />
            </div>

            

        </header>

        
    )
}