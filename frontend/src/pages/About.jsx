import "../Components/Pages.css";

export default function About() {
  return (
    <div className="page about-page">
      <div className="page-header about-header">
        <h1>About <span>AlgoMate</span></h1>
        <p>Master Data Structures & Algorithms with structured practice, progress tracking, and curated resources.</p>
      </div>

      <div className="page-content">
        <section className="card about-section">
          <h2>Our Mission</h2>
          <p>
            AlgoMate helps students grow their problem-solving skills step by step. 
            With categorized problems (Easy, Medium, Hard) and detailed progress tracking, 
            we make learning structured, trackable, and enjoyable.
          </p>
        </section>

        <section className="card vision-section">
          <h2>Our Vision</h2>
          <p>
            To empower every student to become confident in algorithms and data structures, 
            achieving success in coding interviews and real-world problem solving.
          </p>
        </section>
      </div>
    </div>
  );
}
