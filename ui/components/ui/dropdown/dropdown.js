import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IconCaretDown from '../icon/icon-caret-down';

const Dropdown = ({
  className,
  disabled = false,
  onChange,
  options,
  selectedOption = null,
  style,
  title,
}) => {
  const _onChange = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <div className="dropdown-container">
      <select
        className={classnames('dropdown', className)}
        disabled={disabled}
        title={title}
        onChange={_onChange}
        style={style}
        value={selectedOption}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name || option.value}
            </option>
          );
        })}
      </select>
      <IconCaretDown
        size={16}
        className="dropdown-container__icon-caret-down"
      />
    </div>
  );
};

Dropdown.propTypes = {
  /**
   * Additional css className to add to root of Dropdown component
   */
  className: PropTypes.string,
  /**
   * Disable dropdown by setting to true
   */
  disabled: PropTypes.bool,
  /**
   * Title of the dropdown
   */
  title: PropTypes.string,
  /**
   * On options change handler
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Predefined options for component
   */
  options: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /**
   * Selected options of dropdown
   */
  selectedOption: PropTypes.string,
  /**
   * Add inline style for the component
   */
  style: PropTypes.object,
};

export default Dropdown;
