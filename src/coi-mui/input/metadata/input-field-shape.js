import getContent from 'coi-common-ui/core/coi-content';

const {
  INPUT_DESC_EMAIL, INPUT_DESC_NAME, INPUT_DESC_ORGANIZATION, INPUT_DESC_NEW_PASSWORD, INPUT_DESC_CONFIRM_PASSWORD, INPUT_DESC_PASSWORD_UPPERCASE, INPUT_DESC_PASSWORD_LOWERCASE, INPUT_DESC_PASSWORD_NUMERIC, INPUT_DESC_PASSWORD_LENGTH, INPUT_DESC_PASSWORD_NONWORD, INPUT_DESC_COUNTRY
} = getContent('input desc');
const {
  INPUT_LABEL_EMAIL, INPUT_LABEL_FIRST_NAME, INPUT_LABEL_LAST_NAME, INPUT_LABEL_COMPANY, INPUT_LABEL_NEW_PASSWORD, INPUT_LABEL_CONFIRM_PASSWORD, INPUT_LABEL_COUNTRY
} = getContent('input label');
const pristine = true, required = true, valid = true, value = '';

export const emailField = {
  pristine, valid, value,
  type: 'email',
  description: INPUT_DESC_EMAIL,
  label: INPUT_LABEL_EMAIL,
  validation: {
    required,
    type: 'dictField',
    specs: {
      dictField: 'email'
    }
  }
};

export const firstNameField = {
  pristine, valid, value,
  type: 'text',
  description: INPUT_DESC_NAME,
  label: INPUT_LABEL_FIRST_NAME,
  validation: {
    required,
    type: 'dictField',
    specs: {
      dictField: 'firstName'
    }
  }
};

export const lastNameField = {
  pristine, valid, value,
  type: 'text',
  description: INPUT_DESC_NAME,
  label: INPUT_LABEL_LAST_NAME,
  validation: {
    required,
    type: 'dictField',
    specs: {
      dictField: 'lastName'
    }
  }
};

export const countryField = {
  pristine, valid, value,
  type: 'autoComplete',
  label: INPUT_LABEL_COUNTRY,
  description: INPUT_DESC_COUNTRY,
  validation: {
    required,
    type: 'contains',
    specs: {
      dictField: 'userAddressCountry'
    }
  }
};

export const emailOptinField = {
  pristine: true,
  valid: true,
  value: '',
  type: 'radio',
  name: 'ciscoEmailOptin'
};

export const companyField = {
  pristine, valid, value,
  type: 'text',
  description: INPUT_DESC_ORGANIZATION,
  label: INPUT_LABEL_COMPANY,
  validation: {
    required,
    type: 'dictField',
    specs: {
      dictField: 'organization'
    }
  }
};

const newPasswordSpecs = [
  {
    required,
    type: 'regex',
    specs: {
      dictField: 'password_uppercase',
      description: INPUT_DESC_PASSWORD_UPPERCASE
    }
  },
  {
    required,
    type: 'regex',
    specs: {
      dictField: 'password_lowercase',
      description: INPUT_DESC_PASSWORD_LOWERCASE
    }
  },
  {
    required,
    type: 'regex',
    specs: {
      dictField: 'password_numeric',
      description: INPUT_DESC_PASSWORD_NUMERIC
    }
  },
  {
    required,
    type: 'length',
    specs: {
      dictField: 'password',
      description: INPUT_DESC_PASSWORD_LENGTH
    }
  },
  {
    required,
    type: 'regex',
    specs: {
      dictField: 'password_allowed_characters',
      description: INPUT_DESC_PASSWORD_NONWORD
    }
  }
];

export const newPasswordField = {
  pristine, valid, value,
  type: 'password',
  description: INPUT_DESC_NEW_PASSWORD,
  descriptionList: [
    { valid, status: 'empty', description: INPUT_DESC_PASSWORD_UPPERCASE },
    { valid, status: 'empty', description: INPUT_DESC_PASSWORD_LOWERCASE },
    { valid, status: 'empty', description: INPUT_DESC_PASSWORD_NUMERIC },
    { valid, status: 'empty', description: INPUT_DESC_PASSWORD_LENGTH },
    { valid, status: 'empty', description: INPUT_DESC_PASSWORD_NONWORD },
  ],
  label: INPUT_LABEL_NEW_PASSWORD,
  validation: {
    required,
    type: 'all',
    specs: {
      all: newPasswordSpecs
    }
  }
};

export const confirmPasswordField = {
  pristine, valid, value,
  type: 'password',
  description: INPUT_DESC_CONFIRM_PASSWORD,
  label: INPUT_LABEL_CONFIRM_PASSWORD,
  validation: {
    required,
    type: 'equal',
    specs: {
      equal: {
        name: 'newPassword',
        value: ''
      },
    }
  },
};

export const submitField = {
  name: 'submit',
  type: 'submit',
  color: 'primary',
  variant: 'contained',
  disabled: true
};
