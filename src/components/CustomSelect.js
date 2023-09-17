import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const CustomSelect = (props) => {
  return (
    <Select
      isSearchable={true}
      styles={{
        menu: (provided) => ({ ...provided, zIndex: 9999999 }),
        control: (provided) => ({
          ...provided,
          border: props.invalid ? '1px solid red' : '',
        }),
      }}
      {...props}
    />
  )
}

CustomSelect.propTypes = {
  invalid: PropTypes.bool,
}

export default CustomSelect
