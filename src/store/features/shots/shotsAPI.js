import { openDB } from 'idb';

const OBJ_NAME = 'shots';

const dbPromise = openDB('shots', 1, {
  upgrade(db) {
    db.createObjectStore(OBJ_NAME, {
      keyPath: 'date',
    });
  },
});

export async function getAll() {
  return (await dbPromise).getAll(OBJ_NAME);
}

export async function add(record) {
  return (await dbPromise).add(OBJ_NAME, record);
}

export async function addAll(records) {
  const db = await dbPromise;
  const tx = db.transaction(OBJ_NAME, 'readwrite');

  return Promise.all([
    ...records.map((record) => {
      return tx.store.put(record);
    }),
    tx.done,
  ]);
}

export async function remove(key) {
  return (await dbPromise).delete(OBJ_NAME, key);
}
