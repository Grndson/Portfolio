import React from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from './Portfolio.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const Projects = () => {
  return (
    <div className="App">

      {/* ── Top nav ──────────────────────────────────────────────────────── */}
      <div style={{
        padding: '20px 10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Fixed: use public path instead of import from assets */}
        <img src="/Logo.svg" alt="Logo" className="logo" />
        <Link
          to="/"
          style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <i className="fas fa-arrow-left" style={{ fontSize: '12px' }}></i>
          Back to home
        </Link>
      </div>

      {/* ── Project grid ─────────────────────────────────────────────────── */}
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <h1 className="sub-title">All Projects</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '10px', marginBottom: '50px' }}>
          {allProjects.length} {allProjects.length === 1 ? 'project' : 'projects'}
        </p>

        <div className="work-list">
          {allProjects.map((project) => (
            <div className="work" key={project.id}>
              <img src={project.img} alt={project.title} />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <div className="copyright">
        <p>Copyright &copy; Edmund {new Date().getFullYear()}</p>
      </div>

    </div>
  );
};

export default Projects;