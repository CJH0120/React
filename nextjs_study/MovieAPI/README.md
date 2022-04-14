next js 시작   (마더코더)
04-12


Pages 폴더안에 생성하면됨
next js가 알아서해줌  == 추상화를 시킨거임

컴포넌트 이름은 중요하지않고,export default(URL) 가 가장 중요
index.js ==메인 페이지

네비에서 a태크 사용하지 말아야하는 이유  : 전체 새로고침
 next Link =>엄청빠름  

 <a style={{color:router.pathname==="/"?"red":"blue"}}> </a>
 =>  pathname ===/  이거면 red 다른거면 blue

/////////////////////////////////////////////////////////////////
 css module
사용 방법 
<div classname={styles.div}>   <div>
모듈.css => .div{css}
랜덤하게 이름 생성해서 중복방지

클래스 이름 여러개 쓸때
className={[
    styels.ex1,
    router.pathname==="/" ? styles.ex2 : "",
    ].join("")}
]}
className={
    `${styles.link}
    ${router.ex2 ==="/"?styles.ex2 : "" 
    }`}

<style jsx>{`
 nav{
             background-color:tomato;
         }
        a{
            text-decoration:none;
        }

`}</style>

클래스이름을 생각안해도된다
<style jsx golbal>{`
 nav{
             background-color:tomato;
         }
        a{
            text-decoration:none;
        }

`}</style



/////////////////////////////////////////////////////////////////
_app.is   = > 무조건 이이름으로 지어야함
처음 렌더링 되는것
기본 App을 재정의하려면 아래와 같이 ./pages/_app.js 파일을 만듭니다.
//시작페이지 설정 
export default function App ({Component,pageProps}){
                             불러올컴포넌트, 불러올값
    return(
        <>
        <div>
            <NavBar/>           //추가하는 컴포넌트
            <Component {...pageProps}/> //위에 선언한 컴포넌트
        </div>
            </>
    )
}
여기다가 global 쓰면됨 import해서 css 못넣음



04.13

 NEXT JS  패턴
 Layout.js 을 이용함


 import Head from "next/head"     
        홈페이지 이름 바꿀수있음

    ex)
     <Head>
        <title>HOME | Next Movies</title>
    </Head>






export async function getServerSideProps(){
  
}
위함수는 오직 서버에서만 실행된다



ex)
all.js
export default function All(){
    return "all";
}
==> 폴더명/all 
index.js
export default function All(){
    return "movie index";
}
==>localhost:3000/폴더명


변수 url 
파일이름  [eX].js 


router.push({
  pathname:`/movies/${id}`,       //어디로가는지
  query:{
   
    title: "${id}"                //보여줄
  }
},
`/movies/${id}`                   //url가리기
)
}




***************************
   <h4>{router.query.title || "Loding...."}</h4> 
   => 홈페이지를 거쳐 들어오지 않으면(ex:url로 들어왔을경우)다 로딩으로 뜸!
