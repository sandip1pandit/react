import React from 'react';

function Alert({ alert, onClose }) {
  if (!alert) return null;

  // A robust capitalize function that safely handles undefined or empty strings
  const capitalize = (word) => {
    if (!word) return '';
    const lower = word.toString().toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(alert.type)}</strong> {alert.msg}
      <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
    </div>
  );
}

export default Alert;

