import React from 'React';
import Auth, { CONNECTED_STATUS } from '../context/Auth';
import { connectFake } from '../utils/connect';
/**
 * This function should
 * 1. use the current user under the `Auth` context,
 * 2. Only the first time: call the `connectFake` function under `src/utils/connect.js` using this user
 * 3. Return 'NOT-CONNECTED', or 'CONNECTED' depending on the connection result
 */
async function useFakeConnection() {
  const currentStatus = React.useContext(Auth);
  const fetchStatus = await connectFake(currentStatus.user.name);

  if (fetchStatus) {
    currentStatus.setCurrentStatus(CONNECTED_STATUS.CONNECTED);
  } else {
    currentStatus.setCurrentStatus(CONNECTED_STATUS.NOT_CONNECTED);
  }
  // return currentStatus.status.toUpperCase();
}

export default useFakeConnection
