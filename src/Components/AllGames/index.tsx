import AllSteamGames from '../../steam_games.json'
import AllEpicGames from '../../epic_games.json'
const AllGames = () => {
    const allGames = [...AllSteamGames, ...AllEpicGames]

    return (<div id="list_game_container" className='list_game_container'>
        {allGames.map((g: any, i) =>
            !g.tags && <div className='ig' key={`game-${g.name}-${i}`}><img
                alt={g.name}
                height={195}
                title={g.name}
                src={g.image} // use normal <img> attributes as props
                width={135} />
                <div className="title">{g.name}</div>
            </div>
        )}
    </div>)

        ;
}

export default AllGames;