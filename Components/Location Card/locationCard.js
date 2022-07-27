import styles from '../../styles/LocationCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function LocationCard (){
    return <div className={styles.card}>
        <img className={styles.card_img} src='/old_pale_hill.jpg'  alt="Location" />
        <section className={styles.card_details}>
                <h3 className={styles.title}>Old Pale Hill</h3>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <section className={styles.amenities_button}>        
                <section className={styles.amenities}>
                    <Image src='/wc.png' height={24} width={24}/>
                    <Image src='/wc.png' height={24} width={24}/> 
                    <Image src='/wc.png' height={24} width={24}/> 
                    <Image src='/wc.png' height={24} width={24}/>
                </section>
                <Link href='/location/1'><button className={styles.button}>More Info</button></Link>
            </section>

        </section>
    </div>
}