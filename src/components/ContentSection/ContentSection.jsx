// ContentSection.jsx
import React from 'react';
import { Quote } from 'lucide-react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <div className="content-section">
      <div className="content-wrapper">
        <header className="content-header">
          <h1>The Evolutionary Chronicle</h1>
          <p className="subtitle">Exploring the Remarkable Connection Between Baboons and Humans: A Journey Through Time</p>
        </header>

        <article className="main-content">
          <h2>Tracing Our Shared Origins</h2>
          <div className="content-grid">
            <div className="content-column">
              <p className="lead-paragraph">
                Through millions of years of evolution, the paths of humans and baboons have been intricately intertwined. Our journey begins 30 million years ago with the emergence of Old World Monkeys, marking a pivotal moment in primate evolution. This period witnessed the development of distinctive features that would shape both species: binocular vision, enhanced color perception, and the foundations of social structure.
              </p>
              <p>
                As we traverse through time to 15 million years ago, we encounter the emergence of early Papio species - the ancestors of modern baboons. This era marked significant adaptations to terrestrial lifestyle and the development of complex social hierarchies that mirror aspects of human society.
              </p>
            </div>
            <div className="content-column">
              <p>
                The critical evolutionary split occurred approximately 8 million years ago, yet the parallels between humans and baboons remain striking. From shared ancestral traits to similar patterns in infant care and cognitive development, our species continue to exhibit remarkable similarities.
              </p>
              <blockquote className="quote-block">
                The story of baboons is, in many ways, our own story – a testament to the enduring connections that bind us to our evolutionary past.
              </blockquote>
            </div>
          </div>
        </article>

        <section className="research-section">
          <h2>Current Research Insights</h2>
          <div className="content-grid">
            <div className="content-column">
              <h3>Social Structures</h3>
              <p>
                Modern research reveals intricate parallels between human and baboon social organizations. From hierarchical systems to complex coalition formations, these similarities provide valuable insights into the evolution of social behavior.
              </p>
              <ul className="research-list">
                <li>Hierarchical organization patterns</li>
                <li>Matrilineal inheritance systems</li>
                <li>Coalition formations</li>
                <li>Conflict resolution strategies</li>
              </ul>
            </div>
            <div className="content-column">
              <h3>Cognitive Development</h3>
              <p>
                Studies in cognitive development highlight remarkable similarities in problem-solving capabilities and learning patterns between humans and baboons, suggesting shared evolutionary roots in intelligence.
              </p>
              <ul className="research-list">
                <li>Problem-solving capabilities</li>
                <li>Tool use observations</li>
                <li>Learning patterns</li>
                <li>Decision-making processes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="featured-quote">
          <Quote className="quote-icon" size={32} />
          <blockquote>
            "One fact is indisputable: for the first time in history we, humans, completely control the future of baboons."
          </blockquote>
          <cite>- Shirley Strum, Kenya, 2009</cite>
        </section>

        <section className="environmental-section">
          <h2>Environmental Adaptation & Survival</h2>
          <p className="section-intro">
            The remarkable adaptability of baboons to various environments mirrors human capabilities for survival across diverse landscapes. Their ability to thrive in different habitats demonstrates the evolutionary advantages of behavioral flexibility and social cooperation.
          </p>
          <div className="content-grid">
            <div className="content-column">
              <h3>Habitat Flexibility</h3>
              <p>
                From savannas to forests, baboons demonstrate extraordinary adaptability to diverse environments, showcasing survival strategies that parallel early human migrations.
              </p>
            </div>
            <div className="content-column">
              <h3>Resource Utilization</h3>
              <p>
                Strategic resource management and tool usage among baboon populations provides insights into the development of human cognitive abilities and survival strategies.
              </p>
            </div>
          </div>
        </section>

        <footer className="content-footer">
          <p>Published in The Evolutionary Chronicle | Volume 23, Issue 4 | November 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default ContentSection;