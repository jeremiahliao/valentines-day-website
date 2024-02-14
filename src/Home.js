import { Link } from 'react-router-dom';
import Canvas from './canvas.js';
import styles from './assets/modules/Home.module.css';

function Home() {

    function handleNo(event){
        alert('Error Try Again!');
    }

    return (
        <div>
            <h2>Hey cutie! Will you be my valentine?</h2>
            <div>
                <Link to="/yes" className={styles.button}>Yes</Link>
                <button  onClick = { handleNo } className={styles.button}>No</button>
            </div>
            <Canvas />
        </div>
    );
}

export default Home;