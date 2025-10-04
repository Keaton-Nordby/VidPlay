import Image from "next/image";
import styles from "./navbar.module.css"
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={100} height={70}
                    src="/logo.png" alt="VidPlay" />
            </Link>
        </nav>
    );
}