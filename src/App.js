import './App.css';
import { Cards } from './components/Cards/Cards'
import { Layout } from './components/Layout/Layout'

function App() {

  const user = {
    name: "Alberto",
    age: 32,
    likesCSS: false
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