import { useRouter } from "next/router"

export default function Detail(){


    const router =useRouter();
   


    return (
    <>
    <div>
        <h4>{router.query.title || "Loding...."}</h4>
    </div>
      <style jsx>{`
      div{
       width:550px;
        margin :0 auto;
     
        text-align: center;
        
      }
      `}</style>
      </>
    )
}