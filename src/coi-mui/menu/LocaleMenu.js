/* @flow */

import * as React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import LanguageIcon from '@material-ui/icons/Language';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

import { pure } from 'recompose';
import localeInfoList from 'coi-common-ui/core/coi-locale-list';
import './stylesheet/language-menu.scss';

type LocaleMenuProps = {
  locales: Array<object>,
  selection: string
}

const LocaleMenu = ({
  locales = localeInfoList,
  selection
} = LocaleMenuProps) => {
  const localeIndex = locales.findIndex(locale => locale.name === selection);
  const [open, setOpen] = React.useState(false);
  const [selectionIndex, setSelectionIndex] = React.useState(localeIndex);
  const anchorRef = React.useRef(null);

  const toggleMenu = () => {
    setOpen(curState => !curState);
  }

  const closeMenu = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  }

  const setLocaleSelection = (event, index) => {
    setSelectionIndex(index);
    setOpen(false);
  }

  const renderLocaleMenu = () => {
    return (
      <MenuList variant="selectedMenu">
        {locales.map(({ label, country }, index) => (
          <MenuItem
            className="menu-item-border"
            key={index}
            selected={index === selectionIndex}
            onClick={event => setLocaleSelection(event, index)}
          >{label}</MenuItem>
        ))}
      </MenuList>
    )
  }

  const { language, country } = locales[selectionIndex];

  return (
    <div className="language-menu">
      <Button aria-controls="language-menu-expand" aria-haspopup="true" ref={anchorRef} onClick={toggleMenu}>
        <LanguageIcon />{language}<br />{country}
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} placement="top-end" transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps}>
            <Paper id="language-menu-expand">
              <ClickAwayListener onClickAway={closeMenu}>
                {renderLocaleMenu()}
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default pure(LocaleMenu);
