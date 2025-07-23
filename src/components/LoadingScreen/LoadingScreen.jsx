import "./LoadingScreen.css";

const LoadingScreen = () => (
  <div className="loading-overlay">
    <div className="spinner"></div>
    <h1>Loading...</h1>
    <p>Please wait while we load the content.</p>
  </div>
);

export default LoadingScreen;
