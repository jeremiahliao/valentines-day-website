import styles from "./assets/modules/Yes.module.css";
import pic from "./assets/IMG_4295.jpg";

function YesMessage(){
    let hidden = true;

    function handleClick(event){
        const element = document.getElementById("us");
        if(!hidden){
            element.style.opacity = 0;
            hidden = true;
        }
        else{
            let op = 0.1;
            let timer = setInterval(function () {
                if (op >= 1){
                    element.style.opacity = 1
                    clearInterval(timer);
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op += op * 0.1;
            }, 50);
            hidden = false;
        }
    }

    return (
        <div>
            <h2 className = {styles.subheader}> - With Love, Your Boyfriend, Jeremiah - </h2>
            <div className={styles.bodyContainer}>
                <p className = {styles.body}>
                    Good job in choosing the correct answer :)
                    Here's to our 3rd Valentines together (and hopefully many more)
                    I love you so much! I love the time we get to spend together, and you 
                    always manage to put a smile to my face. I can't wait for the day we're 
                    finally together in person for Valentine's Day.
                    Since I could not get you flowers in person, here's a flower for you:
                </p>
            </div>

            <div className = {styles.container}>
                <div className = {styles.glass}></div>
                <div className = {styles.thorns}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className = {styles.glow}></div>
                <div className = {styles.roseLeaves}>
                    <div></div>
                    <div></div>
                </div>
                <div className = {styles.rosePetals}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className = {styles.sparkles}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
 
            <div className = {styles.button} onClick={handleClick}>Click Here for a Hidden Image</div>

            <img id = "us" src = {pic} width="400px" className = {styles.image} alt="a pic of us"/>
        </div>
    );
}

export default YesMessage;