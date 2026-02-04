import "../Components/Pages.css";

export default function Privacy() {
  return (
    <div className="page privacy-page">
      <div className="page-header privacy-header">
        <h1>Privacy <span>Policy</span></h1>
        <p>Your privacy is our top priority. Read how we handle your data.</p>
      </div>

      <div className="page-content">
        <section className="card privacy-section">
          <p>
            We collect only the necessary information (name, email, progress) to provide a personalized experience. 
            Your data is stored securely and never sold or shared with third parties.
          </p>
          <p>
            We use industry-standard measures to protect your information and ensure privacy.
          </p>
        </section>
      </div>
    </div>
  );
}
