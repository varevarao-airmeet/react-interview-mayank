import React, { useContext } from 'react';
import Auth from '../context/Auth';
// import useFakeConnection from '../hooks/useFakeConnection';

function UserCard() {
  const userCurrentStatus = useContext(Auth);

  // React.useEffect(() => {
  //   userCurrentStatus.setCurrentStatus(useFakeConnection());
  // }, []);

  return (
    <div>
      <div>
        Name: {userCurrentStatus.user.name}
      </div>
      <div>
        Company: {userCurrentStatus.user.company}
      </div>
      <div>
        Location: {userCurrentStatus.user.location}
      </div>
      <div>
        Project: {userCurrentStatus.user.project}
      </div>
      <div>
        Current Status: {userCurrentStatus.status}
      </div>
    </div>
  )
}

export default UserCard
