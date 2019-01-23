import { weatherTypes } from './weatherTypes';
import { weatherIcons } from './weatherIcons';

export const getSevenHourIcons = icon => {
  const foundType = weatherTypes.find(type => type === icon);

  return weatherIcons[foundType];
};
