# مهارة إنشاء صفحات جديد للراعي

## نظرة عامة
هذه المهارة تُستخدم لإنشاء صفحات جديدة للموقع بشكل تلقائي واتساق مع جميع القواعد المحددة في AGENTS.md.

## متى تستخدم هذه المهارة
- عند إضافة صفحة لابتوب جديدة
- عند تعديل الصفحات الموجودة
- عند التحقق من اتساق التصميم

## خطوات التنفيذ

### الخطوة 1: إنشاء مجلد المنتج
```
Brand-Model-CPU-RAM-Storage-GPU/
```
**أمثلة:**
- `Dell-Latitude-E5570-i7-6600U-8GB-256GB/`
- `Dell-Precision-7520-i7-6820HQ-16GB-256GB-Quadro-M1200/`
- `HP-ZBook-Firefly-14-G11-Ultra7-16GB-256GB-RTX-A500/`

### الخطوة 2: إنشاء مجلد الصور
```
Brand-Model-CPU-RAM-Storage-GPU/Pict/
Brand-Model-CPU-RAM-Storage-GPU/Pict/Brand_Official/
```

### الخطوة 3: تسمية الصور
**صور المستخدم:**
- `1-Brand-Model.jpg`
- `2-Brand-Model.jpg`
- إلخ

**الصور الرسمية:**
- `01-Product-Front-View.jpg`
- `02-Product-Angle-View.jpg`
- إلخ

### الخطوة 4: إنشاء صفحة HTML

