import AllSteamGames from '../../steam_games.json'
import AllEpicGames from '../../epic_games.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Game {
    name: string;
    image: string;
    tags?: string[];
    app_id?: string;
    [key: string]: unknown;
}

const NewGames: React.FC = () => {
    const allGames: Game[] = [...(AllSteamGames as unknown as Game[]), ...(AllEpicGames as Game[])]
    console.log('NewGames allGames', allGames.length);
    
    return (
        <div className="card_new">
            <p className='message'>🌟🌟🌟GAME MỚI🌟🌟🌟</p>
            <div id="list_game_container" className='list_game_container_new'>
                <div className='highlight '>
                    {allGames.map((g: Game, i: number) =>
                        g.tags && g.tags.includes('highlight') && (
                            <div className=' highlight_game' key={`game-${g.name}-${i}`}>
                                <LazyLoadImage
                                    alt={g.name}
                                    // height={195}
                                    src={g.image} // use normal <img> attributes as props
                                // width={135} 
                                />
                                {/* <div className={g.tags.includes('highlight') ? ' title' : 'title'}>{g.name}</div> */}
                            </div>
                        )
                    )}
                </div>
                {allGames.map((g: Game, i: number) =>
                    g.tags && g.tags.includes('20260206') && !g.tags.includes('highlight') && (
                        <div className='ig ' key={`game-${g.name}-${i}`}>
                            <LazyLoadImage
                                alt={g.name}
                                height={195}
                                src={g.image} // use normal <img> attributes as props
                                width={135} />
                            {/* <div className={g.tags.includes('highlight') ? ' title' : 'title'}>{g.name}</div> */}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default NewGames;