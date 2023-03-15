import React, { useState } from 'react';
import './assets/css/App.css';
import data from './assets/json/data.json'
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App() {
    const [emails, setEmails] = useState(data);
    const notifyKeywordChanged = function(keyword) {
        // keyword가 firstname or lastname or email에 있으면 화면에 출력
        const emails = data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1);
        setEmails(emails);
      }

    return (
        <div id='App' className={'App'}>
            <RegisterForm />
            <Searchbar callback={notifyKeywordChanged} />
            <Emaillist emails={emails}/>
        </div>
    );
}

export default App;
