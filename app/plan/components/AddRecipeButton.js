"use client";
import { useState } from "react";
import styles from "./AddRecipeButton.module.css";
import {CircleX} from "lucide-react";

export default function AddRecipeButton(){
    const [open, setOpen] = useState(false);

    return(
        <>
        <button
        className={styles.addButton}
        onClick={()=> setOpen(true)}>
            Add Recipe
        </button>
        {open && (
            <div className={styles.picker}>
                <p>Select a Recipe</p>
            <button className={styles.closeButton}
            onClick={()=>setOpen(false)}>
                <CircleX size={20}></CircleX>
            </button>
            </div>
        )}
        </>
    )
}