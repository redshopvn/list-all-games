import AllSteamGames from '../../steam_games.json'
import AllEpicGames from '../../epic_games.json'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const FindGames = () => {
    const allGames = [...AllSteamGames, ...AllEpicGames]
    const [foundGame, setFoundGame] = useState<{ name: string, image: string }[]>([])
    const [message, setMessage] = useState('')
    const onClick = (e: any) => {
        const value = e.target.value;
        console.log(e)
        if (value.length < 2) {
            setMessage('Tên game cần dài hơn 2 ký tự!');
            return;
        }
        const filtered = allGames.filter(g => g.name.toUpperCase().includes(value.toUpperCase()))
        setFoundGame(filtered)
        setMessage('')
    }
    const onClear = () => {
        setFoundGame([]);
        setMessage('')
    }
    return (<>
        <div className="search_container">
            <input id="searchInput" placeholder="Tìm tên game..." type="text" name="text" className="input" />
            <button onClick={e => onClick(e)}>Tìm kiếm</button>
            <button onClick={onClear}>Xóa</button>
        </div>
        <div>{message}</div>
        {foundGame.length > 0 ? <div className="card"><p>Có {foundGame.length} games chưa từ khóa "GOD"</p>
            <div className="list_game_container">
                {foundGame.map(g =>
                    <div className='ig'><LazyLoadImage
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