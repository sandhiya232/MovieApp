function GeneralFilter ({genreList,setSelectedgenre}){
    return(
        <>
        <select className="p-2 mb-4 bg-gray-900 bg-opacity-60  backdrop-blur-md text-white rounded"
        onChange={(e) => setSelectedgenre(e.target.value)}>
            <option value=''>All genres</option>
        {genreList.map(genre =>{
            return(
                <option key={genre} value ={genre.id}>{genre.name}</option>
            )
        })}
        </select>
        </>
    )
}

export default GeneralFilter