/* @flow */

export type FieldManagerProps = {
  name: string,
  type: string,
  label: string,
  helperText: string,
  value?: string,
  required: boolean,
  valid: boolean,
  pristine: boolean,
  validation: object,
  onBlur?: (field: object) => void,
  onChange?: (field: object) => void,
  onFocus?: (field: object) => void
};
