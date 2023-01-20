import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const alertVar = word.toLowerCase();
        return alertVar.charAt(0).toUpperCase() + alertVar.slice(1);
    }
  return (
    // here this is new syntax .....if props.alert is correct then only further will work, example if props.alert is null the div not received.
    props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        </div>
    </div>
  )
}

export default Alert