import { Sec_Header, Sec_Mainwrap, Sec_Img, Sec_Icon, Sec_Comment } from "../Styled/CloneUIUX"
import { MoiveContext } from "../Context/MovieContext"
const MovieItem = ()=>{




    return(
        <MoiveContext.Provider >

        <Sec_Mainwrap>
         <Sec_Header>무비 헤더</Sec_Header>
         <Sec_Img>무비 이미지</Sec_Img>
         <Sec_Icon>무비 아이콘</Sec_Icon>
         <Sec_Comment>무비 코멘트</Sec_Comment>
         </Sec_Mainwrap>

         </MoiveContext.Provider>
    )
}
export default MovieItem