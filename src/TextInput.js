let TextInput = (props) => {
    return (
        <div className="text-input">
            <label htmlFor={props.name}>{props.title}:</label>
                <input 
                    name={props.name} 
                    type={props.type ? props.type : "text"} 
                    placeholder={props.placeholder}>
                </input>
        </div>
    )
}

export default TextInput;