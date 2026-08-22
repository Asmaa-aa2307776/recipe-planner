import RecipeCard from "@/app/components/RecipeCard";
import styles from "./page.module.css";
import Link from "next/link";
import {ArrowLeft, Home} from "lucide-react";


function SmokeLines(){
    return(
        <svg 
        className={styles.smokeDecorations}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMaxYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        >
          <style>{`
          .smokePath{
          fill:none;
          stroke: rgb(78, 60, 35);
          stroke-width:1.5;
          stroke-linecap: round;
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: drawSmoke 6s ease-in-out infinite;

          }
          .smokePath:nth-child(1) {animation-delay:0s;}
          .smokePath:nth-child(2) {animation-delay:1.2s;}
          .smokePath:nth-child(3) {animation-delay:2.4s;}
          .smokePath:nth-child(4) {animation-delay:3.6s;}
          .smokePath:nth-child(5) {animation-delay:4.8s;}
          .smokePath:nth-child(6) {animation-delay:0s;}
          .smokePath:nth-child(7) {animation-delay:2.4s;}

          @keyframes drawSmoke {
           0% { stroke-dashoffset: 900; opacity: 0 ;}
           10% {opacity: 1;}
           70% {stroke-dashoffset: 0; opacity: 1;}
           100% {stroke-dashoffset: 0; opacity:0;}
          }
          `}
        </style> 
            <path className="smokePath" d="M400,300 C340,280 160,250 130,190 C90,120 300,70 240,0" />
            <path className="smokePath" d="M400,285 C320,260 200,240 150,175 C95,105 260,60 180,0" />
            <path className="smokePath" d="M400,270 C350,240 140,220 110,155 C70,80 290,40 160,0" />
            <path className="smokePath" d="M400,255 C310,230 220,200 170,135 C110,55 240,30 120,0" />
            <path className="smokePath" d="M400,240 C360,210 130,195 95,125 C50,45 310,20 220,0" />
            <path className="smokePath" d="M400,225 C300,200 210,170 155,105 C95,30 270,10 140,0" />
            <path className="smokePath" d="M400,210 C345,185 155,160 115,95 C65,15 295,5 200,0" />
        </svg>
    )
}

function SmokeLinesBottom(){
    return(
        <svg 
        className={styles.smokeDecorationsBottom}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMaxYMax meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        >
          <style>{`
          .smokePathBottom{
          fill:none;
          stroke: rgb(78, 60, 35);
          stroke-width:1.5;
          stroke-linecap: round;
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: drawSmoke 6s ease-in-out infinite;

          }
          .smokePathBottom:nth-child(1) {animation-delay:0s;}
          .smokePathBottom:nth-child(2) {animation-delay:1.2s;}
          .smokePathBottom:nth-child(3) {animation-delay:2.4s;}
          .smokePathBottom:nth-child(4) {animation-delay:3.6s;}
          .smokePathBottom:nth-child(5) {animation-delay:4.8s;}
          .smokePathBottom:nth-child(6) {animation-delay:0s;}
          .smokePathBottom:nth-child(7) {animation-delay:2.4s;}

          @keyframes drawSmoke {
           0% { stroke-dashoffset: 900; opacity: 0 ;}
           10% {opacity: 1;}
           70% {stroke-dashoffset: 0; opacity: 1;}
           100% {stroke-dashoffset: 0; opacity:0;}
          }
          `}
        </style> 
        <path className="smokePathBottom" d="M400,0 C340,20 160,50 130,110 C90,180 300,230 240,300" />
        <path className="smokePathBottom" d="M400,15 C320,40 200,60 150,125 C95,195 260,240 180,300" />
        <path className="smokePathBottom" d="M400,30 C350,60 140,80 110,145 C70,220 290,260 160,300" />
        <path className="smokePathBottom" d="M400,45 C310,70 220,100 170,165 C110,245 240,270 120,300" />
        <path className="smokePathBottom" d="M400,60 C360,90 130,105 95,175 C50,255 310,280 220,300" />
        <path className="smokePathBottom" d="M400,75 C300,100 210,130 155,195 C95,270 270,290 140,300" />
        <path className="smokePathBottom" d="M400,90 C345,115 155,140 115,205 C65,285 295,295 200,300" />
        </svg>
    )
}

async function RecipePage({params}){
    const {id} = await params;

    const response = await fetch(
        `https://recipeapi.io/api/v1/recipes/${id}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.RECIPE_API_KEY}`,
            },

            next: {
                revalidate:604800,
            }
        }
    );

    const data = await response.json();
    const recipe=data.data;


    return(
        <main className={styles.page}>
            <Link href="/" className={styles.homeButton}>
            <Home size={40}></Home>
            </Link>

            <SmokeLines></SmokeLines>
            <SmokeLinesBottom></SmokeLinesBottom>
            <div className={styles.recipeContent}>
            <h1 className={styles.title}>{recipe.name}</h1>
            <br></br>

            <p className={styles.description}>{recipe.description}</p>
            <br></br>
            <div className={styles.info}>
            <p>Difficulty: {recipe.difficulty}</p>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Servings: {recipe.servings}</p>
            <p>Calories: {recipe.calories_per_serving}</p>
            <p>Protein: {recipe.protein}g</p>
            <p>Prep time: {recipe.prep_time} min</p>
            <p>Cook time: {recipe.cook_time} min</p>
            </div>
            <br></br>
            <h2>Ingredients:</h2>
            <br></br>
            <div className={styles.ingredientList}>
            <ul>
                {recipe.ingredients.map((ingredient)=>(
                    <li key={ingredient.id}>
                        {ingredient.quantity} {ingredient.unit} {ingredient.name}
                    </li>
                ))}
            </ul>
            </div>
            <br></br>
            <h2>Instructions:</h2>
            <br></br>
        
            <ol className={styles.instructionsList}>
                {recipe.instructions.map((instruction, index)=>(
                    <li key={index}>{instruction}</li>
                ))}

            </ol>
            </div>

        </main>
    )
}

export default RecipePage;