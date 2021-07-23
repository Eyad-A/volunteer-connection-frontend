import React from "react";

/**
 * An alert component for showing different
 * alerts on the site 
 */

function Alert({ type="danger", messages=[] }) {
  console.debug("Alert", "type=", type, "messages=", messages);
    return (
      <div className={`col-lg-9 my-2 alert alert-${type}`} role="alert">
        {messages.map(error => (
          <p key={error} className="mb-0 small">
            {error}
          </p>
        ))}
      </div>
    );
}

export default Alert;