import React from 'react';

export default ({ title, children }) => {
  return (
    <div style={{ padding: '36px 0', borderBottom: '2px solid #000' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
