import { useContext, useState } from "react"
import GeneralFilter from "../components/GeneralFilter"
import { WatchListContext } from "../context/WatchListContext";
import Moviecard from "../components/Moviecard"

function Watchlist() {
    const {watchlist,genreList} = useContext(WatchListContext)

    const [search,setSearch] = useState('')
    const [selectedgenre,setSelectedgenre] = useState('')

    const filteredmovies = watchlist.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    ).filter((movie) =>{
        return !selectedgenre || movie.genre_ids.includes(Number(selectedgenre))
    })
    return (
        <>
            <div className="p-4 pt-16">
                <input
                    className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform
         -translate-x-1/2 z-10"
                    type='text' placeholder="Search Movies ..."
                    onChange={(e) => setSearch(e.target.value)} />

                <div className="mt-16 flex justify-center">
                    <GeneralFilter genreList= {genreList}
                    setSelectedgenre = {setSelectedgenre}/>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                    {filteredmovies.map(movie => {
                        return (
                            <Moviecard key={movie.id} movie={movie} />
                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default Watchlist