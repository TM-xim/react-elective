import React, {useState, useEffect}  from 'react';
import {userService} from "../../../services";
import SettingsProfileForm from "../../../components/settings/SettingsProfileForm";

const SettingsProfile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    userService.getMe().then(
      user => setUser(user)
    ).finally(() => {
      setLoading(false)
    })
  },[])

  return (
    <div>
      {
        !loading && (
          <SettingsProfileForm user={user} />
        )
      }
    </div>
  );
};

export default SettingsProfile;