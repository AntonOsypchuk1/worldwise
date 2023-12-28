import { API_URL } from "../../config";
import { IUser, IUserWithSession } from "@/types/user.interface";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<IUserWithSession> {
  let user;

  // 1. Getting user
  try {
    const res = await fetch(`${API_URL}/users`);
    const users = await res.json();

    user = users.filter(
      (user: IUser) => user.email === email && user.password === password,
    )[0];
  } catch (e) {
    throw new Error("There is an error loading data");
  }

  if (!user) {
    throw new Error("Wrong email or password");
  } else {
    user.session = true;
  }

  // 2. Setting user session
  try {
    await fetch(`${API_URL}/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({ session: true }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw new Error("There is an error activating session.");
  }

  return user;
}

export async function signup({
  name,
  email,
  password,
}: IUser): Promise<IUserWithSession> {
  let user;

  try {
    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        avatar: "https://i.pravatar.cc/100",
        session: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    user = await res.json();
  } catch (err) {
    throw new Error("There is an error registering a new user.");
  }

  return user;
}

export async function getCurrentUser(): Promise<IUserWithSession | null> {
  let user;

  try {
    const res = await fetch(`${API_URL}/users`);
    const users = await res.json();
    user = users.find((user: IUserWithSession) => user.session);
  } catch (e) {
    throw new Error("There is no session for user.");
  }

  if (!user) return null;

  return user;
}

export async function logout() {
  const user = await getCurrentUser();

  try {
    await fetch(`${API_URL}/users/${user?.id}`, {
      method: "PATCH",
      body: JSON.stringify({ session: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw new Error("There is an error with logout.");
  }
}
