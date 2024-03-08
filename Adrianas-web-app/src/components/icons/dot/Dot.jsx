import PropTypes from "prop-types";
import './DotStyle.css'

const DotIcon = ({color, width}) =>  {
  return (
    <svg className="progress-dot" viewBox="0 0 20 20" fill={color} width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="M7.8 10a2.2 2.2 0 004.4 0 2.2 2.2 0 00-4.4 0z" />
    </svg>
  );
}

export default DotIcon

