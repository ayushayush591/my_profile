:root{
  --bg:#0b1018;
  --bg-secondary:#111a26;
  --card:#121c29;
  --card-hover:#172435;
  --border:#2a3a4f;

  --text:#e8edf4;
  --muted:#9fb0c5;

  --primary:#3b82f6;
  --secondary:#22c1c3;
  --accent:#7dd3fc;

  --shadow:0 14px 38px rgba(0,0,0,.34);
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:'IBM Plex Sans',sans-serif;
  background:
    radial-gradient(900px 520px at 8% -10%, rgba(59,130,246,.15), transparent 60%),
    radial-gradient(900px 520px at 100% 120%, rgba(34,193,195,.12), transparent 62%),
    linear-gradient(180deg, #0b1018 0%, #0f1622 100%);
  color:var(--text);
  line-height:1.7;
  overflow-x:hidden;
}

/* ======================================
   TYPOGRAPHY
====================================== */

h1,h2,h3{
  font-family:'Space Grotesk',sans-serif;
  font-weight:700;
}

h1{
  font-size:4.5rem;
  line-height:1.05;
}

h2{
  font-size:2.5rem;
  margin-bottom:2rem;
}

h3{
  margin-bottom:.75rem;
}

p{
  color:var(--muted);
}

a{
  text-decoration:none;
  color:inherit;
}

ul{
  padding-left:1.25rem;
}

li{
  margin-bottom:.75rem;
}

/* ======================================
   BACKGROUND EFFECTS
====================================== */

.bg-orb{
  position:fixed;
  border-radius:50%;
  filter:blur(125px);
  opacity:.14;
  pointer-events:none;
  z-index:-1;
}

.orb-1{
  width:420px;
  height:420px;
  background:#1d4ed8;
  top:-150px;
  left:-100px;
}

.orb-2{
  width:350px;
  height:350px;
  background:#0891b2;
  bottom:-120px;
  right:-80px;
}

/* ======================================
   HEADER
====================================== */

.site-header{
  position:sticky;
  top:0;
  z-index:1000;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:1.25rem 8%;

  background:rgba(11,16,24,.76);
  backdrop-filter:blur(18px);

  border-bottom:1px solid var(--border);
}

.brand{
  font-size:1.5rem;
  font-weight:700;
}

.nav{
  display:flex;
  gap:2rem;
}

.nav a{
  color:var(--muted);
  transition:.3s;
}

.nav a:hover,
.nav a.active{
  color:var(--text);
}

.menu-btn{
  display:none;
  background:none;
  border:none;
  color:var(--text);
  font-size:1rem;
  cursor:pointer;
}

/* ======================================
   HERO
====================================== */

.hero{
  min-height:90vh;

  display:grid;
  grid-template-columns:1.4fr .8fr;
  gap:4rem;

  align-items:center;

  padding:4rem 8%;
}

.eyebrow{
  color:var(--accent);
  font-weight:600;
  margin-bottom:1rem;
}

.hero h1{
  margin-bottom:1.5rem;
}

.hero p{
  font-size:1.08rem;
}

.hero-text{
  max-width:700px;
}

.hero-card{
  background:rgba(18,28,41,.7);

  border:1px solid rgba(125,211,252,.24);

  border-radius:28px;

  padding:1.25rem;

  backdrop-filter:blur(15px);

  box-shadow:var(--shadow);
}

.hero-card img{
  width:100%;
  display:block;
  border-radius:22px;

  object-fit:cover;

  box-shadow:
    0 20px 50px rgba(59,130,246,.22);
}

/* ======================================
   CTA BUTTONS
====================================== */

.cta-row{
  display:flex;
  flex-wrap:wrap;
  gap:1rem;
  margin-top:2rem;
}

.btn{
  padding:.9rem 1.5rem;
  border-radius:12px;

  font-weight:600;

  transition:.3s ease;
}

.primary{
  background:
  linear-gradient(
    135deg,
    var(--primary),
    var(--secondary)
  );

  color:#f8fbff;
}

.primary:hover{
  transform:translateY(-3px);
}

.ghost{
  border:1px solid var(--border);
  background:rgba(18,28,41,.45);
}

.ghost:hover{
  background:var(--card-hover);
}

/* ======================================
   META
====================================== */

.meta-list{
  margin-top:2rem;
  list-style:none;
  padding:0;
}

.meta-list li{
  color:var(--muted);
  margin-bottom:.6rem;
}

/* ======================================
   SECTIONS
====================================== */

.section{
  padding:6rem 8%;
}

.section-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;

  margin-bottom:2rem;
}

