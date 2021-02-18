import React from 'react';

const SettingsProfileForm = ({user}) => {
  return (
    <div>
      Name : {user.name}
    </div>
  );
};

export default SettingsProfileForm;