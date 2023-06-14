import { Image } from './components/Arquive/Image'
import { Form } from './components/Note/Form'
import { Header } from './components/Head/Header'

export function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Form />  
        <Image />
      </main>
    </>
  )
}

