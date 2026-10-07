import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Check, Sparkles, Sprout, Star, TreePine } from "lucide-react";
import "./styles.css";

const habits = ["Read 20 minutes", "Brush your teeth", "Finish homework", "Drink water"];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#">
          <span className="brand-mark"><Sprout size={19} strokeWidth={2.5} /></span>
          <span>Sapling</span>
        </a>
        <a className="nav-link" href="#how">How it works</a>
        <a className="nav-cta" href="#join">Join the waitlist <ArrowRight size={15} /></a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> Small habits. Big growth.</div>
          <h1>Help good habits<br /><em>take root.</em></h1>
          <p className="hero-text">
            Sapling turns everyday responsibilities into a fun journey kids actually
            want to come back to — one habit, one streak, one little win at a time.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#join">Get early access <ArrowRight size={17} /></a>
            <a className="text-btn" href="#how">See how it works</a>
          </div>
          <div className="trust">
            <div className="avatars">
              <span>R</span><span>A</span><span>K</span><span>+</span>
            </div>
            <span>Building better routines, together.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Sapling habit preview">
          <div className="glow" />
          <div className="tree-card">
            <div className="tree-top">
              <span className="mini-label">Raghav's garden</span>
              <span className="level">Level 07</span>
            </div>
            <div className="tree-scene">
              <div className="sun" />
              <div className="cloud cloud-a" />
              <div className="cloud cloud-b" />
              <div className="tree">
                <div className="crown crown-1" />
                <div className="crown crown-2" />
                <div className="crown crown-3" />
                <div className="trunk" />
              </div>
              <div className="ground" />
              <div className="flower flower-a">✦</div>
              <div className="flower flower-b">✿</div>
            </div>
            <div className="progress-row">
              <div>
                <span>Today's growth</span>
                <strong>78%</strong>
              </div>
              <div className="progress"><i /></div>
            </div>
          </div>

          <div className="floating-card streak">
            <span className="streak-icon">🔥</span>
            <div><strong>7 day streak</strong><small>Keep growing!</small></div>
          </div>

          <div className="floating-card xp">
            <span className="xp-icon"><Star size={16} fill="currentColor" /></span>
            <div><strong>+25 XP</strong><small>Habit completed</small></div>
          </div>
        </div>
      </section>

      <section className="strip">
        <span>Built around the things that matter</span>
        <div><b>📚 Learning</b><b>💪 Health</b><b>🧼 Routines</b><b>🎨 Hobbies</b><b>💚 Wellbeing</b></div>
      </section>

      <section className="how" id="how">
        <div className="section-heading">
          <span className="eyebrow">HOW SAPLING WORKS</span>
          <h2>Turn everyday things into <em>little wins.</em></h2>
          <p>Less nagging. More momentum. Sapling makes progress visible and rewarding.</p>
        </div>

        <div className="steps">
          <article>
            <div className="step-number">01</div>
            <div className="step-icon"><Check /></div>
            <h3>Pick a habit</h3>
            <p>Choose simple, age-appropriate habits that fit your family's routine.</p>
          </article>
          <article>
            <div className="step-number">02</div>
            <div className="step-icon"><Star /></div>
            <h3>Make progress</h3>
            <p>Complete habits, build streaks and collect XP for every small win.</p>
          </article>
          <article>
            <div className="step-number">03</div>
            <div className="step-icon"><TreePine /></div>
            <h3>Watch it grow</h3>
            <p>Every bit of progress helps your Sapling grow into something bigger.</p>
          </article>
        </div>
      </section>

      <section className="habit-preview">
        <div>
          <span className="eyebrow">ONE DAY AT A TIME</span>
          <h2>Progress doesn't have to feel like a chore.</h2>
          <p>Give kids a visual reason to keep going. Every completed habit adds a little more life to their world.</p>
          <div className="check-list">
            {habits.map((habit) => <div key={habit}><span><Check size={14} /></span>{habit}</div>)}
          </div>
        </div>
        <div className="quote-card">
          <div className="quote-mark">“</div>
          <p>When kids can see their progress, even the smallest habit starts to feel meaningful.</p>
          <div className="quote-author"><div className="author-dot">S</div><span><strong>The idea behind Sapling</strong><small>Grow a little every day.</small></span></div>
        </div>
      </section>

      <section className="join" id="join">
        <div className="join-sprout"><Sprout size={28} /></div>
        <span className="eyebrow">COMING SOON</span>
        <h2>Be there from the first leaf.</h2>
        <p>We're building Sapling for families who believe small habits can grow into big things.</p>
        <form onSubmit={(e) => { e.preventDefault(); alert("You're on the list 🌱"); }}>
          <input type="email" required placeholder="Your email address" aria-label="Email address" />
          <button type="submit">Join the waitlist <ArrowRight size={16} /></button>
        </form>
        <small>No spam. Just occasional updates as Sapling grows.</small>
      </section>

      <footer>
        <a className="brand" href="#"><span className="brand-mark"><Sprout size={17} /></span><span>Sapling</span></a>
        <span>Made with 🌱 for better days.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
