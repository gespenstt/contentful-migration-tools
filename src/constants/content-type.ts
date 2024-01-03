export const TCT_SCRIPT = `
module.exports = function (migration) {
    const {elementCamelCase} = migration
      .createContentType('{element}')
      .name('{element}')
      .description('')
      .displayField('name');
  
    {elementCamelCase}
      .createField('name')
      .name('Name')
      .type('Symbol')
      .localized(false)
      .required(true)
      .validations([])
      .disabled(false)
      .omitted(false);
  };  
`;

export const TCT_EDITED_SCRIPT = `
module.exports = function (migration) {
  const {elementCamelCase} = migration.editContentType("{element}");
};
`;

export const TCT_REF_SCRIPT = `
module.exports = [
  \`${__dirname}/../src/{type}/{element}/{epoch}-{element}-content-type.js\`,
];
`;

export const TCT_REF_EDITED_SCRIPT = `
module.exports = [
  \`${__dirname}/../src/{type}/{element}/{epoch}-{element}-content-type--edited.js\`,
];
`;

export const TCT_REF_CLEAN_SCRIPT = `
module.exports = [];
`;
