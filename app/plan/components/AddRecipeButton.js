"use client";
import { useState } from "react";
import styles from "./AddRecipeButton.module.css";
import { CircleX } from "lucide-react";
import SearchBar from "@/app/components/SearchBar";
import Link from "next/link";

export default function AddRecipeButton({ day, meal }) {
    const [open, setOpen] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    async function searchRecipes(search) {
        const response = await fetch(
            `/api/recipes?search=${encodeURIComponent(search)}`
        )

        const data = await response.json();
        setRecipes(data);
        setSelectedRecipe(null);
    }

    return (
        <>
            <button
                className={styles.addButton}
                onClick={() => setOpen(true)}>
                Add Recipe
            </button>
            {open && (
                <div className={styles.picker}>
                    <p>Add a recipe to:</p>
                    <p>{day} — {meal} </p>
                    <SearchBar onSearch={searchRecipes}></SearchBar>
                    <div className={styles.searchedRecipes}>
                        {recipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className={styles.recipe}
                                onClick={() => {
                                    setSelectedRecipe(recipe)
                                    setRecipes([])
                                }
                                }
                            >
                                <h3>{recipe.name}</h3>
                                <p>{recipe.description}</p>
                                <small>
                                    {recipe.difficulty} · {recipe.cuisine} · {recipe.calories_per_serving} cal
                                </small>
                            </div>
                        ))}
                    </div>

                    {selectedRecipe && (
                        <div className={styles.selectedRecipe}>
                            <p>Selected:</p>
                            <h3>{selectedRecipe.name}</h3>
                            <p>{selectedRecipe.description}</p>
                                <small>
                                    {selectedRecipe.difficulty} · {selectedRecipe.cuisine} · {selectedRecipe.calories_per_serving} cal
                                </small>
                                <Link className={styles.viewLink} href= {`/recipes/${selectedRecipe.id}`}>
                                    View Recipe →
                                </Link>
                        </div>
                    )}

                    <button className={styles.closeButton}
                        onClick={() => setOpen(false)}>
                        <CircleX size={20}></CircleX>
                    </button>
                </div>
            )}
        </>
    )
}