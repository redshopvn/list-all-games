import AllSteamGames from '../../steam_games.json'
import AllEpicGames from '../../epic_games.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
const AllGames = () => {
    const allGames = [...AllSteamGames, ...AllEpicGames]
    const itemsPerPage = 45;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = allGames.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(allGames.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % allGames.length;
        
        setItemOffset(newOffset);
        const fistElement = document.getElementById("first-game");
        if (fistElement) {
            fistElement.scrollIntoView()
            console.log(
                `called`
            );
        }
    };

    return (<div className='main_container'>
        <div id="list_game_container" className='list_game_container'>
            <div id='first-game'/>
            {currentItems.map((g: any, i) =>
                <div className='ig' key={`game-${g.name}-${i}`} >
                    <LazyLoadImage
                        alt={g.name}
                        height={195}
                        src={g.image} // use normal <img> attributes as props
                        width={135} />
                    <div className="title">{g.name}</div>
                </div>
            )}
        </div>
        <ReactPaginate
            nextLabel="Tiếp >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Trước"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
    </div>
    )

        ;
}

export default AllGames;