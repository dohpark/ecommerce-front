import React from "react";

interface SelectorProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  defaultValue?: string;
}

const defaultProps: SelectorProps = {
  options: [],
  disabledOptions: [],
  defaultValue: "",
};

const Selector: React.FC<SelectorProps> = ({
  options,
  disabledOptions,
  defaultValue,
}) => {
  return (
    <select defaultValue={defaultValue}>
      {disabledOptions.map((option, index) => (
        <option key={index} value={option} disabled>
          {option}
        </option>
      ))}
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
Selector.defaultProps = defaultProps;

export default Selector;
