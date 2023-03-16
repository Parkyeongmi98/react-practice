import React from 'react';
import styles from './assets/css/Searchbar.css'

export default function Searchbar({callbackKeyword}) {
    return (
        <div className={styles.Searchbar}>
            <input 
                type='text' 
                placeholder='찾기'
                onChange={e => callbackKeyword(e.target.value)} />
        </div>
    );
};
