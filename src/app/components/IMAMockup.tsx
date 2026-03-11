/**
 * IMAMockup — simplified visual placeholder for the IMA project card.
 * Replace or enhance with actual mockup screenshots as needed.
 */
export function IMAMockup() {
  const PINK = '#C4365A';
  const PINK_LIGHT = '#fdf0f2';

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #e8f0fb 0%, #dbeafe 50%, #e2eaf6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '16px',
      }}
    >
      {/* List view mockup */}
      <div style={{
        flex: 1,
        height: '85%',
        backgroundColor: '#fff',
        borderRadius: 8,
        boxShadow: '0 8px 32px rgba(0,40,120,0.13)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '10px 12px', borderBottom: '1px solid #eee', backgroundColor: '#f8f9fa' }}>
          <div style={{ width: 60, height: 8, backgroundColor: PINK, borderRadius: 4, opacity: 0.7 }} />
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderBottom: '1px solid #f5f5f5' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: `${PINK}${i % 2 === 0 ? '30' : '20'}`, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ width: `${60 + i * 8}%`, height: 6, backgroundColor: '#e2e8f0', borderRadius: 3, marginBottom: 4 }} />
              <div style={{ width: '40%', height: 5, backgroundColor: '#eef0f4', borderRadius: 3 }} />
            </div>
          </div>
        ))}
      </div>

      {/* Card view mockup — floating, tilted */}
      <div style={{
        width: '52%',
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        boxShadow: '0 16px 48px rgba(0,30,100,0.22)',
        transform: 'rotate(3deg)',
        transformOrigin: 'bottom left',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '10px 12px', borderBottom: '1px solid #eee', backgroundColor: '#f8f9fa' }}>
          <div style={{ width: 50, height: 8, backgroundColor: PINK, borderRadius: 4, opacity: 0.7 }} />
        </div>
        <div style={{ padding: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, flex: 1 }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              backgroundColor: PINK_LIGHT,
              borderRadius: 8,
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: `${PINK}30` }} />
              <div style={{ width: '80%', height: 5, backgroundColor: `${PINK}40`, borderRadius: 3 }} />
              <div style={{ width: '60%', height: 4, backgroundColor: '#e2e8f0', borderRadius: 3 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
