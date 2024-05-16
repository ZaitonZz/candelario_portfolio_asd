// utils/fetch-cards.ts
import { Card } from '../types/api/card';

export async function fetchCardByTableNum(tableNum: number): Promise<Card | null> {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/card', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const cards: Card[] = await response.json();

    const filteredCards = cards
      .filter(card => card.table_num === tableNum)
      .sort((a, b) => a.id - b.id);

    return filteredCards.length > 0 ? filteredCards[0] : null;
  } catch (error) {
    console.error('Failed to fetch card:', error);
    return null;
  }
}
