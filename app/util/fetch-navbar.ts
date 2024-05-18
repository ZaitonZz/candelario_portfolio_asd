import { NavBar } from '../types/api/navbar';

export async function fetchNavBar(): Promise<NavBar> {
    const response = await fetch("http://127.0.0.1:8000/api/nav", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const navbar: NavBar = await response.json();
    return navbar;

}
