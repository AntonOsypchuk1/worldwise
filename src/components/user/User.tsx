'use client'

import styles from "./User.module.css";
import {useUser} from "@/services/AuthQueries/useUser";
import {useLogout} from "@/services/AuthQueries/useLogout";

const User = () => {
  const { user, isLoading: isLoadingUser } = useUser();
  const { logout, isLoading: isLoadingLogout } = useLogout();

  if (isLoadingLogout) return <div className={styles.user}>Loading...</div>;

  if (!user || isLoadingUser) return null;

  return (
    <div className={styles.user}>
      <img src={user?.avatar} alt={user?.name} />
      <span>Welcome, {user?.name}</span>
      <button onClick={() => logout()} disabled={isLoadingLogout}>
        Logout
      </button>
    </div>
  );
};

export default User;
