// Assets — place files in public/images/ima/
// Photo:  user-interviews.jpg
// GIFs:   decision-1.gif, decision-2.gif, decision-3.gif, decision-4.gif, decision-5.gif

const PINK = '#C4365A';
const PINK_LIGHT = '#fdf0f2';
const PINK_MID = '#E8B4BC';
const PINK_BORDER = '#f0c8d0';

// ── Primitives ────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase' as const,
      color: PINK,
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
  return <div style={{ width: '100%', height: 1, backgroundColor: PINK_BORDER, margin: '2.25rem 0' }} />;
}

function AssetPlaceholder({ label, hint, height = 200, accent = PINK }: {
  label: string; hint?: string; height?: number | string; accent?: string;
}) {
  const bg = accent === PINK ? PINK_LIGHT : '#f0f7ff';
  const border = accent === PINK ? PINK_MID : '#93c5fd';
  return (
    <div style={{
      width: '100%', height, backgroundColor: bg,
      border: `1.5px dashed ${border}`, borderRadius: 12,
      display: 'flex', flexDirection: 'column' as const,
      alignItems: 'center', justifyContent: 'center', gap: 5,
    }}>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: accent, opacity: 0.55 }}>
        {label}
      </p>
      {hint && (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#9a928c', opacity: 0.6 }}>
          {hint}
        </p>
      )}
    </div>
  );
}

// ── Research-specific components ──────────────────────────────────────────────

function InsightTag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: 20,
      backgroundColor: `${PINK}18`, border: `1px solid ${PINK_MID}`,
      fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 500,
      color: PINK, whiteSpace: 'nowrap' as const,
    }}>
      {children}
    </span>
  );
}

function ArrowConnector({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' as const, margin: '0.75rem 0' }}>
      <span style={{
        padding: '5px 12px', borderRadius: 20,
        backgroundColor: '#fff7ed', border: '1px solid #fed7aa',
        fontFamily: "'Inter', sans-serif", fontSize: '0.73rem', fontWeight: 500, color: '#c2410c',
      }}>
        {from}
      </span>
      <span style={{ color: '#9a928c', fontSize: '0.85rem', fontWeight: 300 }}>→</span>
      <span style={{
        padding: '5px 12px', borderRadius: 20,
        backgroundColor: '#f0fdf4', border: '1px solid #86efac',
        fontFamily: "'Inter', sans-serif", fontSize: '0.73rem', fontWeight: 500, color: '#15803d',
      }}>
        {to}
      </span>
    </div>
  );
}

// ── Design Decision component ─────────────────────────────────────────────────

