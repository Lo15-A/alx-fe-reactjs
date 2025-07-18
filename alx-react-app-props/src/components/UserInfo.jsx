import { useContext } from 'react';
import { UserContext } from '../UserContext';

function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Information</h2>
      <p>{user.name} - {user.email}</p>
    </div>
  );
}

export default UserInfo;
