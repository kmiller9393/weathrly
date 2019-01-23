import { weatherTypes } from './weatherTypes';
import { weatherIcons } from './weatherIcons';

export const getTenDayIcons = icon => {
  const foundType = weatherTypes.find(type => type === icon);

  return weatherIcons[foundType];
};