function DesignDecision({ number, question, options, outcome, assetHint, videoSrc, imageSrc, preContent }: {
  number: string;
  question: string;
  options?: string;
  outcome: string;
  assetHint: string;
  videoSrc?: string;
  imageSrc?: string;
  preContent?: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.9rem' }}>
      {/* Header row */}
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
        <span style={{
          fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700,
          letterSpacing: '0.16em', color: PINK, textTransform: 'uppercase' as const,
          paddingTop: '0.32rem', flexShrink: 0,
        }}>
          {number}
        </span>
        <SectionHeading size="sm">
          {question}
        </SectionHeading>
      </div>

      {/* Pre-content slot */}
      {preContent}

      {/* Side-by-side layout when imageSrc provided */}
      {imageSrc ? (
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <img src={imageSrc} alt="" style={{ width: '30%', borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
            {options && (
              <div style={{ padding: '0.75rem 1rem', borderRadius: 10, backgroundColor: '#fafaf8', border: '1px solid #e8e6e3' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: '#9a928c', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.3rem' }}>
                  Options considered
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#5a5450', fontWeight: 300, lineHeight: 1.6 }}>
                  {options}
                </p>
              </div>
            )}
            <div style={{ padding: '0.75rem 1rem', borderRadius: 10, backgroundColor: PINK_LIGHT, borderLeft: `3px solid ${PINK}` }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: PINK, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.3rem' }}>
                Outcome
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#5a2030', fontWeight: 300, lineHeight: 1.6 }}>
                {outcome}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Options considered */}
          {options && (
            <div style={{ padding: '0.75rem 1rem', borderRadius: 10, backgroundColor: '#fafaf8', border: '1px solid #e8e6e3' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: '#9a928c', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.3rem' }}>
                Options considered
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#5a5450', fontWeight: 300, lineHeight: 1.6 }}>
                {options}
              </p>
            </div>
          )}
          {/* Outcome */}
          <div style={{ padding: '0.75rem 1rem', borderRadius: 10, backgroundColor: PINK_LIGHT, borderLeft: `3px solid ${PINK}` }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: PINK, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.3rem' }}>
              Outcome
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#5a2030', fontWeight: 300, lineHeight: 1.6 }}>
              {outcome}
            </p>
          </div>
          {/* Asset */}
          {videoSrc
            ? <video src={videoSrc} controls style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
            : assetHint ? <AssetPlaceholder label="GIF / Screenshot" hint={assetHint} height={180} /> : null
          }
        </>
      )}
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────

export function IMAModalContent() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── 1. Project Overview ─────────────────────────────────── */}
      <section>
        <SectionLabel>Project Overview</SectionLabel>
        <SectionHeading size="lg">Internal Member Archive</SectionHeading>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
          Designed to help current Hack4Impact members stay connected with alumni by centralizing
          member information, making it easier to find contacts, discover shared interests, and
          pursue mentorship opportunities through a human-centered directory.
        </p>
      </section>

      <Divider />

      {/* ── 2. Problem ──────────────────────────────────────────── */}
      <section>
        <SectionLabel>Problem</SectionLabel>
        <SectionHeading>How do we make alumni feel approachable and connections feel personal?</SectionHeading>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
          The absence of a centralized alumni directory made it difficult for members to maintain
          connections and discover mentorship opportunities. Admins tracked alumni manually via
          spreadsheets, and members had no reliable way to find or contact people they didn't
          already know personally.
        </p>
      </section>

      <Divider />

      {/* ── 3. Prototype Video ──────────────────────────────────── */}
      <section>
        <SectionLabel>Prototype</SectionLabel>
        <video
          src="/images/ima/ima_prototype.mp4"
          controls
          style={{ width: '100%', borderRadius: '8px', display: 'block' }}
        />
      </section>

      <Divider />

      {/* ── 4. Research ─────────────────────────────────────────── */}
      <section>
        <SectionLabel>Research</SectionLabel>
        <SectionHeading size="lg">User Interviews</SectionHeading>

        {/* Stat row */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#9a928c', fontWeight: 300 }}>
            3 rounds of interviews conducted
          </span>
        </div>

        {/* Full-width photo */}
        <img
          src="/images/ima/user-interviews.jpg"
          alt="User Interview Photo"
          style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12 }}
        />

        {/* Key Insight 1 */}
        <div style={{ marginTop: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.7rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: PINK, flexShrink: 0 }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: PINK }}>
              Key Insight
            </p>
          </div>
          <SectionHeading size="sm">The Communication Barrier</SectionHeading>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75, marginBottom: '1rem' }}>
            Members were comfortable reaching out to alumni they already knew personally, but felt
            hesitant approaching unknown alumni — even when those alumni were part of the same
            organization. The connection barrier wasn't about willingness; it was about familiarity.
          </p>

          {/* Pull quote */}
          <div style={{
            padding: '1rem 1.25rem', borderRadius: 12,
            backgroundColor: '#fafaf8', borderLeft: `3px solid ${PINK_MID}`,
            marginBottom: '1rem',
          }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', fontStyle: 'italic', color: '#3a2a30', lineHeight: 1.6, marginBottom: '0.4rem' }}>
              "I'm doing this for my professional development, so at worst I'm back to where I am."
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: '#9a928c', fontWeight: 400 }}>
              — Interview participant, on reaching out to unknown alumni
            </p>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75, marginBottom: '0.75rem' }}>
            This insight pointed toward features like personal blurbs and richer profile information
            to make alumni feel approachable — turning the "unknown value" of an alumnus into known value.
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' as const }}>
            <InsightTag>Personal blurbs</InsightTag>
            <InsightTag>Profile photos</InsightTag>
            <InsightTag>Richer profile info</InsightTag>
            <InsightTag>Approachability tags</InsightTag>
          </div>
        </div>

        {/* Key Insight 2 */}
        <div style={{ marginTop: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.7rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: PINK, flexShrink: 0 }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: PINK }}>
              Key Insight
            </p>
          </div>
          <SectionHeading size="sm">Admin Pain Points</SectionHeading>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75, marginBottom: '1.1rem' }}>
            Through interviews with business team members, we identified two core admin-related
            problems that directly shaped our design direction.
          </p>

          {/* Pain point 1 */}
          <div style={{ marginBottom: '1rem', padding: '1rem 1.1rem', borderRadius: 12, backgroundColor: '#fafaf8', border: '1px solid #e8e6e3' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', fontWeight: 500, color: '#1a1714', marginBottom: '0.3rem' }}>
              Manual Alumni Data Maintenance
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#5a5450', fontWeight: 300, lineHeight: 1.65, marginBottom: '0.75rem' }}>
              Admins tracked alumni via spreadsheets, manually searching LinkedIn for emails and
              company info. The process was tedious, error-prone, and led to low engagement with
              the directory.
            </p>
            <ArrowConnector
              from="Spreadsheet-based tracking"
              to="Centralized User Management dashboard"
            />
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#5a5450', fontWeight: 300, lineHeight: 1.6 }}>
              We replaced spreadsheets with a dashboard allowing admins to approve, deny, and edit
              member profiles — increasing data visibility and laying groundwork for future automation.
            </p>
          </div>

          {/* Pain point 2 */}
          <div style={{ padding: '1rem 1.1rem', borderRadius: 12, backgroundColor: '#fafaf8', border: '1px solid #e8e6e3' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', fontWeight: 500, color: '#1a1714', marginBottom: '0.3rem' }}>
              Scalability Concerns
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: '#5a5450', fontWeight: 300, lineHeight: 1.65, marginBottom: '0.75rem' }}>
              As Hack grows, manually maintaining alumni information becomes increasingly difficult.
              There's no scalable solution in the current spreadsheet model.
            </p>
            <ArrowConnector
              from="Spreadsheet bottleneck"
              to="Modular, scalable dashboard"
            />
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#5a5450', fontWeight: 300, lineHeight: 1.6 }}>
              Features like list/card views, sorting, and bulk approval were designed with
              scalability in mind — built to handle a growing number of users efficiently.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 5. Design Decisions ─────────────────────────────────── */}
      <section>
        <SectionLabel>Design Decisions</SectionLabel>
        <SectionHeading size="lg">Five decisions that shaped the system</SectionHeading>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2.5rem', marginTop: '1.25rem' }}>

          <DesignDecision
            number="01"
            question="One view or two?"
            options="List View offered quick scanning across many rows. Card View displayed richer info per person but required more space. The use cases were different enough that neither alone was sufficient."
            outcome="Implemented both views with a toggle — admins can switch between List View for fast scanning and Card View for per-member detail. Different tasks call for different layouts."
            assetHint="public/images/ima/decision-1.gif"
            videoSrc="/images/ima/SwitchView.mov"
          />

          <DesignDecision
            number="02"
            question="How should bulk approval work?"
            options="Approving members one-by-one was the default, but admins processing large cohorts needed a faster path. Options included checkboxes with a floating button or a status-filter workflow."
            outcome="Status-based filtering lets admins isolate 'Pending' rows, then a persistent action bar appears when rows are selected — surfacing approve/deny actions only when they're relevant."
            assetHint="public/images/ima/decision-2.gif"
            videoSrc="/images/ima/ima_decision2.mov"
          />

          <DesignDecision
            number="03"
            question="What goes on the profile card?"
            options="Debated including a status tag (Pending / Approved) on each card to reflect admin state. We also explored table-style rows vs. tag chips for multi-value fields like skills and roles."
            outcome="Removed the status tag from the member-facing card to reduce visual noise — status is an admin concern, not a profile detail. Used tag chips (not rows) for multi-value fields to save vertical space and scan quickly."
            assetHint="public/images/ima/decision-3.gif"
            imageSrc="/images/ima/CardIterations.png"
          />

          <DesignDecision
            number="04"
            question="How should adding a user feel?"
            options="A full-page form risked feeling heavy for a quick admin task. An inline row edit could feel unclear about what was being created vs. edited."
            outcome="A modal-based flow keeps the context intact while adding a new user. On confirmation, the new row highlights in blue so admins immediately see what was added without searching the list."
            assetHint="public/images/ima/decision-4.gif"
            videoSrc="/images/ima/Add_User_Card.mov"
          />

          <DesignDecision
            number="05"
            question="How should color communicate status?"
            outcome="After consolidating the design system, color became a primary way to communicate meaning at a glance. Orange signals a pending state — something requiring attention. Green confirms approval. Lighter blues carry neutral and informational states, keeping the interface calm where no action is needed. Each status badge pairs color with a text label so the system remains accessible without relying on color alone."
            assetHint=""
            preContent={
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.25rem' }}>

                {/* Color scheme comparison */}
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#9a928c', marginBottom: '0.6rem' }}>
                    Color Scheme
                  </p>
                  <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    {/* Left: stacked before/after photos */}
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.6rem', flexShrink: 0, width: '30%' }}>
                      <div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 500, color: '#9a928c', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>Before</p>
                        <img src="/images/ima/Colors_Old.png" alt="Old color scheme" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 500, color: PINK, textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>After</p>
                        <img src="/images/ima/Colors_New.png" alt="New color scheme" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
                      </div>
                    </div>
                    {/* Right: explanatory text */}
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75, marginBottom: '0.9rem' }}>
                        Building off of the color scheme from last year's designs, we decided to continue the dominant use of blue and grey, in addition to new colors — green, red, and orange — that denote different actions and statuses.
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75 }}>
                        We did, however, make the decision to use <span style={{ fontWeight: 500, color: '#1a1714' }}>lighter blues</span> for the majority of the designs versus the darker blues that dominated last year's work. This was intentional: lighter tones give the interface a cleaner, more contemporary feel and keep the system visually consistent with the refined palette.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Add user page comparison */}
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#9a928c', marginBottom: '0.6rem' }}>
                    Add User Page
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75, marginBottom: '1rem' }}>
                    The old design used a full-page, single-column form with a dark navy "Continue" button — visually heavy and more fitting for an onboarding flow than an admin task. The new design consolidates fields into a compact modal with a two-column layout for name fields, softer input styling, and a lighter "Next" button that aligns with the updated color palette. The shift from full-page to modal keeps admins in context while the streamlined layout makes the task feel quick and lightweight.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 500, color: '#9a928c', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>Before</p>
                      <img src="/images/ima/AddUser_Old.png" alt="Old add user design" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 500, color: PINK, textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '0.35rem' }}>After</p>
                      <img src="/images/ima/AddUser_New.png" alt="New add user design" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
                    </div>
                  </div>
                </div>

                {/* New components */}
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#9a928c', marginBottom: '0.6rem' }}>
                    New Components
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#4a4540', fontWeight: 300, lineHeight: 1.75, marginBottom: '1rem' }}>
                    We built a set of reusable components to ensure visual and interaction consistency across our high-fidelity designs. These focused primarily on <span style={{ fontWeight: 500, color: '#1a1714' }}>hover and selection states</span> — giving users clear feedback on what is interactive and what is currently active.
                  </p>
                  <img src="/images/ima/Components.png" alt="New components" style={{ width: '100%', borderRadius: 8, display: 'block' }} />
                </div>

              </div>
            }
          />

        </div>
      </section>

    </div>
  );
}
