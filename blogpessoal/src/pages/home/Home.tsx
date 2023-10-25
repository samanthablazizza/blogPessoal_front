import './Home.css'

function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h1>Seja Bem Vinde!</h1>
                        <p>Expresse aqui seus pensamentos e opiniões</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="https://media.tenor.com/rkY5QA5c3VAAAAAC/gato-digitando.gif" 
                            alt="Gif da Página Home" 
                            width="400px"
                        />
                        <button><a href="https://github.com/samanthablazizza">Acesse meu GitHub!</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home