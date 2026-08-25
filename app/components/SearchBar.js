"use client";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import {Search} from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar({onSearch}){
    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(e){
        e.preventDefault();
        if (onSearch){
            onSearch(search);
        } else {
        router.push(`/?search=${encodeURIComponent(search)}`);
        }
    }

    return(
        <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
        className={styles.searchBar}
        type="text"
        placeholder="Search for recipes..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        >
        </input>
        <button className={styles.searchButton} type="submit"><Search size={22} strokeWidth={2.5}></Search></button>
        </form>
    );
}