const MoiveHead =({movies}) =>{

return(
    <>
      <div className="moviewrap">
    {movies && movies.map((item)=>(
    <div className="movielist" key={item.rank}>
    <h3><span>{item.rank}위</span> {item.movieNm}</h3>
    <h3>누적 관객수 {item.audiAcc}명</h3>
    </div>

    ))}
        
    </div>
    </>
)
} 
export default MoiveHead