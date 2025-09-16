import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";


import PokemonPic from "../assets/pikachu.png"
import LocationPic from "../assets/pointer.png"
import ItemsPic from "../assets/pokeball.png"


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={PokemonPic} alt="Pokemons"/>
                Pokemons
            </Link>
            <Link onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/items">
                <img className={styles.footerIcon} src={ItemsPic} alt="Pokeball"/>
                Items
            </Link>
            <Link onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/location">
                <img className={styles.footerIcon} src={LocationPic} alt="Location"/>
                Hap
            </Link>
        </footer>
    );
};

export default Footer;