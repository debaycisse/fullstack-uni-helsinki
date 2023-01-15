const SuccessNotification = (props) => {
    const {objectProperty, message} = props

    // Styles
    const notificationStyle = {
        backgroundColor: 'lightgrey',
        borderStyle: 'solid',
        borderColor: 'green',
        borderRadius: 5,
        color: 'green'
    }

    if (objectProperty === null) {
        // message = null
        return null
    }else{
        return (
            <p style={notificationStyle}>
                {objectProperty} {message}.
            </p>
        )
    }
}

export default SuccessNotification;
