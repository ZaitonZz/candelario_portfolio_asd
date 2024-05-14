import { Record } from '../types/api/record';

export async function fetchRecordsByTableNum(tableNum: number): Promise<Record[]> {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const records: Record[] = await response.json();

    return records
      .filter(record => record.table_num === tableNum)
      .sort((a, b) => a.position - b.position);
  } catch (error) {
    console.error('Failed to fetch records:', error);
    return [];
  }
}
