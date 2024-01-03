
module.exports = function (migration) {
    const atLink = migration
      .createContentType('at-link')
      .name('at-link')
      .description('')
      .displayField('name');
  
    atLink
      .createField('name')
      .name('Name')
      .type('Symbol')
      .localized(false)
      .required(true)
      .validations([])
      .disabled(false)
      .omitted(false);
  };  