#### الهيكل الأساسي
```html
<!DOCTYPE html>
<html lang="ar" dir="rtl" style="-webkit-tap-highlight-color:transparent">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#1a1a2e">
    <title>Page Title - الراعي</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" as="style">
    <style>
        :root {
            --primary: #0096d6;
            --primary-dark: #0078b3;
            --secondary: #1a1a2e;
            --accent: #e94560;
            --bg-light: #f8f9fa;
            --bg-dark: #1a1a2e;
            --text-light: #ffffff;
            --text-dark: #333333;
            --text-muted: #666666;
            --bg-placeholder: #e0e0e0;
            --disabled: #999999;
            --facebook: #1877f2;
            --border: #e0e0e0;
            --grad: linear-gradient(135deg, #0096d6, #00b4d8);
            --grad-dark: linear-gradient(135deg, #1a1a2e, #16213e);
            --z-overlay: 1000;
            --radius: 8px;
            --radius-lg: 20px;
            --font-display: 'Cairo', sans-serif;
            --font-body: 'Noto Kufi Arabic', sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: var(--font-body);
            background: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.8;
            overflow-wrap: anywhere;
            overscroll-behavior: contain;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

        /* Skip Link */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--primary);
            color: white;
            padding: 8px 16px;
            z-index: 1000;
            text-decoration: none;
            font-weight: 600;
            transition: top .3s;
        }
        .skip-link:focus { top: 0; }

        /* Header */
        header {
            background: var(--bg-dark);
            color: var(--text-light);
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: var(--z-overlay);
        }
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-family: var(--font-display);
            font-size: 1.8rem;
            font-weight: 900;
            color: var(--primary);
        }
        .logo span { color: var(--text-light); }
        nav ul {
            display: flex;
            list-style: none;
            gap: 25px;
        }
        nav a {
            color: var(--text-light);
            text-decoration: none;
            font-weight: 500;
            transition: color .3s;
            touch-action: manipulation;
        }
        nav a:hover { color: var(--primary); }
        nav a:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 4px;
            border-radius: 4px;
        }

        /* Hero Section */
        .hero {
            background: var(--grad-dark);
            color: var(--text-light);
            padding: 80px 0;
            text-align: center;
        }
        .hero h1 {
            font-family: var(--font-display);
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 15px;
            text-wrap: balance;
            overflow-wrap: anywhere;
        }
        .hero p {
            font-size: 1.2rem;
            opacity: .9;
            max-width: 600px;
            margin: 0 auto 30px;
        }
        .hero-img {
            max-width: 100%;
            height: auto;
            border-radius: var(--radius-lg);
            box-shadow: 0 20px 60px rgba(0,0,0,.3);
            margin-top: 30px;
        }

        /* Section Title */
        .section-title {
            text-align: center;
            font-size: 2.2rem;
            color: var(--secondary);
            margin-bottom: 50px;
            text-wrap: balance;
        }
        .section-title--light { color: var(--text-light); }

        /* Features Section */
        .features {
            padding: 80px 0;
            background: var(--bg-light);
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }
        .feature-card {
            background: white;
            padding: 30px;
            border-radius: var(--radius-lg);
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,.08);
            transition: transform .3s, box-shadow .3s;
        }
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,.12);
        }
        .feature-icon {
            font-size: 3rem;
            margin-bottom: 15px;
            color: var(--primary);
        }
        .feature-card h3 {
            font-size: 1.2rem;
            color: var(--secondary);
            margin-bottom: 10px;
        }
        .feature-card p {
            color: var(--text-muted);
            font-size: .95rem;
        }

        /* Specs Section */
        .specs {
            padding: 80px 0;
            background: white;
        }
        .specs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
        }
        .spec-card {
            background: var(--bg-light);
            padding: 25px;
            border-radius: var(--radius-lg);
            border-right: 4px solid var(--primary);
        }
        .spec-card h4 {
            color: var(--primary);
            margin-bottom: 15px;
            font-size: 1.1rem;
        }
        .spec-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid var(--border);
        }
        .spec-item:last-child { border-bottom: none; }
        .spec-label { color: var(--text-muted); }
        .spec-value {
            font-weight: 600;
            font-variant-numeric: tabular-nums;
        }

        /* Gallery Section */
        .gallery {
            padding: 80px 0;
            background: var(--bg-light);
        }
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }
        .gallery-item {
            border-radius: var(--radius-lg);
            overflow: hidden;
            cursor: pointer;
            transition: transform .3s;
            aspect-ratio: 16/10;
        }
        .gallery-item:hover { transform: scale(1.02); }
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transform-origin: center;
        }

        /* Lightbox */
        .lightbox {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,.95);
            z-index: calc(var(--z-overlay) + 100);
            align-items: center;
            justify-content: center;
            overscroll-behavior: contain;
        }
        .lightbox.active { display: flex; }
        .lightbox img {
            max-width: 90vw;
            max-height: 85vh;
            object-fit: contain;
            border-radius: var(--radius);
        }
        .lightbox-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255,255,255,.2);
            color: white;
            border: none;
            font-size: 2rem;
            padding: 15px 20px;
            cursor: pointer;
            border-radius: 50%;
            transition: background .3s;
        }
        .lightbox-nav:hover { background: rgba(255,255,255,.3); }
        .lightbox-nav:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 4px;
        }
        .lightbox-prev { right: 20px; }
        .lightbox-next { left: 20px; }
        .lightbox-close {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(255,255,255,.2);
            color: white;
            border: none;
            font-size: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            transition: background .3s;
        }
        .lightbox-close:hover { background: rgba(255,255,255,.3); }
        .lightbox-close:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 4px;
        }

        /* Video Section */
        .video-section {
            background: var(--bg-light);
            padding: 80px 0;
        }
        .video-wrapper {
            max-width: 800px;
            margin: 0 auto;
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,.15);
        }
        .video-wrapper iframe {
            display: block;
        }

        /* Company Info Section */
        .company-info {
            padding: 80px 0;
            background: var(--bg-dark);
            color: var(--text-light);
        }
        .company-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }
        .company-card {
            background: rgba(255,255,255,.05);
            border: 1px solid rgba(255,255,255,.1);
            padding: 30px;
            border-radius: var(--radius-lg);
            transition: transform .3s, border-color .3s;
        }
        .company-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
        }
        .company-card h4 {
            color: var(--primary);
            margin-bottom: 20px;
            font-size: 1.3rem;
        }
        .company-card p {
            line-height: 2;
            color: rgba(255,255,255,.85);
        }

        /* Contact Section */
        .contact {
            padding: 100px 0;
            background: var(--grad-dark);
            color: var(--text-light);
        }
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-top: 40px;
        }
        .contact-card {
            background: rgba(255,255,255,.05);
            border: 1px solid rgba(255,255,255,.1);
            padding: 30px;
            border-radius: var(--radius-lg);
            transition: transform .3s, border-color .3s;
        }
        .contact-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
        }
        .contact-card h4 {
            color: var(--primary);
            margin-bottom: 20px;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .contact-card p {
            line-height: 2;
            color: rgba(255,255,255,.85);
        }
        .contact-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .contact-item:last-child { border-bottom: none; }
        .contact-icon {
            width: 45px;
            height: 45px;
            background: rgba(0,150,214,.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            flex-shrink: 0;
        }
        .contact-details { flex: 1; }
        .contact-name {
            font-size: .85rem;
            color: rgba(255,255,255,.6);
            margin-bottom: 2px;
        }
        .contact-number {
            font-size: 1.1rem;
            font-weight: 600;
            direction: ltr;
            text-align: right;
        }
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        .social-link {
            width: 55px;
            height: 55px;
            background: rgba(0,150,214,.2);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            transition: background .3s, transform .3s;
            text-decoration: none;
            color: white;
        }
        .social-link:hover {
            background: var(--primary);
            transform: translateY(-3px);
        }
        .social-link:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 4px;
        }

        /* CTA Buttons */
        .cta-btn-row {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .cta-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--primary);
            color: white;
            padding: 12px 25px;
            border-radius: 10px;
            font-weight: 600;
            text-decoration: none;
            transition: background .3s;
        }
        .cta-btn-primary:hover { background: var(--primary-dark); }
        .cta-btn-facebook {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--facebook);
            color: var(--text-light);
            padding: 12px 25px;
            border-radius: var(--radius);
            font-weight: 600;
            text-decoration: none;
            transition: background .3s;
        }
        .cta-btn-facebook:hover { opacity: .9; }

        /* Footer */
        footer {
            background: var(--grad-dark);
            color: var(--text-light);
            padding: 60px 0 30px;
            text-align: center;
        }
        .footer-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 40px;
            margin-bottom: 40px;
        }
        .footer-brand {
            font-family: var(--font-display);
            font-size: 2rem;
            font-weight: 900;
            color: var(--primary);
            margin-bottom: 10px;
        }
        .footer-brand span { color: var(--text-light); }
        .footer-desc {
            opacity: .7;
            max-width: 300px;
            line-height: 1.8;
        }
        .footer-nav {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
        }
        .footer-nav a {
            color: var(--text-light);
            text-decoration: none;
            opacity: .8;
            transition: opacity .3s;
        }
        .footer-nav a:hover { opacity: 1; }
        .footer-nav a:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 4px;
        }
        .footer-bottom {
            border-top: 1px solid rgba(255,255,255,.1);
            padding-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
        }
        .footer-counter {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .footer-counter-label {
            opacity: .6;
            font-size: .85rem;
        }
        .footer-counter-value {
            background: var(--primary);
            color: white;
            padding: 6px 16px;
            border-radius: var(--radius);
            font-weight: 700;
            font-size: .9rem;
            min-width: 50px;
            text-align: center;
        }
        .footer-copyright {
            opacity: .5;
            font-size: .8rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2rem; }
            .header-content { flex-direction: column; gap: 20px; }
            nav ul { gap: 15px; flex-wrap: wrap; justify-content: center; }
            .footer-top { flex-direction: column; text-align: center; }
            .footer-nav { justify-content: center; }
            .footer-bottom { flex-direction: column; text-align: center; }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }

        /* Focus Visible */
        :focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 4px;
        }
    </style>
</head>
<body>
    <a href="#main-content" class="skip-link">تخطي إلى المحتوى الرئيسي</a>

    <header>
        <div class="container header-content">
            <div class="logo">ال<span>راعي</span></div>
            <nav aria-label="القائمة الرئيسية">
                <ul>
                    <li><a href="../index.html">الرئيسية</a></li>
                    <li><a href="../laptops.html">اللابتوبات</a></li>
                    <li><a href="#features">المواصفات</a></li>
                    <li><a href="#specs">التفاصيل</a></li>
                    <li><a href="#gallery">المعرض</a></li>
                    <li><a href="#contact">التواصل</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main id="main-content">
        <!-- Hero Section -->
        <section class="hero">
            <div class="container">
                <h1>Product Name</h1>
                <p>Product Subtitle</p>
                <img src="Pict/Brand_Official/01-Product-Front-View.jpg" alt="Product Name" class="hero-img" width="800" height="500" loading="eager" fetchpriority="high">
            </div>
        </section>

        <!-- Features Section -->
        <section class="features" id="features">
            <div class="container">
                <h2 class="section-title">مميزات المنتج</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon" aria-hidden="true">&#128187;</div>
                        <h3>المعالج</h3>
                        <p>CPU Details</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon" aria-hidden="true">&#127918;</div>
                        <h3>كرت الشاشه</h3>
                        <p>GPU Details</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon" aria-hidden="true">&#128190;</div>
                        <h3>التخزين</h3>
                        <p>Storage Details</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon" aria-hidden="true">&#9889;</div>
                        <h3>الذاكره</h3>
                        <p>RAM Details</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Specs Section -->
        <section class="specs" id="specs">
            <div class="container">
                <h2 class="section-title">المواصفات الفنيه</h2>
                <div class="specs-grid">
                    <div class="spec-card">
                        <h4>&#128187; المعالج</h4>
                        <div class="spec-item">
                            <span class="spec-label">الموديل</span>
                            <span class="spec-value">CPU Model</span>
                        </div>
                    </div>
                    <div class="spec-card">
                        <h4>&#127918; كرت الشاشه</h4>
                        <div class="spec-item">
                            <span class="spec-label">الموديل</span>
                            <span class="spec-value">GPU Model</span>
                        </div>
                    </div>
                    <div class="spec-card">
                        <h4>&#128190; التخزين</h4>
                        <div class="spec-item">
                            <span class="spec-label">النوع</span>
                            <span class="spec-value">Storage Type</span>
                        </div>
                    </div>
                    <div class="spec-card">
                        <h4>&#9889; الذاكره</h4>
                        <div class="spec-item">
                            <span class="spec-label">السعة</span>
                            <span class="spec-value">RAM Size</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <section class="gallery" id="gallery">
            <div class="container">
                <h2 class="section-title">معرض الصور</h2>
                <div class="gallery-grid">
                    <button class="gallery-item" onclick="openLightbox(0)" aria-label="عرض الصورة 1">
                        <img src="Pict/1-Brand-Model.jpg" alt="Description" width="400" height="250" loading="lazy">
                    </button>
                </div>
            </div>
        </section>

        <!-- Video Section -->
        <section class="video-section">
            <div class="container">
                <h2 class="section-title section-title--light">فيديو التعريف</h2>
                <p class="video-subtitle" style="text-align:center;opacity:.9;max-width:700px;margin:0 auto 30px">شاهد مراجعة شاملة للابتوب</p>
                <div class="video-wrapper">
                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/VIDEO_ID" title="Video Title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </section>

        <!-- Company Info Section -->
        <section class="company-info">
            <div class="container">
                <h2 class="section-title section-title--light">الراعي - بيانات التواصل</h2>
                <div class="company-grid">
                    <div class="company-card">
                        <h4>&#128205; العنوان</h4>
                        <p>اسيوط / ديروط / ابو جبل / امام مستشفي الامين</p>
                    </div>
                    <div class="company-card">
                        <h4>&#128222; التليفون</h4>
                        <p>مينا: 01208063327</p>
                        <p>ابراهيم: 01068857705</p>
                    </div>
                    <div class="company-card">
                        <h4>&#127760; تابعنا</h4>
                        <div class="social-links">
                            <a href="https://www.facebook.com/Elra3yAsyut/" target="_blank" class="social-link" aria-label="صفحة الشركه على فيسبوك">&#102;</a>
                            <a href="https://www.facebook.com/profile.php?id=61585982617699" target="_blank" class="social-link" aria-label="صفحة الصيانه على فيسبوك">&#128295;</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-top">
                <div>
                    <div class="footer-brand">ال<span>راعي</span></div>
                    <p class="footer-desc">افضل خدمات الكمبيوتر واللابتوب وكاميرات المراقبه في منطقه اسيوط - ديروط</p>
                </div>
                <div class="footer-nav">
                    <a href="../index.html#services">خدماتنا</a>
                    <a href="../index.html#about">عن الشركه</a>
                    <a href="../laptops.html">اللابتوبات</a>
                    <a href="../index.html#contact">التواصل</a>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-counter">
                    <span class="footer-counter-label">عدد الزوار:</span>
                    <span id="finicount_views" class="footer-counter-value">...</span>
                </div>
                <p class="footer-copyright">&copy; 2026 الراعي لخدمات الكمبيوتر واللابتوب وكاميرات المراقبه</p>
            </div>
        </div>
    </footer>

    <!-- Lightbox Modal -->
    <div class="lightbox" id="lightbox" role="dialog" aria-label="عرض الصور" aria-modal="true">
        <button id="lightbox-close" class="lightbox-close" onclick="closeLightbox()" aria-label="اغلاق">&times;</button>
        <button class="lightbox-nav lightbox-prev" onclick="navigateLightbox(-1)" aria-label="السابق">&#10095;</button>
        <img src="" alt="Gallery Image" id="lightbox-img">
        <button class="lightbox-nav lightbox-next" onclick="navigateLightbox(1)" aria-label="التالي">&#10094;</button>
    </div>

    <script async src="https://finicounter.eu.org/finicounter.js"></script>
    <script>
        // Lightbox Functions
        let currentImageIndex = 0;
        const galleryImages = [];
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        function openLightbox(index) {
            currentImageIndex = index;
            lightboxImg.src = galleryImages[index];
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.getElementById('lightbox-close').focus();
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        function navigateLightbox(direction) {
            currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
            lightboxImg.src = galleryImages[currentImageIndex];
        }

        // Keyboard Navigation
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateLightbox(-1);
            if (e.key === 'ArrowLeft') navigateLightbox(1);

            // Focus Trap
            if (e.key === 'Tab') {
                const focusableElements = lightbox.querySelectorAll('button');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });

        // Click outside to close
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) closeLightbox();
        });
    </script>
</body>
</html>
```

