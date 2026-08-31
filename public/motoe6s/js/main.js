/**
 * Main Interactive Application Script
 * High-Performance GPU-Accelerated Animation & Micro-Interactions
 * Zero-Lag, 60-120 FPS requestAnimationFrame Throttling
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Reading Progress Bar (RAF Throttled)
  const progressBar = document.getElementById("scrollProgressBar");
  let scrollTicking = false;

  window.addEventListener("scroll", () => {
    if (!scrollTicking && progressBar) {
      scrollTicking = true;
      requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollHeight > 0) {
          const scrollPercent = (totalScroll / scrollHeight) * 100;
          progressBar.style.width = `${scrollPercent}%`;
        }
        scrollTicking = false;
      });
    }
  }, { passive: true });

  // 2. Reveal on Scroll (Intersection Observer with Hardware-Accelerated Class)
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("revealed"));
  }

  // 3. Scroll Spy for Navigation Links (Optimized)
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  let spyTicking = false;

  window.addEventListener("scroll", () => {
    if (!spyTicking) {
      spyTicking = true;
      requestAnimationFrame(() => {
        let currentId = "";
        const scrollY = window.pageYOffset + 120;

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentId = section.getAttribute("id");
          }
        });

        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
        spyTicking = false;
      });
    }
  }, { passive: true });

  // 4. Image Lightbox Modal
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const zoomableImages = document.querySelectorAll(".zoomable-img");

  zoomableImages.forEach(img => {
    img.addEventListener("click", () => {
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Diagrama técnico ampliado";
        if (lightboxCaption) {
          lightboxCaption.textContent = img.getAttribute("data-caption") || img.alt || "Detalle técnico de ingeniería";
        }
        lightboxModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // 5. Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("navLinks") || document.getElementById("mobileNavMenu");

  if (mobileToggle && navMenu) {
    const toggleMenu = (forceState) => {
      const willOpen = typeof forceState === "boolean" ? forceState : !navMenu.classList.contains("open");
      navMenu.classList.toggle("open", willOpen);
      mobileToggle.setAttribute("aria-expanded", willOpen);
      if (willOpen) {
        mobileToggle.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>`;
      } else {
        mobileToggle.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>`;
      }
    };

    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        toggleMenu(false);
      });
    });

    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("open") && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        toggleMenu(false);
      }
    });
  }

  // 6. Netlify Footprint & Drawer Purge
  const purgeNetlifyFootprint = () => {
    const selectors = [
      '#netlify-drawer', '.netlify-drawer', '[data-netlify-drawer]',
      'netlify-drawer', 'iframe[src*="netlify"]', '.netlify-badge',
      '[class*="netlify-feedback"]', 'div[class*="netlify-identity"]'
    ];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });
  };

  purgeNetlifyFootprint();
  window.addEventListener('load', purgeNetlifyFootprint);

  if (typeof MutationObserver !== 'undefined') {
    const netlifyObserver = new MutationObserver(purgeNetlifyFootprint);
    netlifyObserver.observe(document.documentElement, { childList: true, subtree: true });
  }

  // 7. Silicon Board 3D Tilt (Ultra-smooth direct response)
  const siliconCard = document.getElementById("siliconCard");
  if (siliconCard) {
    let cardRect = null;
    const updateCardRect = () => {
      cardRect = siliconCard.getBoundingClientRect();
    };

    siliconCard.addEventListener("mouseenter", updateCardRect, { passive: true });

    siliconCard.addEventListener("mousemove", (e) => {
      if (!cardRect) updateCardRect();
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;
      const centerX = cardRect.width / 2;
      const centerY = cardRect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      siliconCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    }, { passive: true });

    siliconCard.addEventListener("mouseleave", () => {
      siliconCard.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  }

  // 8. Dual-Photo Circular X-Ray Scanner (Zero-Latency Dual Controller: PC Direct + Mobile Touch)
  const xrayStage = document.getElementById("xrayStage");

  if (xrayStage) {
    let stageRect = null;
    const refreshStageRect = () => {
      stageRect = xrayStage.getBoundingClientRect();
    };

    const setLensPos = (x, y) => {
      xrayStage.style.setProperty("--lens-x", `${x}px`);
      xrayStage.style.setProperty("--lens-y", `${y}px`);
    };

    // Desktop PC: Direct mouse tracking with 0ms delay
    xrayStage.addEventListener("mouseenter", refreshStageRect, { passive: true });

    xrayStage.addEventListener("mousemove", (e) => {
      if (!stageRect) refreshStageRect();
      const x = Math.max(0, Math.min(stageRect.width, e.clientX - stageRect.left));
      const y = Math.max(0, Math.min(stageRect.height, e.clientY - stageRect.top));
      setLensPos(x, y);
    }, { passive: true });

    // Mobile Devices: Instant Touch Tracking
    xrayStage.addEventListener("touchstart", (e) => {
      refreshStageRect();
      if (e.touches && e.touches[0]) {
        const x = Math.max(0, Math.min(stageRect.width, e.touches[0].clientX - stageRect.left));
        const y = Math.max(0, Math.min(stageRect.height, e.touches[0].clientY - stageRect.top));
        setLensPos(x, y);
      }
    }, { passive: true });

    xrayStage.addEventListener("touchmove", (e) => {
      if (e.touches && e.touches[0]) {
        if (!stageRect) refreshStageRect();
        const x = Math.max(0, Math.min(stageRect.width, e.touches[0].clientX - stageRect.left));
        const y = Math.max(0, Math.min(stageRect.height, e.touches[0].clientY - stageRect.top));
        setLensPos(x, y);
      }
    }, { passive: true });
  }
});
