import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";
import { headers } from "next/headers";
import RecipeCard from "./components/RecipeCard";

export default async function Home({searchParams}){

  const params = await searchParams;
  const search = params.search;

  let recipes = [];

  if (search){
    const response = await fetch(
      `https://recipeapi.io/api/v1/recipes?search=${encodeURIComponent(search)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.RECIPE_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    recipes = data.data;
  }
  return (
    <main className={styles.page}>
      <nav className={styles.navBar}>
        <div className={styles.navStatic}>
          <p className={styles.navElm}>Recipe Planner</p>
        </div>
        <div className={styles.navDynamic}>
          <a href="#" className={styles.navElm}>Recipes</a>
          <a href="#" className={styles.navElm}>My Plan</a>
        </div>
          
      </nav>
      <br></br>
      <p className={styles.description}>plan your meals. Look up new recipes. Build your groceries</p>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <div className={styles.recipeCards}>
        { recipes.map( (recipe) => (
          <RecipeCard 
          key={recipe.id}
          recipe={recipe}/>
        ))}
      </div>
    </main>
  )
}