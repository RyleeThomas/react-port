import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { useState } from 'react';

function App() {

  const [page] = useState([ 'About', 'Projects', 'Contact', 'Resume'])
  const [currentPage, setCurrentPage] = useState(page[0])

  console.log(currentPage);

  return (
    <div>
      <header>
        <Header page={page} currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
      </header>
      <main>
        { currentPage === 'About' ?
          <About></About> : <></>
        }
        { currentPage === 'Projects' ?
          <Projects></Projects> : <></>
        }
        { currentPage === 'Contact' ?
          <ContactForm></ContactForm> : <></>
        }
        { currentPage === 'Resume' ?
          <Resume></Resume> : <></>
        }
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
