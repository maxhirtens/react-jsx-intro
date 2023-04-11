const Tweet = (props) => {
    return (
        <ul>
            <li>Message: {props.msg}</li>
            <li>Date: {props.date}</li>
            <li>By: {props.name} - {props.username}</li>
        </ul>
    )
}