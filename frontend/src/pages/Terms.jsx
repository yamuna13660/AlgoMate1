import "../Components/Pages.css";

export default function Terms() {
  return (
    <div className="page terms-page">
      <div className="page-header terms-header">
        <h1>Terms & <span>Conditions</span></h1>
        <p>Please read our terms carefully before using the platform.</p>
      </div>

      <div className="page-content">
        <section className="card terms-section">
          <p>
            AlgoMate is an educational platform intended for learning and practice purposes only. 
            Users are responsible for their own use of the platform. Any misuse may result in account suspension.
          </p>
          <p>
            We do not guarantee job placement or interview success. Users must comply with our guidelines and policies.
          </p>
        </section>
      </div>
    </div>
  );
}
