import logoLight from '../design-system/assets/Logos/arcadia-logo.svg'
import logoDark from '../design-system/assets/Logos/arcadia-logo-dark.svg'

export function App() {
  return (
    <main className="game-app">
      <header className="site-header">
        <a className="brand-mark" href="./" aria-label="Arcadia, startpagina">
          <img className="logo-light" src={logoLight} alt="Arcadia scholen" />
          <img className="logo-dark" src={logoDark} alt="Arcadia scholen" />
        </a>
        <span className="header-label">Spelavond</span>
      </header>

      <section className="welcome" aria-labelledby="welcome-title">
        <div className="welcome-copy">
          <p className="label welcome-eyebrow">SAMEN SPELEN</p>
          <h1 className="h1" id="welcome-title">
            Wie zit goed?
          </h1>
          <p className="lead welcome-description">
            Beantwoord de quizvragen. Voorspel wie het juiste antwoord weet.
          </p>
        </div>
        <div className="welcome-mark" aria-hidden="true">
          <span className="mark-line mark-line-one" />
          <span className="mark-line mark-line-two" />
          <span className="mark-core">?</span>
          <span className="mark-node mark-node-one" />
          <span className="mark-node mark-node-two" />
          <span className="mark-node mark-node-three" />
        </div>
      </section>
    </main>
  )
}