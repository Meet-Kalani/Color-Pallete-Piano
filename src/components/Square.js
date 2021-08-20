import React from 'react';

const Square = (props) => {
    const bgColor = props.color

    const changeBg = () => {
        props.changeBg(props.color,props.id);
    }

    return (
        <div className="squareParent">
            <div className="square" style={{ background: bgColor }} onClick={changeBg}></div>
        </div>
    )
}

export default Square
