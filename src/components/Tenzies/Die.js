import React from "react";

const Pip = () => <span className="pip" />;

const Face = (props) => {
    const style = {backgroundColor: props.isHeld ? "#59E391" : "white"}
    return (
    <div
        className="face"
        onClick={props.handleClick}
        style={style}
    >{props.children}</div>
    )
}

const Die = (props) => {
    const handleClick = (id) => props.handleClick(id);
	let pips = Number.isInteger(props.value)
		? Array(props.value)
				.fill(0)
				.map((_, i) => <Pip key={i} />)
		: null;
	return <Face handleClick={handleClick} isHeld={props.isHeld}>{pips}</Face>;
};

export default Die;
