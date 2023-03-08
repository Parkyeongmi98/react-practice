import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';

function MyComponent({props01, props02}) {
    return (
        <Fragment>
            <h2>Property Validation</h2>
            <span>props01: {props01 ? props01 : '--- not set ---'}</span>
            <br/>
            <span>props02: {props02 ? props02 : '--- not set ---'}</span>
            <br/>
        </Fragment>
    );
}

// property type and required -> Error는 안나고 warning
MyComponent.propTypes = {
    props01: PropTypes.string,              // propType을 string으로 설정, 다른 타입을 넣으면 warning
    props02: PropTypes.number.isRequired    // isRequired: 필수 -> 없으면 warning
}

// property default value -> 디폴트값 설정
MyComponent.defaultProps = {
    props01: '기본값'
}

export default MyComponent;