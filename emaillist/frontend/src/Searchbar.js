import React from 'react';
import styles from './assets/css/Searchbar.css'

const Searchbar = () => {
    return (
        <div>
            <div className={styles.Searchbar}>
                <input type='text' placeholder='찾기' className={styles.input}/>
            </div>
        </div>
    );
};

export default Searchbar;