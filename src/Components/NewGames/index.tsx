import AllSteamGames from '../../steam_games.json'
import AllEpicGames from '../../epic_games.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const NewGames = () => {
    const allGames = [...AllSteamGames, ...AllEpicGames]

    return (<div className="card">
        <p className='message'>🌟🌟🌟GAME MỚI🌟🌟🌟</p><div id="list_game_container" className='list_game_container_new'>
            <div className='highlight'>
                {allGames.map((g: any, i) =>
                    g.tags && g.tags.includes('new_20240805') && g.tags.includes('highlight') && <div className=' highlight_game' key={`game-${g.name}-${i}`}>
                        <LazyLoadImage
                            alt={g.name}
                            // height={195}
                            src={g.image} // use normal <img> attributes as props
                        // width={135} 
                        />
                        <div className={g.tags.includes('highlight') ? ' title' : 'title'}>{g.name}</div>
                    </div>
                )}
            </div>
            {allGames.map((g: any, i) =>
                g.tags && g.tags.includes('new_20240805') && !g.tags.includes('highlight') && <div className='ig ' key={`game-${g.name}-${i}`}>
                    <LazyLoadImage
                        alt={g.name}
                        height={195}
                        src={g.image} // use normal <img> attributes as props
                        width={135} />
                    <div className={g.tags.includes('highlight') ? ' title' : 'title'}>{g.name}</div>
                </div>
            )}
        </div></div>)

        ;
}

export default NewGames;