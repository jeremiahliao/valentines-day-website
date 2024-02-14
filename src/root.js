import { Outlet } from "react-router-dom";
import styles from './assets/modules/Home.module.css';

function Root(){
    return (
        <>
            <main>
                <h1 className = {styles.header}>Happy Valentine's Day!</h1>
                <Outlet />
            </main>
        </>
    );
}

export default Root;