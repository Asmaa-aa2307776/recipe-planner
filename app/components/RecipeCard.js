import styles from "./RecipeCard.module.css";
import Link from "next/link";

export default function RecipeCard({recipe}){
    return(
        <Link href={`/recipes/${recipe.id}`} className={styles.cardLink}>
        <div className={styles.card}>
            <h2 className={styles.recipeName}>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <p>Difficulty: {recipe.difficulty}</p>
            <p>Calories: {recipe.calories_per_serving}</p>
            <p>Protein: {recipe.protein}g</p>

        </div>
        </Link>
    );
}