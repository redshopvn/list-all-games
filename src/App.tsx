import { useEffect, useState } from 'react'
import './App.css'
import AllGames from './Components/AllGames'
import FindGames from './Components/FindGames'
import Header from './Components/Header'
import NewGames from './Components/NewGames'
import TextContent from './Components/TextContent'

export type LanguageCode = 'vi' | 'en' | 'fr' | 'de' | 'ua' | 'ru' | 'es' | 'it' | 'zh' | 'ko' | 'ja'

const languageCodes: LanguageCode[] = ['vi', 'en', 'fr', 'de', 'ua', 'ru', 'es', 'it', 'zh', 'ko', 'ja']

const getInitialLanguage = (): LanguageCode => {
  if (typeof window === 'undefined') {
    return 'vi'
  }

  const value = new URLSearchParams(window.location.search).get('lang')
  return languageCodes.includes(value as LanguageCode) ? (value as LanguageCode) : 'vi'
}

const LanguageFlag = ({ code }: { code: string }) => {
  const flagMap: Record<string, JSX.Element> = {
    vi: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" aria-hidden="true" className="language_flag_svg">
        <rect fill="#da251d" width="900" height="900" />
        <polygon fill="#ff0" points="450,100 510,290 710,290 550,390 610,590 450,470 290,590 350,390 190,290 390,290" />
      </svg>
    ),
    en: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="language_flag_svg">
        <rect width="24" height="24" fill="#012169" />
        <path d="M0 0l24 24M24 0L0 24" stroke="#fff" strokeWidth="4" />
        <path d="M0 0l24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2" />
        <path d="M12 0v24M0 12h24" stroke="#fff" strokeWidth="6" />
        <path d="M12 0v24M0 12h24" stroke="#C8102E" strokeWidth="3" />
      </svg>
    ),
    fr: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="language_flag_svg">
        <rect width="8" height="24" fill="#0055A4" />
        <rect x="8" width="8" height="24" fill="#fff" />
        <rect x="16" width="8" height="24" fill="#EF4135" />
      </svg>
    ),
    de: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="language_flag_svg">
        <rect width="24" height="8" fill="#000" />
        <rect y="8" width="24" height="8" fill="#DD0000" />
        <rect y="16" width="24" height="8" fill="#FFCE00" />
      </svg>
    ),
    ua: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="language_flag_svg">
        <rect width="24" height="12" fill="#005BBB" />
        <rect y="12" width="24" height="12" fill="#FFD500" />
      </svg>
    ),
    ru: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="language_flag_svg">
        <rect width="24" height="8" fill="#fff" />
        <rect y="8" width="24" height="8" fill="#0039A6" />
        <rect y="16" width="24" height="8" fill="#D52B1E" />
      </svg>
    ),
    es: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="language_flag_svg">
        <rect width="24" height="24" fill="#C60B1E" />
        <rect y="6" width="24" height="12" fill="#FFC400" />
      </svg>
    ),
    it: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="language_flag_svg">
        <rect width="8" height="24" fill="#009246" />
        <rect x="8" width="8" height="24" fill="#fff" />
        <rect x="16" width="8" height="24" fill="#CE2B37" />
      </svg>
    ),
    zh: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="language_flag_svg">
        <rect width="24" height="24" fill="#DE2910" />
        <path d="M8 8h2.5L9.5 10.5 11 13l-2.5-1.5L6 13l1.5-2.5L6 8h2.5L9.5 5.5z" fill="#FFDE00" />
      </svg>
    ),
    ko: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" aria-hidden="true" className="language_flag_svg">
        <rect width="900" height="900" fill="#fff" />
        <g transform="translate(450, 450)">
          <circle r="120" fill="#0047A0" />
          <path d="M 0,-120 A 120 120 0 0 1 0,120 A 60 60 0 0 0 0,-120" fill="#CD2E3A" />
          <circle r="60" fill="#CD2E3A" cy="60" />
          <circle r="60" fill="#0047A0" cy="-60" />
        </g>
        <g transform="translate(205, 235) rotate(-54)">
          <rect x="-60" y="-8" width="120" height="10" fill="#000" />
          <rect x="-60" y="8" width="120" height="10" fill="#000" />
          <rect x="-60" y="24" width="120" height="10" fill="#000" />
        </g>
        <g transform="translate(695, 665) rotate(-54)">
          <rect x="-60" y="-24" width="55" height="10" fill="#000" />
          <rect x="5" y="-24" width="55" height="10" fill="#000" />
          <rect x="-60" y="-8" width="55" height="10" fill="#000" />
          <rect x="5" y="-8" width="55" height="10" fill="#000" />
          <rect x="-60" y="8" width="55" height="10" fill="#000" />
          <rect x="5" y="8" width="55" height="10" fill="#000" />
        </g>
        <g transform="translate(695, 235) rotate(54)">
          <rect x="-60" y="-24" width="55" height="10" fill="#000" />
          <rect x="5" y="-24" width="55" height="10" fill="#000" />
          <rect x="-60" y="-8" width="120" height="10" fill="#000" />
          <rect x="-60" y="8" width="55" height="10" fill="#000" />
          <rect x="5" y="8" width="55" height="10" fill="#000" />
        </g>
        <g transform="translate(205, 665) rotate(54)">
          <rect x="-60" y="-24" width="120" height="10" fill="#000" />
          <rect x="-60" y="-8" width="55" height="10" fill="#000" />
          <rect x="5" y="-8" width="55" height="10" fill="#000" />
          <rect x="-60" y="8" width="120" height="10" fill="#000" />
        </g>
      </svg>
    ),
    ja: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="language_flag_svg">
        <rect width="24" height="24" fill="#fff" />
        <circle cx="12" cy="12" r="6" fill="#BC002D" />
      </svg>
    )
  }

  return flagMap[code] || flagMap.en
}

const languages = [
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ua', label: 'Українська' },
  { code: 'ru', label: 'Русский' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'zh', label: '简体中文' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' }
]

function App() {
  const [lang, setLang] = useState<LanguageCode>(getInitialLanguage)

  useEffect(() => {
    const nextLang = getInitialLanguage()
    setLang(nextLang)
  }, [])

  const updateLanguage = (nextCode: LanguageCode) => {
    setLang(nextCode)

    const url = new URL(window.location.href)
    if (nextCode === 'vi') {
      url.searchParams.delete('lang')
    } else {
      url.searchParams.set('lang', nextCode)
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}`)
  }

  return (
    <>
      <Header />
      <div className="language_switcher" aria-label="Language switcher">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            className={`language_button${lang === language.code ? ' active' : ''}`}
            aria-label={`Switch language to ${language.label}`}
            aria-pressed={lang === language.code}
            onClick={() => updateLanguage(language.code as LanguageCode)}
          >
            <LanguageFlag code={language.code} />
            <span>{language.label}</span>
          </button>
        ))}
      </div>
      <TextContent count={2784} lang={lang} />
      <FindGames lang={lang} />
      <NewGames />
      <AllGames />
    </>
  )
}

export default App
