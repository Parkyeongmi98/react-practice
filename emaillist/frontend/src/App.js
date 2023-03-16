import React, { useEffect, useState } from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App() {
    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        try {
            const response = await fetch('/api/emaillist', {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            setEmails(json.data);
            
        } catch(err) {
            console.log(err.message);
        }
    }

    const addEmail = async (firstName, lastName, email) => {
        const newEmail = {
            no: null,
            firstName: firstName,
            lastName: lastName,
            email: email
        }

        try {
            const response = await fetch('/api/emaillist', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmail)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            setEmails([json.data, ...emails]);
            
        } catch(err) {
            console.log(err.message);
        }
    }

    const delEmail = async (no) => {
        try {
            const response = await fetch(`/api/emaillist/${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                }   
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            const newEmails = emails.filter((email) => email.no !== no);
            setEmails(newEmails);
            
        } catch(err) {
            console.log(err.message);
        }
    }

    const notifyKeywordChanged = async (keyword) => {
        // keyword가 firstname or lastname or email에 있으면 화면에 출력
        // const emails = data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1);
        
        try {
            const response = await fetch(`/api/emaillist/${keyword}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                }   
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            setEmails(json.data);
            
        } catch(err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <div id='App' className={'App'}>
            <RegisterForm callbackAddEmail={addEmail}/>
            <Searchbar callbackKeyword={notifyKeywordChanged} />
            <Emaillist emails={emails} callbackDelEmail={delEmail} />
        </div>
    );
}

export default App;
