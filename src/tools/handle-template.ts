import {
  TCT_SCRIPT,
  TCT_EDITED_SCRIPT,
  TCT_REF_SCRIPT,
  TCT_REF_EDITED_SCRIPT,
  TCT_REF_CLEAN_SCRIPT,
} from '../constants/content-type';
import { FILES_CONTENT } from '../types/commons';

export const getContent = (type: FILES_CONTENT): string => {
  let output = '';
  switch (type) {
    case FILES_CONTENT.TCT_SCRIPT:
      output = TCT_SCRIPT;
      break;
    case FILES_CONTENT.TCT_EDITED_SCRIPT:
      output = TCT_EDITED_SCRIPT;
      break;
    case FILES_CONTENT.TCT_REF_SCRIPT:
      output = TCT_REF_SCRIPT;
      break;
    case FILES_CONTENT.TCT_REF_EDITED_SCRIPT:
      output = TCT_REF_EDITED_SCRIPT;
      break;
    case FILES_CONTENT.TCT_REF_CLEAN_SCRIPT:
      output = TCT_REF_CLEAN_SCRIPT;
      break;
  }
  return output;
};

export const getPath = (
  type: FILES_CONTENT,
  element: string,
  elementType?: string,
  epoch?: number,
): string => {
  let output = '';

  switch (type) {
    case FILES_CONTENT.TCT_SCRIPT:
      output = `/src/${elementType}/${epoch}-${element}-content-type.js`;
      break;
    case FILES_CONTENT.TCT_EDITED_SCRIPT:
      output = `/src/${elementType}/${epoch}-${element}-content-type--edited.js`;
      break;
    case FILES_CONTENT.TCT_REF_SCRIPT:
      output = `/content-types/${element}-content-type.js`;
      break;
  }
  return output;
};

export const parseContent = (
  content: string,
  element: string,
  elementType: string,
  epoch: number,
): string => {
  let output = content;
  if (element) {
    const elementAsCamelCase = element.replace(/-./g, (x) => x[1].toUpperCase());
    output = output.replace(/{element}/g, element);
    output = output.replace(/{elementCamelCase}/g, elementAsCamelCase);
  }
  if (elementType) {
    output = output.replace(/{type}/g, elementType);
  }
  if (epoch) {
    output = output.replace(/{epoch}/g, epoch);
  }

  return output;
};
