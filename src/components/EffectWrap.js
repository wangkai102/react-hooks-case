import React from 'react';

export default ({ title, children }) => {
  return (
    <div style={{ paddingBtttom: 18 }}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};
