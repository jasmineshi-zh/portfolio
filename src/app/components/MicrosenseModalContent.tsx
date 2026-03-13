// Image paths — place your assets in public/images/microsense/
// Screenshots: decision-1-screenshot.png, decision-2-screenshot.png, decision-3-screenshot.png
// GIFs:        decision-1.gif, decision-2.gif, decision-3.gif

const PINK = '#C4365A';
const PINK_LIGHT = '#fdf0f2';
const PINK_MID = '#E8B4BC';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.72rem',
        letterSpacing: '0.16em',
        textTransform: 'uppercase' as const,
        color: PINK,
        fontWeight: 600,
        marginBottom: '0.35rem',
      }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
        color: '#1a1714',
        lineHeight: 1.25,
        letterSpacing: '-0.015em',
        marginBottom: '0.65rem',
      }}
    >
      {children}
    </h3>
  );
}

function Divider() {
  return <div style={{ width: '100%', height: 1, backgroundColor: '#f0c8d0', margin: '2rem 0' }} />;
}

interface AssetPlaceholderProps {
  label: string;
  hint: string;
  height?: number | string;
  isGif?: boolean;
}

function AssetPlaceholder({ label, hint, height = 200, isGif = false }: AssetPlaceholderProps) {
  return (
    <div
      style={{
        width: '100%',
        height,
        backgroundColor: isGif ? '#f5f3ff' : PINK_LIGHT,
        border: `1.5px dashed ${isGif ? '#a78bfa' : PINK_MID}`,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.68rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          textTransform: 'uppercase' as const,
          color: isGif ? '#7c3aed' : PINK,
          opacity: 0.6,
        }}
      >
        {label}
      </p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.62rem', color: '#9a928c', opacity: 0.7 }}>
        {hint}
      </p>
    </div>
  );
}

const decisions = [
  {
    number: '01',
    title: 'Reflection-First Interaction Design',
    caption:
      'Subtle bias and microaggressions often occur in complex social contexts where interruptions could increase discomfort or tension. By surfacing insights after interactions through timelines and summaries, the system supports thoughtful reflection without disrupting conversations.',
    screenshotHint: 'public/images/microsense/decision-1-screenshot.png',
    gifHint: 'public/images/microsense/decision-1.gif',
    imageSrc: '/images/microsense/Reflect.png',
    secondaryImageSrc: '/images/microsense/Patterns.png',
    staggeredFeatures: { leftIndices: [1], rightIndices: [0] },
    uiFeatures: [
      { label: 'Conversation Timeline', detail: 'A scrollable post-interaction view maps moments chronologically, letting users revisit exchanges on their own time.' },
      { label: 'Insight Summary Cards', detail: 'Aggregated daily and weekly summaries replace per-moment notifications, reducing alert fatigue.' },
      { label: 'Delayed Delivery', detail: 'Insights are queued and surfaced at a quiet moment — not mid-conversation — preserving the social context.' },
    ],
  },
  {
    number: '02',
    title: 'Multi-Signal Detection',
    caption:
      'Microaggressions are highly contextual and difficult to detect through language alone. Integrating multiple signals allows the system to capture both external interaction patterns and internal emotional responses, producing more meaningful insights.',
    screenshotHint: 'public/images/microsense/decision-2-screenshot.png',
    gifHint: 'public/images/microsense/decision-2.gif',
    imageSrc: '/images/microsense/Speech.png',
    secondaryImageSrc: '/images/microsense/Self_Doc.png',
    staggeredFeatures: { leftIndices: [2], rightIndices: [0, 1] },
    uiFeatures: [
      { label: 'Speech Pattern Detection', detail: 'Analyzes interruptions, tone shifts, and word-choice patterns through passive audio processing.' },
      { label: 'Wearable Physiological Signals', detail: 'Heart rate variability and skin conductance from a paired wearable capture the user\'s internal stress response.' },
      { label: 'Self-Documentation', detail: 'Optional manual logging lets users add context to detected signals, improving personalization over time.' },
    ],
  },
  {
    number: '03',
    title: 'Privacy-Centered Monitoring',
    caption:
      'Because the system interacts with sensitive social data, protecting user privacy and preventing surveillance was a core priority. These safeguards ensure the tool remains focused on personal awareness rather than monitoring others.',
    screenshotHint: 'public/images/microsense/decision-3-screenshot.png',
    gifHint: 'public/images/microsense/decision-3.gif',
    imageSrc: '/images/microsense/Privacy.png',
    secondaryImageSrc: '/images/microsense/Consent.png',
    staggeredFeatures: { leftIndices: [2, 1], rightIndices: [0] },
    secondaryImageOffset: '6rem',
    uiFeatures: [
      { label: 'On-Device Processing', detail: 'All signal analysis runs locally — no audio or raw sensor data is ever transmitted to external servers.' },
      { label: 'Manual Monitoring Controls', detail: 'Users start and stop sensing manually via a dedicated toggle; sensing never activates automatically.' },
      { label: 'Consent Confirmation', detail: 'An explicit confirmation prompt appears before each monitoring session begins, reinforcing user agency.' },
    ],
  },
];

