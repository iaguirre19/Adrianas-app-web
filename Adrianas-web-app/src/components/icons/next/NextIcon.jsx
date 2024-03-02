import './NextIconStyle.css'

const NextIcon = ({color}) => {
  return (
    <svg className="next-icon" fill={color} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g >
        <path d="M32 55.9C18.8 55.9 8.1 45.2 8.1 32S18.8 8.1 32 8.1 55.9 18.8 55.9 32 45.2 55.9 32 55.9zm0-45.2c-11.7 0-21.3 9.6-21.3 21.3S20.3 53.3 32 53.3 53.3 43.7 53.3 32 43.7 10.7 32 10.7z" />
        <path d="M31.5 45.7l-1.8-1.9L41.4 32 29.7 20.2l1.8-1.9L45.2 32 31.5 45.7" />
        <path d="M43.3 33.4h-24v-2.8h24z" />
      </g>
    </svg>
  );
}

export default NextIcon