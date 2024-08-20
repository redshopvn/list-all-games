import AllSteamGames from '../../steam_games.json'
import AllEpicGames from '../../epic_games.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const AllGames = () => {
    const allGames = [...AllSteamGames, ...AllEpicGames]

    return (<div id="list_game_container" className='list_game_container'>
        {allGames.map((g: any, i) =>
            !g.tags && <div className='ig' key={`game-${g.name}-${i}`}>
                <LazyLoadImage
                    alt={g.name}
                    height={195}
                    src={g.image} // use normal <img> attributes as props
                    width={135} />
                <div className="title">{g.name}</div>
            </div>
        )}
    </div>)

        ;
}

export default AllGames;