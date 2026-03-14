const BLUE = '#1D4ED8';
const BLUE_LIGHT = '#EFF6FF';
const BLUE_MID = '#93C5FD';
const BLUE_BORDER = '#BFDBFE';
const GREEN_DARK = '#166534';
const GREEN_LIGHT = '#F0FDF4';
const GREEN_MID = '#86EFAC';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase' as const,
      color: BLUE,
      marginBottom: '0.3rem',
    }}>
      {children}
    </p>
  );
}

function SectionHeading({ children, size = 'md' }: { children: React.ReactNode; size?: 'sm' | 'md' | 'lg' }) {
  const fontSize = size === 'lg' ? 'clamp(1.3rem, 2.2vw, 1.65rem)'
    : size === 'sm' ? '1rem'
    : 'clamp(1.1rem, 1.9vw, 1.4rem)';
  return (
    <h3 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize,
      color: '#1a1714',
      lineHeight: 1.25,
      letterSpacing: '-0.015em',
      marginBottom: '0.65rem',
    }}>
      {children}
    </h3>
  );
}

function Divider() {
  return <div style={{ width: '100%', height: 1, backgroundColor: BLUE_BORDER, margin: '2.25rem 0' }} />;
}

function DecisionBlock({ number, question, children }: {
  number: string;
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.9rem' }}>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700,
          letterSpacing: '0.16em', color: BLUE, textTransform: 'uppercase' as const,
          paddingTop: '0.32rem', flexShrink: 0,
        }}>
          {number}
        </span>
        <SectionHeading size="sm">{question}</SectionHeading>
      </div>
      {children}
    </div>
  );
}

function FeatureTag({ children, color = BLUE, bg, border }: { children: React.ReactNode; color?: string; bg?: string; border?: string }) {
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: 20,
      backgroundColor: bg ?? `${color}18`, border: `1px solid ${border ?? color}`,
      fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 500,
      color, whiteSpace: 'nowrap' as const,
    }}>
      {children}
    </span>
  );
}

