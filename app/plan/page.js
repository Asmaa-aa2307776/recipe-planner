import styles from "./page.module.css";
import {Home} from "lucide-react";
import Link from "next/link";

const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

export default function MyPlan(){
    return(
        <main className={styles.page}>
            <Link href="/" className={styles.homeButton}>
            <Home size={40}></Home>
            </Link>
            <h1 className={styles.title}>My Plan</h1>
            <p className={styles.description}>Plan your meals for the week</p>
            <div className={styles.days}>
            {days.map((day)=>(
                    <div key={day} className={styles.day}>
                    <h2>{day}</h2>
                    <div className={styles.meal}>
                        <h3>Breakfast</h3>
                        <p>No recipes added yet.</p>
                    </div>
                    <div className={styles.meal}>
                        <h3>Lunch</h3>
                        <p>No recipes added yet.</p>
                    </div>
                    <div className={styles.meal}>
                        <h3>Dinner</h3>
                        <p>No recipes added yet.</p>
                    </div>

                </div>
            ))}


            </div>



        </main>
    )
}