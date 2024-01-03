import * as fs from 'fs';

export const getFirstEpoch = (
  basePath: string,
  type: string,
  element: string,
): string | undefined => {
  try {
    const pathElement = `${basePath}/src/${type}/${element}`;
    const files = fs.readdirSync(pathElement);
    const firstFile = files.find((value) => value.endsWith(`${element}-content-type.js`));
    if (firstFile) {
      return firstFile.replace(`-${element}-content-type.js`, '');
    }
    return undefined;
  } catch (error) {
    console.log('getFirstEpoch error', error)
    return undefined;
  }
};
