import {API_URL} from "../../config";

export async function login({email, password}) {
  let user;

  // 1. Getting user
  try {
    const res = await fetch(`${API_URL}/users`);
    const users = await res.json();

    user = users.filter((user) => user.email === email && user.password === password)[0]
  } catch (e) {
    throw new Error("There is an error loading data")
  }

  if (!user) {
    throw new Error("Wrong email or password")
  } else {
    user.session = true;
  }

  // 2. Setting user session
  try {
    await fetch(`${API_URL}/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({session: true}),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw new Error("There is an error activating session.")
  }

  return user;
}

export async function signup(newUser) {
  let user;

  try {
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        ...newUser,
        avatar: 'https://i.pravatar.cc/100',
        session: true
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    user = await res.json()
  } catch (err) {
    throw new Error("There is an error registering a new user.")
  }

  return user;
}

export async function getCurrentUser() {
  let user;

  try {
    const res = await fetch(`${API_URL}/users`);
    user = await res.json();
    user = user.find(
      user => user.session === true
    );
  } catch (e) {
    throw new Error("There is no session for user.")
  }

  return user;
}

export async function logout(user) {
  try {
    await fetch(`${API_URL}/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({session: false}),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw new Error("There is an error with logout.")
  }
}