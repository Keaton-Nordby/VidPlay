"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css"
import SignIn from "./sign-in";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import Upload from "./upload";

// closure 

export default function Navbar() {

    // user state
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user); 
        })

        return () => unsubscribe();
    });


    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={100} height={70}
                    src="/logo.png" alt="VidPlay" />
            </Link>
            {
                user && <Upload />
            }
            
            <SignIn user={user}/>
        </nav>
    );
}