import "./LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="loader-inner"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
