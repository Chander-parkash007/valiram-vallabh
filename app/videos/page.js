import { videos } from '@/lib/data'

export const metadata = {
  title: 'Videos — Vali Ram Vallabh',
  description: 'Watch interviews, tributes and documentary features about Vali Ram Vallabh — including his own voice narrating his family\'s migration story.',
}

function YouTubeEmbed({ video }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${video.embedId}?rel=0`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.titleEn}
          loading="lazy"
        />
      </div>
      <div style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          {video.featured && <span className="tag" style={{ fontSize: 9 }}>Featured</span>}
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </span>
        </div>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.4 }}>
          {video.titleEn}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{video.descriptionEn}</p>
      </div>
    </div>
  )
}

function FacebookEmbed({ video }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ padding: '20px', background: 'var(--cream)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          {video.featured && <span className="tag" style={{ fontSize: 9 }}>Featured</span>}
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook
          </span>
        </div>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>
          {video.titleEn}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{video.descriptionEn}</p>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ alignSelf: 'flex-start' }}
        >
          Watch on Facebook →
        </a>
      </div>
    </div>
  )
}

export default function VideosPage() {
  const youtubeVideos = videos.filter(v => v.platform === 'youtube')
  const facebookVideos = videos.filter(v => v.platform === 'facebook')
  const featuredYT = youtubeVideos.find(v => v.featured)

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex', background: 'rgba(201,148,58,0.2)', borderColor: 'rgba(201,148,58,0.4)', color: '#E8B85A' }}>Video Archive</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: '#F5ECD7', marginBottom: 12, letterSpacing: '-0.03em' }}>
            Watch & Listen
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(245,236,215,0.75)', maxWidth: 560 }}>
            Interviews, documentary features, news tributes, and condolence references — including his own voice narrating the story of partition.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featuredYT && (
        <section className="section" style={{ background: '#1a1a1a' }}>
          <div className="container">
            <div className="tag-gold" style={{ marginBottom: 16, display: 'inline-flex' }}>Must Watch</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: '#F5ECD7', marginBottom: 32 }}>
              His Own Voice — The Migration Story
            </h2>
            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${featuredYT.embedId}?rel=0`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={featuredYT.titleEn}
                  />
                </div>
              </div>
              <div style={{ marginTop: 20, padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: '#F5ECD7', marginBottom: 10 }}>{featuredYT.titleEn}</h3>
                <p style={{ fontSize: 14, color: 'rgba(245,236,215,0.7)', lineHeight: 1.7 }}>{featuredYT.descriptionEn}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* YouTube videos */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>YouTube</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>
            YouTube <span className="gradient-gold">Videos</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {youtubeVideos.map(v => <YouTubeEmbed key={v.id} video={v} />)}
          </div>
        </div>
      </section>

      {/* Facebook videos */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Facebook</div>
          <h2 className="section-title" style={{ marginBottom: 12 }}>
            Facebook <span className="gradient-gold">Videos</span>
          </h2>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 32 }}>
            These videos are hosted on Facebook. Click to watch on Facebook.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            {facebookVideos.map(v => <FacebookEmbed key={v.id} video={v} />)}
          </div>
        </div>
      </section>
    </>
  )
}

