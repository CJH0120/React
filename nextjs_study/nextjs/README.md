## next js 
## 시작이유 ssr 과 csr의 장점만 쓰고싶어서

### 04-12


<a>Pages 폴더안에 생성하면됨 </a>
next js가 알아서해줌  == 추상화를 시킨거임

컴포넌트 이름은 중요하지않고,export default(URL) 가 가장 중요
index.js ==메인 페이지

네비에서 a태크 사용하지 말아야하는 이유  : 전체 새로고침 <br/>
 next Link =>엄청빠름   <br/>

 <a style={{color:router.pathname==="/"?"red":"blue"}}> </a> <br/>
 =>  pathname ===/  이거면 red 다른거면 blue

<P>/////////////////////////////////////////////////////////////////</P>
 css module 사용 방법 
 <br/>
<div classname={styles.div}>   <div>
모듈.css => .div{css}
 <br/>
nextjs 가 클래스이름을 랜덤하게 이름 생성해서 중복방지
 <br/>

클래스 이름 여러개 쓸때
 <br/>
className={[
    styels.ex1,
    router.pathname==="/" ? styles.ex2 : "",
    ].join("")}
]}<br/>
className={
    `${styles.link}
    ${router.ex2 ==="/"?styles.ex2 : "" 
    }`}
<br/>
<style jsx>{`
 nav{
             background-color:tomato;
         }
        a{
            text-decoration:none;
        }

`}</style>

 장점<b>클래스이름을 생각안해도된다</b>
<style jsx golbal>{`
 nav{
             background-color:tomato;
         }
        a{
            text-decoration:none;
        }

`}</style


<br/>
/////////////////////////////////////////////////////////////////<br/>
처음 렌더링 되는것<br/>
 _app.is   = > 무조건 이이름으로 지어야함<br/>

기본 App을 재정의하려면 아래와 같이 ./pages/_app.js 파일을 만듭니다.<br/>
//시작페이지 설정 <br/><br/>
export default function App ({Component,pageProps}){<br/>
                    
    return(
        <>
        <div>
            <NavBar/>           //추가하는 컴포넌트
            <Component {...pageProps}/> //위에 선언한 컴포넌트
        </div>
            </>
    )
}<br/>
  Component=불러올컴포넌트<br/>,pageProps= 불러올값<br/>
<b>여기다가 global 쓰면됨 import해서 css 못넣음</b>


















