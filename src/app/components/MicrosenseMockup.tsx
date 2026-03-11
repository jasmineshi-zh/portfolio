/**
 * MicrosenseMockup — simplified visual placeholder for the Microsense project.
 * The heroScreen variant (displayWidth=820) is rendered inside the case study modal.
 * Replace with actual mockup screenshots or import the design frames as needed.
 */

interface MicrosenseMockupProps {
  displayWidth?: number;
}

export function MicrosenseMockup({ displayWidth = 820 }: MicrosenseMockupProps) {
  const PURPLE = '#6B4C9A';
  const TEAL = '#2A9D8F';
  const WARM = '#E9C46A';
  const isHero = displayWidth >= 600;

  return (
    <div style={{
      width: '100%',
      background: 'linear-gradient(135deg, #1a1230 0%, #0d1f3c 50%, #1a1a2e 100%)',
      borderRadius: isHero ? 16 : 0,
      padding: isHero ? '32px 40px' : '20px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      minHeight: isHero ? 380 : 200,
    }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: PURPLE, opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.8)' }} />
          </div>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: isHero ? '0.95rem' : '0.75rem', letterSpacing: '0.05em' }}>
            microsense
          </span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Today', 'Week', 'Month'].map((t) => (
            <div key={t} style={{
              padding: '4px 10px',
              borderRadius: 12,
              backgroundColor: t === 'Today' ? PURPLE : 'rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.65rem',
              fontFamily: "'Inter', sans-serif",
            }}>{t}</div>
          ))}
        </div>
      </div>

      {/* Signal timeline */}
      {isHero && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Today's Signals
          </p>
          {[
            { time: '9:14 AM', label: 'Interruption pattern', color: PURPLE, intensity: 72 },
            { time: '11:32 AM', label: 'Tone shift detected', color: TEAL, intensity: 45 },
            { time: '2:07 PM', label: 'Word-choice signal', color: WARM, intensity: 88 },
          ].map((sig) => (
            <div key={sig.time} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', width: 55, flexShrink: 0 }}>{sig.time}</span>
              <div style={{ flex: 1 }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', marginBottom: 6 }}>{sig.label}</p>
                <div style={{ height: 4, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                  <div style={{ width: `${sig.intensity}%`, height: '100%', backgroundColor: sig.color, borderRadius: 4 }} />
                </div>
              </div>
              <span style={{ color: sig.color, fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 600 }}>{sig.intensity}%</span>
            </div>
          ))}
        </div>
      )}

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: isHero ? '1fr 1fr 1fr' : '1fr 1fr', gap: 10 }}>
        {[
          { label: 'Signals this week', value: '14', color: PURPLE },
          { label: 'Reflection streak', value: '5 days', color: TEAL },
          { label: 'Avg. awareness', value: '+23%', color: WARM },
        ].slice(0, isHero ? 3 : 2).map((stat) => (
          <div key={stat.label} style={{
            padding: '12px 14px',
            borderRadius: 12,
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: `1px solid ${stat.color}30`,
          }}>
            <p style={{ color: stat.color, fontFamily: "'Inter', sans-serif", fontSize: isHero ? '1.4rem' : '1.1rem', fontWeight: 700, lineHeight: 1 }}>{stat.value}</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', marginTop: 4 }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
