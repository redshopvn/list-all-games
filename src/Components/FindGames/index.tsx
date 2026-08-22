/* eslint-disable @typescript-eslint/no-explicit-any */

import type { LanguageCode } from '../../App'
import AllSteamGames from '../../steam_games.json'
import AllEpicGames from '../../epic_games.json'
import { useRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const FindGames = ({ lang }: { lang: LanguageCode }) => {
    const allGames = [...AllSteamGames, ...AllEpicGames]
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [searchValue, setSearchValue] = useState('')
    const [foundGame, setFoundGame] = useState<{ name: string, image: string }[]>([])
    const [message, setMessage] = useState('')

    const translations: Record<LanguageCode, {
        placeholder: string
        minLength: string
        zeroResults: string
        search: string
        result: string
        clear: string
    }> = {
        vi: {
            placeholder: 'Tìm tên game...',
            minLength: 'Tên game cần dài hơn 2 ký tự!',
            zeroResults: 'Có 0 games chưa từ khóa ',
            search: 'Tìm kiếm',
            result: 'Có {count} games chưa từ khóa "{query}"',
            clear: 'Xóa tìm kiếm'
        },
        en: {
            placeholder: 'Search game name...',
            minLength: 'Game name must be longer than 2 characters!',
            zeroResults: 'There are 0 games matching ',
            search: 'Search',
            result: 'There are {count} games matching "{query}"',
            clear: 'Clear search'
        },
        fr: {
            placeholder: 'Rechercher un jeu...',
            minLength: 'Le nom du jeu doit contenir plus de 2 caractères !',
            zeroResults: 'Aucun jeu trouvé pour ',
            search: 'Rechercher',
            result: '{count} jeux correspondent à "{query}"',
            clear: 'Effacer la recherche'
        },
        de: {
            placeholder: 'Spielnamen suchen...',
            minLength: 'Der Spielname muss länger als 2 Zeichen sein!',
            zeroResults: 'Keine Spiele für ',
            search: 'Suchen',
            result: '{count} Spiele entsprechen "{query}"',
            clear: 'Suche löschen'
        },
        ua: {
            placeholder: 'Пошук гри...',
            minLength: 'Назва гри має містити більше 2 символів!',
            zeroResults: 'Немає результатів для ',
            search: 'Пошук',
            result: '{count} ігор відповідають "{query}"',
            clear: 'Очистити пошук'
        },
        ru: {
            placeholder: 'Поиск игры...',
            minLength: 'Название игры должно содержать более 2 символов!',
            zeroResults: 'Нет результатов для ',
            search: 'Поиск',
            result: '{count} игр соответствуют "{query}"',
            clear: 'Очистить поиск'
        },
        es: {
            placeholder: 'Buscar juego...',
            minLength: '¡El nombre del juego debe tener más de 2 caracteres!',
            zeroResults: 'No hay juegos que coincidan con ',
            search: 'Buscar',
            result: 'Hay {count} juegos que coinciden con "{query}"',
            clear: 'Borrar búsqueda'
        },
        it: {
            placeholder: 'Cerca il gioco...',
            minLength: 'Il nome del gioco deve contenere più di 2 caratteri!',
            zeroResults: 'Nessun gioco trovato per ',
            search: 'Cerca',
            result: 'Ci sono {count} giochi per "{query}"',
            clear: 'Cancella ricerca'
        },
        zh: {
            placeholder: '搜索游戏名称...',
            minLength: '游戏名称必须超过 2 个字符！',
            zeroResults: '没有匹配关键词 ',
            search: '搜索',
            result: '有 {count} 个游戏匹配 "{query}"',
            clear: '清除搜索'
        },
        ko: {
            placeholder: '게임 이름 검색...',
            minLength: '게임 이름은 2자 이상이어야 합니다!',
            zeroResults: '다음 키워드에 맞는 게임이 없습니다: ',
            search: '검색',
            result: '"{query}"에 맞는 게임이 {count}개 있습니다',
            clear: '검색 지우기'
        },
        ja: {
            placeholder: 'ゲーム名を検索...',
            minLength: 'ゲーム名は2文字以上で入力してください！',
            zeroResults: '一致するゲームはありません: ',
            search: '検索',
            result: '"{query}" に一致するゲームは {count} 件です',
            clear: '検索をクリア'
        }
    }

    const text = translations[lang] ?? translations.vi

    const onClick = () => {
        const value = searchValue.trim();
        if (value.length < 2) {
            setMessage(text.minLength);
            setFoundGame([]);
            return;
        }
        const filtered = allGames.filter(g => g.name && g.name.toUpperCase().includes(value.toUpperCase()))
        const validGames = filtered.map(g => ({ name: g.name as string, image: g.image }))
        if (validGames.length === 0) {
            setMessage(text.zeroResults + value)
        } else {
            setMessage('')
        }
        setFoundGame(validGames)
    }
    const onClear = () => {
        setSearchValue('');
        setFoundGame([]);
        setMessage('')
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }
    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onClick();
        }
    }
    return (<>
        <div className="search_container">
            <div className="search_input_wrap">
                <input
                    id="searchInput"
                    ref={inputRef}
                    placeholder={text.placeholder}
                    type="text"
                    name="text"
                    className="input"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    onKeyDown={onKeyDown}
                    aria-label={text.placeholder}
                />
                {searchValue.length > 0 ? (
                    <button
                        type="button"
                        className="search_clear_button"
                        aria-label={text.clear}
                        onClick={onClear}
                        onMouseDown={(event) => event.preventDefault()}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                ) : null}
            </div>
            <button type="button" onClick={onClick}>{text.search}</button>
        </div>
        {message ? <div className='helperText'>{message}</div> : null}
        {foundGame.length > 0 ? <div className="card"><p className='message'>{text.result.replace('{count}', String(foundGame.length)).replace('{query}', searchValue)}</p>
            <div className="list_game_container_search">
                {foundGame.map((g, i) =>
                    <div className='ig' key={`search-${g.name}-${i}`}><LazyLoadImage
                        alt={g.name}
                        height={195}
                        src={g.image}
                        width={135} />
                        <div className="titleShow">{g.name}</div>
                    </div>
                )}
            </div>
        </div> : null}

    </>)

        ;
}

export default FindGames;