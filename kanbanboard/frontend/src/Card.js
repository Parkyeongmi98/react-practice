import React, { useState } from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no, title, description, tasks}) => {
    const [showDetail, setShowDetail] = useState('');

    return (
        <div className={styles.Card}>
            <div className={styles.Card__Title}>{title}</div>
            {
                showDetail ?
                    <div className={styles.Card__Details}>
                        {description}
                        <TaskList tasks={tasks}/> 
                    </div> : null
            }
        </div>
    );
};

export default Card;