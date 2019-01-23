import { weatherTypes } from './weatherTypes';
import { weatherIcons } from './weatherIcons';

export const getCurrentIcon = icon => {
  const foundType = weatherTypes.find(type => icon.includes(type));

  return weatherIcons[foundType];
};
