import React from "react";

/**
 * An alert component for showing different
 * alerts on the site 
 */

function Alert({ type="danger", messages=[] }) {
    return (
      <div className={`alert alert-${type}`} role="alert">
        {messages.map(error => (
          <p key={error} className="mb-0 small">
            {error}
          </p>
        ))}
      </div>
    );
}

export default Alert;