const FailureNotification = (props) => {
    const {objectProperty, message} = props

    // Styles
    const notificationStyle = {
        backgroundColor: 'lightgrey',
        borderStyle: 'solid',
        borderColor: 'red',
        borderRadius: 5,
        color: 'red'
    }

    if (objectProperty === null) {
        // message = null
        return null
    }else{
        return (
            <p style={notificationStyle}>
                Information of {objectProperty} {message}.
            </p>
        )
    }
}

export default FailureNotification;