.muted{
  color:var(--muted);
}

/* ======================================
   CARDS
====================================== */

.card{
  background:var(--card);

  border:1px solid var(--border);

  border-radius:20px;

  padding:2rem;

  transition:.3s;
}

.card:hover{
  transform:translateY(-6px);
  background:var(--card-hover);
  border-color:#3d516b;
}

.timeline{
  display:grid;
  gap:1.5rem;
}

.grid{
  display:grid;
  gap:1.5rem;

  grid-template-columns:
  repeat(
    auto-fit,
    minmax(300px,1fr)
  );
}

.two{
  grid-template-columns:
  repeat(
    auto-fit,
    minmax(380px,1fr)
  );
}

/* ======================================
   STATS
====================================== */

.stats{
  margin-top:3rem;

  display:grid;
  grid-template-columns:
  repeat(3,1fr);

  gap:1.5rem;
}

.stats article{
  background:var(--card);

  border:1px solid var(--border);

  border-radius:18px;

  padding:2rem;

  text-align:center;
}

.stat-num{
  display:block;

  font-size:2.7rem;

  font-weight:700;

  color:var(--secondary);
}

.stat-label{
  color:var(--muted);
}

/* ======================================
   FILTER BUTTONS
====================================== */

.filters{
  display:flex;
  gap:.75rem;
  flex-wrap:wrap;
}

.filters button{
  background:var(--card);

  border:1px solid var(--border);

  color:var(--text);

  padding:.7rem 1rem;

  border-radius:999px;

  cursor:pointer;

  transition:.3s;
}

.filters button.active{
  background:var(--primary);
  border-color:var(--primary);
  color:#f8fbff;
}

/* ======================================
   SKILLS
====================================== */

.skill-search{
  width:100%;

  background:var(--card);

  border:1px solid var(--border);

  color:var(--text);

  padding:1rem;

  border-radius:12px;

  margin-bottom:1.5rem;
}

.skill-search:focus{
  outline:none;
  border-color:var(--accent);
}

.chips{
  display:flex;
  flex-wrap:wrap;
  gap:.9rem;
}

.chips span{
  background:var(--card);

  border:1px solid var(--border);

  border-radius:999px;

  padding:.75rem 1rem;

  transition:.3s;
}

.chips span:hover{
  border-color:var(--primary);
}

/* ======================================
   CONTACT
====================================== */

.contact{
  text-align:center;
}

.contact-row{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:1rem;

  margin-top:2rem;
}

/* ======================================
   LINKS
====================================== */

.card a{
  color:var(--accent);
  font-weight:600;
}

.card a:hover{
  text-decoration:underline;
}

/* ======================================
   REVEAL ANIMATION
====================================== */

.reveal{
  opacity:0;
  transform:translateY(40px);
  transition:
    opacity .8s ease,
    transform .8s ease;
}

.reveal.visible{
  opacity:1;
  transform:translateY(0);
}

/* ======================================
   FOOTER
====================================== */

footer{
  padding:2rem;
  text-align:center;

  border-top:1px solid var(--border);

  color:var(--muted);
}

/* ======================================
   SCROLLBAR
====================================== */

::-webkit-scrollbar{
  width:10px;
}

::-webkit-scrollbar-track{
  background:#0f1622;
}

::-webkit-scrollbar-thumb{
  background:#344a63;
  border-radius:999px;
}

::-webkit-scrollbar-thumb:hover{
  background:#466587;
}

/* ======================================
   MOBILE
====================================== */

@media (max-width: 900px){

  .hero{
    grid-template-columns:1fr;
    text-align:center;
  }

  .hero h1{
    font-size:3rem;
  }

  .stats{
    grid-template-columns:1fr;
  }

  .nav{
    display:none;

    position:absolute;
    right:20px;
    top:80px;

    flex-direction:column;

    background:var(--card);

    padding:1rem;

    border-radius:12px;

    border:1px solid var(--border);
  }

  .nav.open{
    display:flex;
  }

  .menu-btn{
    display:block;
  }

  .section-head{
    flex-direction:column;
    align-items:flex-start;
    gap:1rem;
  }

  .two{
    grid-template-columns:1fr;
  }
}
