import Button from './components/Button/Button'
import Header from "./components/Header"
import {ways} from './data'
import WayToTeach from "./components/WayToTeach"
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
 <h3> Подход к обучению</h3>
 <ul>
  <WayToTeach {...ways[0]} />
  <WayToTeach {...ways[1]} />
  <WayToTeach {...ways[2]} />
  <WayToTeach {...ways[3]} />
         </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          <Button>Доступность</Button>
          <Button>Концентрация</Button>
          <Button>Честность</Button>
        </section>
      </main>
    </div>
  )
}


