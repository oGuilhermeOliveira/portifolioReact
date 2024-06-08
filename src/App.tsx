import EstiloGlobal from './styles'
import Sobre from './containers/Sidebar/About'
import Sidebar from './containers/Sidebar'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Sidebar />
      <main>
        <Sobre />
        <section>Projetos</section>
      </main>
    </>
  )
}

export default App
