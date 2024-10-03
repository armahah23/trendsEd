import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
  return (
    <>
    <Navbar />
        <div className="home-container">
            <div className="content">
            <h3>Wel come to this page. </h3>
            <p>We created using some set of use states and some react hooks</p>
            
            </div>
        </div>
    </>
  )
}

export default Home