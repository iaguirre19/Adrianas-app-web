const FormHeader = ({ title, subTitle }) => {

    return (
    <div className="header-title-container">
      <h1 className="title-header">{title}</h1>
      <p className="subtitle-header">{subTitle}</p>
    </div>
  );
};

export default FormHeader