### الخطوة 5: إضافة الصفحة إلى laptops.html
أضف بطاقة المنتج في laptops.html:
```html
<a href="Brand-Model-CPU-RAM-Storage-GPU/index.html" class="product-card">
    <img src="Brand-Model-CPU-RAM-Storage-GPU/Pict/Brand_Official/01-Product-Front-View.jpg" alt="Product Name" class="product-img" width="400" height="280" loading="eager" fetchpriority="high">
    <div class="product-info">
        <span class="product-badge">&#11088; متاح</span>
        <h3 class="product-name">Product Name</h3>
        <p class="product-desc">Product Description</p>
        <div class="product-specs">
            <span class="spec-tag">CPU</span>
            <span class="spec-tag">GPU</span>
            <span class="spec-tag">RAM</span>
            <span class="spec-tag">Storage</span>
        </div>
        <span class="product-btn">شوف التفاصيل &#8592;</span>
    </div>
</a>
```

### الخطوة 6: النشر
```bash
git add -A
git commit -m "Add new product page: Product Name"
git push origin master
git checkout gh-pages
git merge master
git push origin gh-pages
git checkout master
```

## قائمة التحقق النهائية

### قبل الإنشاء:
- [ ] إنشاء مجلد المنتج بالتنسيق الصحيح
- [ ] إنشاء مجلد Pict/ و Pict/Brand_Official/
- [ ] تسمية الصور بالتنسيق الصحيح
- [ ] التأكد من وجود صورة رسمية للـ Hero

