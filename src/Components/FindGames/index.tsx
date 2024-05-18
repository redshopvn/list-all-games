
import AllSteamGames from '../../steam_games.json'
import AllEpicGames from '../../epic_games.json'
import { useRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const FindGames = () => {
    const allGames = [...AllSteamGames, ...AllEpicGames]
    const inputRef = useRef<any>(null);
    const [foundGame, setFoundGame] = useState<{ name: string, image: string }[]>([])
    const [message, setMessage] = useState('')
    const onClick = () => {
        const value = inputRef.current?.value;
        if (value.length < 2) {
            setMessage('Tên game cần dài hơn 2 ký tự!');
            setFoundGame([]);
            return;
        }
        const filtered = allGames.filter(g => g.name.toUpperCase().includes(value.toUpperCase()))
        if (filtered.length === 0) {
            setMessage('Có 0 games chưa từ khóa '+ value)
        } else {
            setMessage('')
        }
        setFoundGame(filtered)
        
    }
    const onClear = () => {
        setFoundGame([]);
        setMessage('')
        inputRef.current.value = ''
    }
    return (<>
        <div className="search_container">
            <input id="searchInput" ref={inputRef} placeholder="Tìm tên game..." type="text" name="text" className="input" />
            <button onClick={onClick}>Tìm kiếm</button>
            <button onClick={onClear}>Xóa</button>
        </div>
        {message ? <div className='helperText'>{message}</div> : null}
        {foundGame.length > 0 ? <div className="card"><p className='message'>Có {foundGame.length} games chưa từ khóa "{inputRef.current.value}"</p>
            <div className="list_game_container_search">
                {foundGame.map((g, i) =>
                    <div className='ig' key={`search-${g.name}-${i}`}><LazyLoadImage
                        alt={g.name}
                        height={195}
                        src={g.image} // use normal <img> attributes as props
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