export function TrevorModalContent() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── 1. Project Overview ─────────────────────────────────── */}
      <section>
        <SectionLabel>Project Overview</SectionLabel>
        <SectionHeading size="lg">The Trevor Project</SectionHeading>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
          Partnered with The Trevor Project — the U.S.'s largest national LGBTQ+ youth suicide
          prevention hotline — to design an internal database that helps crisis counselors find
          appropriate health resources personalized for each caller in real time.
        </p>
      </section>

      <Divider />

      {/* ── 2. Problem ──────────────────────────────────────────── */}
      <section>
        <SectionLabel>Problem</SectionLabel>
        <SectionHeading>How do counselors find the right resource in a crisis moment?</SectionHeading>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
          The Trevor Project lacked a consolidated internal database of resources for LGBTQ+ youth
          facing mental health challenges. During crisis calls, counselors had to search the web
          in real time to find resources matching a caller's unique needs — a fragmented, high-stakes
          process that introduced unnecessary friction when every second matters.
        </p>
      </section>

      <Divider />

      {/* ── 3. Prototype ────────────────────────────────────────── */}
      <section>
        <SectionLabel>Prototype</SectionLabel>
        <div style={{
          width: '100%', height: 260, backgroundColor: BLUE_LIGHT,
          border: `1.5px dashed ${BLUE_MID}`, borderRadius: 12,
          display: 'flex', flexDirection: 'column' as const,
          alignItems: 'center', justifyContent: 'center', gap: 5,
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: BLUE, opacity: 0.55 }}>
            Prototype Video
          </p>
        </div>
      </section>

      <Divider />

      {/* ── 4. Design Decisions ─────────────────────────────────── */}
      <section>
        <SectionLabel>Design Decisions</SectionLabel>
        <SectionHeading size="lg">Three decisions that shaped the system</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2.5rem', marginTop: '1.25rem' }}>

          {/* Decision 01 */}
          <DecisionBlock number="01" question="What categories of resources should the database include?">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
              Grounded in research and gender studies knowledge, resources were organized into four
              top-level buckets — each reflecting the distinct urgency and nature of caller needs.
            </p>

            {/* Tree layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>

              {/* Physical Health */}
              <div style={{ padding: '0.85rem 1rem', borderRadius: 10, backgroundColor: BLUE_LIGHT, borderLeft: `3px solid ${BLUE_MID}` }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.73rem', fontWeight: 600, color: BLUE, marginBottom: '0.5rem' }}>Physical Health</p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.35rem' }}>
                  <FeatureTag>Gender Affirming Care</FeatureTag>
                  <FeatureTag>Sexual Health Resources</FeatureTag>
                  <FeatureTag>Sexual Assault Resources</FeatureTag>
                  <FeatureTag>Housing-Related Resources</FeatureTag>
                  <FeatureTag>Substance Abuse Recovery</FeatureTag>
                </div>
              </div>

              {/* Mental Health */}
              <div style={{ padding: '0.85rem 1rem', borderRadius: 10, backgroundColor: BLUE_LIGHT, borderLeft: `3px solid ${BLUE_MID}` }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.73rem', fontWeight: 600, color: BLUE, marginBottom: '0.5rem' }}>Mental Health</p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.35rem' }}>
                  <FeatureTag>Therapeutic Services</FeatureTag>
                  <FeatureTag>Peer Support Networks</FeatureTag>
                  <FeatureTag>Educational & Informative</FeatureTag>
                  <FeatureTag>Alternative Care</FeatureTag>
                </div>
              </div>

              {/* Crisis Support */}
              <div style={{ padding: '0.85rem 1rem', borderRadius: 10, backgroundColor: '#fdf0f2', borderLeft: '3px solid #E8B4BC' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.73rem', fontWeight: 600, color: '#C4365A', marginBottom: '0.4rem' }}>Crisis Support</p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.35rem' }}>
                  <FeatureTag color="#C4365A" bg="#fce4ec" border="#E8B4BC">Walk-in Crisis</FeatureTag>
                  <FeatureTag color="#C4365A" bg="#fce4ec" border="#E8B4BC">Mobile Crisis</FeatureTag>
                  <FeatureTag color="#C4365A" bg="#fce4ec" border="#E8B4BC">Local Crisis Line</FeatureTag>
                </div>
              </div>

            </div>
          </DecisionBlock>

          {/* Decision 02 */}
          <DecisionBlock number="02" question="How should counselors filter by geographic location?">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
              Based on workflows surfaced through user interviews, counselors needed to search at
              different geographic granularities depending on what the caller was willing to disclose.
              Three search modes were designed as parallel options in the same row.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              {/* Left: image */}
              <div style={{ flex: 1, flexShrink: 0 }}>
                <img src="/images/Location.png" alt="Location filtering" style={{ width: '75%', borderRadius: 8, display: 'block', marginLeft: '1.5rem' }} />
              </div>
              {/* Right: filter options */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
                {[
                  { label: 'Search by State', detail: 'For overall resource recommendations, or when the caller does not want to disclose their exact location.' },
                  { label: 'Search by County', detail: 'For callers who share their county — narrows results to locally available services.' },
                  { label: 'Search by Zip Code', detail: 'Most precise option — surfaces resources within a defined mile radius of the caller\'s zip code.' },
                ].map((item) => (
                  <div key={item.label} style={{ padding: '0.85rem 1rem', borderRadius: 10, backgroundColor: BLUE_LIGHT, borderLeft: `3px solid ${BLUE_MID}` }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.73rem', fontWeight: 600, color: BLUE, marginBottom: '0.3rem' }}>{item.label}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: '#4a5568', fontWeight: 300, lineHeight: 1.6 }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </DecisionBlock>

          {/* Decision 03 */}
          <DecisionBlock number="03" question="How should the database surface the most relevant resources?">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
              When a counselor applies multiple filters, resources matching more criteria are visually
              prioritized — making the most relevant results immediately visible without requiring
              manual scanning.
            </p>
            <div style={{ padding: '0.85rem 1rem', borderRadius: 10, backgroundColor: GREEN_LIGHT, borderLeft: `3px solid ${GREEN_MID}` }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.73rem', fontWeight: 600, color: GREEN_DARK, marginBottom: '0.3rem' }}>Highlighting Logic</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#166534', fontWeight: 300, lineHeight: 1.65 }}>
                A resource matching <strong>2 or more</strong> selected categories is highlighted.
                Resources matching <strong>3 or more</strong> categories are highlighted in dark green —
                signaling the strongest fit for the caller's needs.
              </p>
            </div>
            <div style={{
              width: '100%', height: 200, backgroundColor: BLUE_LIGHT,
              border: `1.5px dashed ${BLUE_MID}`, borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: BLUE, opacity: 0.5 }}>
                Feature Video
              </p>
            </div>
          </DecisionBlock>

        </div>
      </section>

    </div>
  );
}
