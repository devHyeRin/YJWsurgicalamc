import { useEffect, useRef, useState } from "react";
import { ClinicLogo } from './icons/Logo';

type MenuItem = {
  label: string;
  href: string;
};

const MENUS: MenuItem[] = [
  { label: "홈", href: "/" },
  { label: "진료안내", href: "/guide" },
  { label: "의료진", href: "/doctors" },
  { label: "예약", href: "/reserve" },
  { label: "오시는길", href: "/location" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // ESC로 닫기
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // 열려있을 때 바깥 클릭으로 닫기
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!open) return;
      const el = panelRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  // 모바일 드로어 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="hdr">
        {/* ✅ 햄버거: 왼쪽 */}
        <button
          type="button"
          className="hdr__burger"
          aria-label="메뉴"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hdr__burgerLine" />
          <span className="hdr__burgerLine" />
          <span className="hdr__burgerLine" />
        </button>

        {/* 브랜드 */}
        <a className="hdr__brand" href="/">
          <ClinicLogo size={100} className="hdr__logo" />
          <div className="hdr__text">
            <span className="hdr__title">윤장원 외과 동물병원</span>
            <span className="hdr__subtitle">YJW Animal Surgical Center</span>
          </div>
        </a>

        {/* 데스크탑 메뉴 */}
        <nav className="hdr__nav" aria-label="주요 메뉴">
          {MENUS.map((m) => (
            <a key={m.href} className="hdr__link" href={m.href}>
              {m.label}
            </a>
          ))}
        </nav>

        {/* 오른쪽 액션 */}
        <div className="hdr__right">
          <a className="hdr__cta" href="/reserve">
            예약하기
          </a>
        </div>
      </div>

      {/* ✅ 드로어: 왼쪽에서 */}
      <div className={`mnav ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mnav__backdrop" />

        <div className="mnav__panel" ref={panelRef} role="dialog" aria-label="모바일 메뉴">
          <div className="mnav__top">
            <span className="mnav__title">메뉴</span>
            <button type="button" className="mnav__close" onClick={() => setOpen(false)} aria-label="닫기">
              ✕
            </button>
          </div>

          <div className="mnav__list">
            {MENUS.map((m) => (
              <a key={m.href} className="mnav__item" href={m.href} onClick={() => setOpen(false)}>
                {m.label}
              </a>
            ))}
          </div>

          <div className="mnav__bottom">
            <a className="mnav__cta" href="/reserve" onClick={() => setOpen(false)}>
              예약하기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}