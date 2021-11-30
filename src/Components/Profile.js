import "../css/profile.css";
import "../css/App.css";

function Profile() {
  return (
    <div className="profile-background">
      <div className="profile-div">
        <div className="profile-grid">
          <div className="columnPic">
            <img
              className="headProfilePic"
              src="../images/KariFitz.jpeg"
              alt="Kari Fitzgerald Senior Loan Officer"
            />
          </div>
          <div>
            <h1 className="profileName">Linda Skehan</h1>
            <h2 className="NMLS">Senior Loan Officer (NMLS #247303)</h2>
            <p className="profileP">
              Hello! I’m Linda, I look forward to helping you along your home
              buying experience. I’ve provided a few useful links to get you
              started.
            </p>
            <div className="buttonBlueDiv">
              <a href="#getStarted" className="buttonBlue">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
