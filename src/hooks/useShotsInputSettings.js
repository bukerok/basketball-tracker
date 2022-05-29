import { DEFAULT_SETTINGS } from '../helpers/constants/shotsInputs';
import useLocalStorage from './useLocalStorage';

export default function useShotsInputSettings(storageKey) {
  return useLocalStorage(storageKey, DEFAULT_SETTINGS);
}
