import React from 'react';

const Header = () => {
  return (
    <div>
      <div style={{ width: 'calc(100% - 32px)', height: '72px', background: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>EY Yuma</span>
          <span style={{ marginLeft: '16px', fontWeight: 'bold' }}>Home</span>
          <span style={{ marginLeft: '16px', fontWeight: 'bold' }}>Dashboard</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '20px', height: '20px', border: '2px solid blue', marginRight: '8px', borderRadius: '4px' }}></div>
          <div style={{ width: '20px', height: '20px', border: '2px solid blue', marginRight: '8px', borderRadius: '4px' }}></div>
          <div style={{ width: '20px', height: '20px', border: '2px solid blue', marginRight: '8px', borderRadius: '4px' }}></div>
          <div style={{ width: '40px', height: '40px', backgroundColor: 'gray', borderRadius: '50%' }}></div>
        </div>
      </div>
      <div style={{ width: '100%', height: '1px', background: '#ccc' }}></div>
    </div>
  );
};

export default Header;
