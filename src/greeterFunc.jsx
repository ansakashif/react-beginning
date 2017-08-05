import React , {Component} from 'react';

//ES-5 
function Greeter(props) {
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}


//es-6 arrow functionss
export const Greeter = props => (
    <div><h1>{props.name}</h1></div>
);

Greeter.defaultProps = {
    name: 'Sudivya Thakkar'
}

//Props Constrain
Greeter.protoTypes = {
    message: ProtoTypes.string.isRequired
};