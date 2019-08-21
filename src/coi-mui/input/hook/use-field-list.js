/* @flow */

import * as React from 'react';
import FieldManager from 'COI-MUI/input/FieldManager'

import { replaceAt } from 'coi-common-ui/core/coi-util-array';
import FieldManagerProps from 'COI-MUI/input/metadata/field-manager-props';
import { validateInputList } from 'coi-common-ui/core/coi-dict-validation-helper';

type FieldListProps = {
  fields: Array<FieldManagerProps>,
  onChange?: () => {},
  onFocus?: () => {},
  onListUpdate?: object => {}
};

/*
 * @desc: useFieldList is a custom hook that can manage data of associated field objects
 * @output: return public methods: renderField, getField, setField, getList
 * @event: onListUpdate is a custom event hook that update the list whenever there's change in input field
 *         onListUpdate takes a callback function with an object argument that includes { completed: Boolean, list: Array }
 */
function useFieldList({ fields, onChange, onFocus, onListUpdate } = FieldListProps) {
  const [list, setList] = React.useState(fields);

  /*
   * @desc: custom event hook that is fired after each change by input field
   */
  const handleListUpdate = () => {
    const { completed, list } = getList();

    if (onListUpdate) {
      onListUpdate({ completed, list });
    } else {
      setField('submit', { disabled: !completed });
    }
  };

  /*
   * @desc: handle change event on input field
   */
  const handleChange = changeField => {
    if (onChange) {
      onChange(changeField);
    } else {
      setField(changeField.name, changeField);
      handleListUpdate();
    }
  };

  /*
   * @desc: handle focus event on input field
   */
  const handleFocus = focusField => {
    if (onFocus) {
      onFocus(focusField);
    } else {
      setField(focusField.name, focusField);
    }
  };

  /*
   * @desc: return the complete field info per specified field name
   */
  const getField = fieldName => list.find(field => field.name === fieldName);

  /*
   * @desc: update field data per specified field name
   */
  const setField = (fieldName, options = {}) => {
    try {
      const field = getField(fieldName);
      Object.entries(options).forEach(entry => {
        const attr = entry[0], value = entry[1];

        // add condition here to check for undefined description
        // this hack is needed to display description list for password field
        if (value !== undefined) {
          Object.defineProperty(field, attr, {
            value, enumerable: true, writable: true
          });
        }
      });
      const index = list.findIndex(field => field.name === fieldName);
      const newList = replaceAt(index, list, field);
      setList(newList);

    } catch(error) {
      throw error;
    }
  };

  const renderField = (fieldName) => {
    const field = getField(fieldName);

    return FieldManager({
      ...field,
      onChange: field.onChange || handleChange,
      onFocus: field.onFocus || handleFocus
    });
  };

  const getList = () => {
    const completed = validateInputList(list);
    return { completed, list };
  };

  return { getField, setField, renderField, getList };
}

export default useFieldList;
