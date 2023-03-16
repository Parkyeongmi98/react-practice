import React from 'react';

const Email = ({no, firstName, lastName, email, callbackDelEmail}) => {
    return (
        <li>
            {firstName+lastName}
            <br/>
            {email}
            <a href='' onClick={(e) => {
                                e.preventDefault();
                                callbackDelEmail(no)
                                }}></a>
        </li>
    );
};

export default Email;