### أثناء الإنشاء:
- [ ] إضافة skip-link
- [ ] إضافة aria-label للـ nav
- [ ] إضافة main landmark
- [ ] استخدام CSS Variables
- [ ] إضافة prefers-reduced-motion
- [ ] إضافة focus-visible
- [ ] إضافة overscroll-behavior
- [ ] إضافة touch-action
- [ ] إضافة theme-color
- [ ] إضافة translate="no" على أسماء المنتجات
- [ ] إضافة fetchpriority="high" للصور الرئيسية
- [ ] إضافة loading="lazy" للصور الثانوية
- [ ] إضافة width و height لجميع الصور
- [ ] إضافة aria-hidden="true" للأيقونات التزيينية
- [ ] إضافة text-wrap: balance للعناوين
- [ ] إضافة tabular-nums للقيم الرقمية
- [ ] إضافة scroll-margin-top لجميع الأقسام
- [ ] إضافة preconnect و preload لخطوط Google
- [ ] استخدام HTTPS لـ FiniCounter
- [ ] إضافة copyright بـ &copy;

### بعد الإنشاء:
- [ ] إضافة بطاقة المنتج في laptops.html
- [ ] التحقق من روابط التنقل
- [ ] التحقق من وجود جميع الصور
- [ ] النشر على master و gh-pages
- [ ] انتظار بناء GitHub Pages (1-2 دقيقة)
- [ ] التحقق من الموقع النهائي

## ملاحظات مهمة
1. لا تستخدم ألوان hex مباشرة - استخدم CSS Variables
2. لا تستخدم inline styles إلا للـ -webkit-tap-highlight-color
3. تأكد من أن جميع الصور لها width و height
4. تأكد من أن الـ Hero Image صورة رسمية
5. تأكد من أن كل GPU له بطاقة منفصلة
6. تأكد من أن بطاقات المواصفات غير متداخلة
7. تأكد من أن زر "شوف التفاصيل" في نفس المستوى في جميع البطاقات
