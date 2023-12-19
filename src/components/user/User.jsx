import styles from './User.module.css'
import {useUser} from "@/services/AuthQueries/useUser";
import {useLogout} from "@/services/AuthQueries/useLogout";

const User = () => {
  const { user } = useUser()
  const { logout, isLoading } = useLogout()

  function handleClick() {
    logout(user);
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;