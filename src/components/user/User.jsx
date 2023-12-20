import styles from './User.module.css'
import {useUser} from "@/services/AuthQueries/useUser";
import {useLogout} from "@/services/AuthQueries/useLogout";

const User = () => {
  const { user, isLoading: isLoadingUser } = useUser()
  const { logout, isLoading: isLoadingLogout } = useLogout()

  function handleClick() {
    logout();
  }

  if (isLoadingUser || isLoadingLogout)
    return (
      <div className={styles.user}>
        Loading...
      </div>
    );

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;