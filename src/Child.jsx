
// props = {username: 'scott', userId:343}
const Child = ({username, userId}) => {
    // const {username, userId} = props
    return (
        <div>
            <h2 className="">Child.js</h2>
            {/* {props.username}
            {props.userId} */}
            {username}
            {userId}
        </div>
    )
}

export default Child