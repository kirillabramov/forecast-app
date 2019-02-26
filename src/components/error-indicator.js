import React from 'react';

const ErrorIndicatior = _ => {
  return (
    <div className="error-indicator">
      <p className="error-indicator__text">
        Probably there is no such city in the list or problems with network:(
      </p>
      <p className="error-indicator__text">We will fix it as soon as possible 4 you :)</p>
    </div>
  );
};

export default ErrorIndicatior;
