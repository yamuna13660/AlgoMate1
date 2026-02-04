import "../Components/Pages.css";

export default function Contact() {
  return (
    <div className="page support-page">
      {/* HEADER */}
      <div className="page-header">
        <h1>Help & Support</h1>
        <p>
          Find answers to common questions and learn how to get help with AlgoMate.
        </p>
      </div>

      {/* CONTENT */}
      <div className="page-content">

        {/* FAQ SECTION */}
        <section>
          <h2>❓ Frequently Asked Questions</h2>

          <p>
            <strong>Do I need to pay?</strong><br />
            No. AlgoMate is completely free to use.
          </p>

          <p>
            <strong>How is my progress saved?</strong><br />
            Your progress is securely stored in your account and linked to your login.
          </p>

          <p>
            <strong>Do I need an account?</strong><br />
            Yes. Creating an account allows you to track progress and continue anytime.
          </p>
        </section>

        {/* BUG REPORT */}
        <section>
          <h2>🐞 Found a Bug?</h2>
          <p>
            If you encounter any issues or unexpected behavior, please report it on our GitHub repository.
          </p>

          <a
            href="https://github.com/yamuna13660"
            target="_blank"
            rel="noopener noreferrer"
            className="support-link"
          >
            Report an Issue on GitHub
          </a>
        </section>

        {/* CONTACT INFO */}
        <section>
          <h2>📧 Contact Email</h2>
          <p>
            For important matters only:
            <br />
            <strong>support@algomate.com</strong>
          </p>

          <p style={{ fontSize: "13px", color: "#aaa" }}>
            (Replies are not guaranteed)
          </p>
        </section>

      </div>
    </div>
  );
}
