import { Contact } from '../types/api/contact';

export async function fetchContacts(): Promise<Contact | undefined> {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/contact", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const contacts: Contact = await response.json();
    return contacts;
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    return undefined;
  }
}