export function MicrosenseModalContent() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── 1. Project Overview ─────────────────────────────────── */}
      <section>
        <SectionLabel>Project Overview</SectionLabel>
        <SectionHeading>Microsense</SectionHeading>
        <p className="text-sm leading-relaxed" style={{ color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
          Microsense is a wearable product concept that detects moments of subtle bias through
          speech patterns and physiological signals, transforming micro-moments into personalized
          insights that support individual reflection and cultivate long-term social awareness.
        </p>
      </section>

      <Divider />

      {/* ── 2. Problem ──────────────────────────────────────────── */}
      <section>
        <SectionLabel>Problem</SectionLabel>
        <SectionHeading>How do we surface invisible social patterns?</SectionHeading>
        <p className="text-sm leading-relaxed" style={{ color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
          Bias is rarely overt — it lives in pauses, word choices, shifts in posture, and
          interruptions we barely notice ourselves making. Traditional bias training is episodic,
          decontextualized, and fails to create lasting behavioral change. The challenge was to
          design a system that surfaces these invisible signals without shame or disruption.
        </p>
      </section>

      <Divider />

      {/* ── 3. Prototype Video ──────────────────────────────────── */}
      <section>
        <SectionLabel>Prototype</SectionLabel>
        <video
          src="/images/MicroSense_Prototype.mp4"
          controls
          style={{ width: '100%', borderRadius: '8px', display: 'block' }}
        />
      </section>

      <Divider />

      {/* ── 4. Design Decisions ─────────────────────────────────── */}
      <section>
        <SectionLabel>Design Decisions</SectionLabel>
        <SectionHeading>Key decisions that shaped the experience</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '1.5rem' }}>
          {decisions.map((d) => (
            <div key={d.number}>
              {/* Decision header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.6rem' }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    color: PINK,
                    textTransform: 'uppercase' as const,
                    paddingTop: '0.35rem',
                    flexShrink: 0,
                  }}
                >
                  {d.number}
                </span>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
                    color: '#1a1714',
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {d.title}
                </p>
              </div>

              {/* Caption */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem',
                  color: '#7a7068',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginBottom: '1.25rem',
                  paddingLeft: '2.5rem',
                }}
              >
                {d.caption}
              </p>

              {'imageSrc' in d && d.imageSrc && 'secondaryImageSrc' in d && d.secondaryImageSrc && 'staggeredFeatures' in d && d.staggeredFeatures ? (
                /* Staggered multi-screen composition */
                (() => {
                  const sf = d.staggeredFeatures as { leftIndices: number[]; rightIndices: number[] };
                  return (
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', paddingLeft: '2.5rem' }}>
                      {/* Left column: tall screen → feature boxes */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' as const, gap: '1.25rem' }}>
                        <img src={d.imageSrc} alt={d.title} style={{ width: '100%', borderRadius: 8, display: 'block' }} />
                        {sf.leftIndices.map((i) => (
                          <div key={i} style={{ padding: '0.75rem 1rem', borderRadius: 10, backgroundColor: PINK_LIGHT, borderRight: `3px solid ${PINK_MID}` }}>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: PINK, marginBottom: '0.2rem' }}>{d.uiFeatures[i].label}</p>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#5a4a44', lineHeight: 1.55, fontWeight: 300 }}>{d.uiFeatures[i].detail}</p>
                          </div>
                        ))}
                      </div>
                      {/* Right column: feature boxes → tall screen */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' as const, gap: '1.25rem', marginTop: '2.5rem' }}>
                        {sf.rightIndices.map((i) => (
                          <div key={i} style={{ padding: '0.75rem 1rem', borderRadius: 10, backgroundColor: PINK_LIGHT, borderLeft: `3px solid ${PINK_MID}` }}>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: PINK, marginBottom: '0.2rem' }}>{d.uiFeatures[i].label}</p>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#5a4a44', lineHeight: 1.55, fontWeight: 300 }}>{d.uiFeatures[i].detail}</p>
                          </div>
                        ))}
                        <img src={d.secondaryImageSrc} alt="" style={{ width: '100%', borderRadius: 8, display: 'block', marginTop: ('secondaryImageOffset' in d ? d.secondaryImageOffset as string : '0') }} />
                      </div>
                    </div>
                  );
                })()
              ) : (
                <>
                  {/* Standard layout */}
                  <div
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', alignItems: 'start' }}
                    className="decision-grid"
                  >
                    <div style={{ margin: 0, padding: 0, alignSelf: 'start' }}>
                      {'imageSrc' in d && d.imageSrc ? (
                        <img src={d.imageSrc} alt={d.title} style={{ width: '100%', borderRadius: 8, display: 'block', margin: 0, padding: 0 }} />
                      ) : (
                        <AssetPlaceholder label="UI Screenshot" hint={d.screenshotHint} height={200} />
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: 0, padding: 0, alignSelf: 'start' }}>
                      {d.uiFeatures.map((f) => (
                        <div key={f.label} style={{ padding: '0.75rem 1rem', borderRadius: 10, backgroundColor: PINK_LIGHT, borderLeft: `3px solid ${PINK_MID}` }}>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: PINK, marginBottom: '0.2rem' }}>{f.label}</p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#5a4a44', lineHeight: 1.55, fontWeight: 300 }}>{f.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {'imageSrc' in d && d.imageSrc ? null : (
                    <AssetPlaceholder label="Feature GIF" hint={d.gifHint} height={180} isGif />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 5. My Takeaways ─────────────────────────────────────── */}
      <section>
        <SectionLabel>My Takeaways</SectionLabel>
        <SectionHeading>What I learned from this project</SectionHeading>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
          {/* Card 1 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: 16,
              background: 'linear-gradient(140deg, #fdf0f2 0%, #fce8ec 100%)',
              border: `1px solid ${PINK_MID}`,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: `${PINK}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.85rem',
              }}
            >
              <span style={{ fontSize: '1rem' }}>✦</span>
            </div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                color: '#1a1714',
                lineHeight: 1.35,
                marginBottom: '0.5rem',
              }}
            >
              Technology Can Surface Invisible Social Patterns
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#7a5a60', lineHeight: 1.6, fontWeight: 300 }}>
              Sensors and ML can reveal moments people feel but struggle to articulate — when framed
              compassionately, this becomes a tool for growth rather than surveillance.
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: 16,
              background: 'linear-gradient(140deg, #EBF2FA 0%, #dde9f8 100%)',
              border: '1px solid #b8cfe8',
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: '#6B8DB518',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.85rem',
              }}
            >
              <span style={{ fontSize: '1rem' }}>⬡</span>
            </div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                color: '#1a1714',
                lineHeight: 1.35,
                marginBottom: '0.5rem',
              }}
            >
              Ethical Design Is Central to All Designs
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#4a6070', lineHeight: 1.6, fontWeight: 300 }}>
              Every technical decision carries an ethical weight. Consent flows, data minimization,
              and transparent framing aren't features — they're the foundation the product stands on.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
