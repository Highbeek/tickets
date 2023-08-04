import React from "react";
import PropTypes from "prop-types";

const InputLabel = ({
  htmlFor,
  label,
  icon: Icon,
  placeholder,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col mb-3">
      {label && (
        <label
          htmlFor={htmlFor}
          className="font-semibold text-gray-500 "
        >
          {label}
        </label>
      )}
      <label
        htmlFor={htmlFor}
        className="flex bg-white items-center pl-5 gap-5 rounded-md mb-2"
      >
        {Icon && <Icon color="gray" size={24} />}
        <input
          type="text"
          placeholder={placeholder}
          className="w-96 py-4 text-left placeholder-gray-400 text-lg font-semibold focus:outline-none"
          {...inputProps}
        />
      </label>
    </div>
  );
};

InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.elementType,
  placeholder: PropTypes.string.isRequired,
};

export default InputLabel;
