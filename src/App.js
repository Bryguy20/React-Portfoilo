import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import About from "./components/About";
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
    const [nav] = useState(['about', 'contact', 'resume']);
    const [currentNav, setCurrentNav] = useState(nav[0]);

    // switch statement fro when navbar is clicked
    function renderComponent(currentNav) {
       switch (currentNav) {
           case 'about':
               return <About />;
               case 'portfolio': 
               return <Project />;
               case 'contact':
               return<Contact />;
               case 'resume':
               return <Resume />;
               default:
                   return <About />;        
       } 
    }

    return (
        <div className="app">
            <Header currentNav={currentNav} setCurrentNav={setCurrentNav} />
            <main>
              {renderComponent(currentNav)}  
            </main>
                <Footer />
        </div>
    );
}

export default App;