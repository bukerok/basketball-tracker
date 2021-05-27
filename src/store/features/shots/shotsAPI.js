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
};

export async function add(record) {
  return (await dbPromise).add(OBJ_NAME, record);
};
