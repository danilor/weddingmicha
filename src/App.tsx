import './App.css'
import MainComponent from "./components/main.component.tsx";
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS styles


function App() {
    useEffect(() => {
        AOS.init({
            // Global settings:
            duration: 1000, // Animation duration in milliseconds
            once: false,    // Whether animation should happen only once - while scrolling down
        });
    }, []);
    return (

            <MainComponent/>

    )
}

export default App
