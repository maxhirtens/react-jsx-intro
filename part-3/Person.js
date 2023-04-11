const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person.</p>
            <h3>Name: {props.name.length >= 6 ? props.name.slice(0, 6) : props.name}</h3>
            <h3>Age: {props.age} - {props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>
            <h3>Hobbies:</h3>
            <ul>
                {props.hobbies.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}