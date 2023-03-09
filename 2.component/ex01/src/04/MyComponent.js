import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';

function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08, props09}) {
    return (
        <Fragment>
            <h2>Property Validation</h2>

            <span>props01: {props01 ? props01 : '--- not set ---'}</span>
            <br/>

            <span>props02: {props02 ? props02 : '--- not set ---'}</span>
            <br/>

            <span>props03: {props03 ? `${props03}` : '--- not set ---'}</span>
            <br/>

            <span>props04: {props04 ? props04.name : '--- not set ---'}</span>
            <br/>

            <span>props05: {props05.map((e, i) => <b key={i}>{e}</b>)}</span>
            <br/>

            <span>props06: {props06 ? props06() : '--- not set ---'}</span>
            <br/>

            <span>props07: {props07 ? props07 : '--- not set ---'}</span>
            <br/>

            <span>props08: {props08.map((e, i) => <b key={i}>{`${e}`}</b>)}</span>
            <br/>

            <span>
                {'props09: '} 
                {
                    props09 ? 
                        <div>
                            <h3>{props09.no}</h3>
                            <h4>{props09.name}</h4>
                            <h5>{props09.email}</h5>
                        </div> : 
                        <strong>
                            {'--- not set ---'}
                        </strong>
                }
            </span>
        </Fragment>
    );
}

// property type and required -> Error는 안나고 warning
MyComponent.propTypes = {
    // JavaScript Data Type
    props01: PropTypes.string,              // propType을 string으로 설정, 다른 타입을 넣으면 warning
    props02: PropTypes.number.isRequired,   // isRequired: 필수 -> 없으면 warning
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    // Combined with JavaScript Data Type
    props07: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,      // propType이 number이거나 string 둘 중 하나여야 한다.
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09: PropTypes.shape({
        no: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })

}

// property default value -> 디폴트값 설정
MyComponent.defaultProps = {
    props01: '기본값',
    props02: 10,
    props03: false,
    props04: {},
    props05: [],
    props06: () => {}  // dumy function(더미함수)
}

export default MyComponent;