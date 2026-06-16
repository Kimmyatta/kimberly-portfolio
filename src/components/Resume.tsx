import type { PortfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';

type ResumeProps = {
  resume: PortfolioData['resume'];
};

export default function Resume({ resume }: ResumeProps) {
  return (
    <section className="section resume-section" id="resume">
      <div>
        <SectionHeading
          eyebrow="Resume"
          title="Download the resume"
          description="Review a concise PDF summary of Kimberly's AI, data, analytics, and MLOps experience."
        />
      </div>
      <a className="button button--primary" href={resume.path} target="_blank" rel="noreferrer">
        Open {resume.label}
      </a>
    </section>
  );
}
