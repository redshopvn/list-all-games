import AllSteamGames from '../../steam_games.json'
import AllEpicGames from '../../epic_games.json'
const NewGames = () => {
    const allGames = [...AllSteamGames, ...AllEpicGames]

    return (<div className="card">
        <p className='message'>🌟🌟🌟GAME MỚI🌟🌟🌟</p><div id="list_game_container" className='list_game_container_new'>
            {allGames.map((g: any, i) =>
                g.tags && g.tags.includes('new_20240805') && <div className='ig ' key={`game-${g.name}-${i}`}><img
                    alt={g.name}
                    height={195}
                    title={g.name}
                    className={g.tags.includes('highlight') ? '' : ''}
                    src={g.image} // use normal <img> attributes as props
                    width={135} />
                    <div className={g.tags.includes('highlight') ? ' title' : 'title'}>{g.name}</div>
                </div>
            )}
        </div></div>)

        ;
}

export default NewGames;