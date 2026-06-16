import type { PortfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';

type ContactProps = {
  personal: PortfolioData['personal'];
};

export default function Contact({ personal }: ContactProps) {
  return (
    <section className="section contact-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Connect with Kimberly"
        description="Available for data science, AI engineering, machine learning, and MLOps opportunities."
      />

      <div className="contact-grid">
        <a href={`mailto:${personal.email}`} className="contact-card">
          <span>Email</span>
          <strong>{personal.email}</strong>
        </a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-card">
          <span>LinkedIn</span>
          <strong>linkedin.com/in/kimberly-atta-peters-531531177</strong>
        </a>
        <a href={personal.github} target="_blank" rel="noreferrer" className="contact-card">
          <span>GitHub</span>
          <strong>github.com/Kimmyatta</strong>
        </a>
      </div>
    </section>
  );
}
