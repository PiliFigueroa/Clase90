import './App.css';
import { Cards } from './components/Cards/Cards'
import { Layout } from './components/Layout/Layout'

function App() {

  const user = {
    name: "Alberto",
    lastname: "Perez",
    age: 32,
    likesCSS: false,
    img: "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044-300x300.jpg"
  }

  const user2 = {
    name: "Juana",
    age: 27,
    likesCSS: true
  }

  return (
    <div className="App">
      <Layout showNavbar showFooter>
        <Cards user={user} />
        <Cards user={user2} />
      </Layout>
    </div>
  );
}

export default App;