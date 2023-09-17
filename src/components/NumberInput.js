import React from 'react'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'

const NumberInput = ({
  name = '',
  onChange = () => {},
  value = undefined,
  disabled = false,
  className = '',
  allowNegative = true,
  onKeyDown = () => {},
  onBlur = () => {},
  decimal = false,
  autoFocus = false,
  isAllowed,
  invalid = false,
}) => {
  const classes = ['form-control']
  if (className) classes.push(className)
  if (invalid) classes.push('border-danger')
  return (
    <NumberFormat
      name={name}
      className={classes.join(' ')}
      allowNegative={allowNegative}
      thousandSeparator={'.'}
      decimalSeparator={','}
      disabled={disabled}
      value={value}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      autoFocus={autoFocus}
      isAllowed={isAllowed}
      onChange={(e) =>
        onChange({
          target: {
            name: e.target.name,
            value: decimal
              ? e.target.value || null
              : e.target.value
              ? parseInt(e.target.value.replace(/\./g, '').replace(/\,/g, ''))
              : null,
          },
        })
      }
    />
  )
}

NumberInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  allowNegative: PropTypes.bool,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  decimal: PropTypes.bool,
  autoFocus: PropTypes.bool,
  isAllowed: PropTypes.bool,
  invalid: PropTypes.bool,
}

export default NumberInput
