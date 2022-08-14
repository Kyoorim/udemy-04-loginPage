import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // 로그인이 이미 되어있는 상태인지 로컬스토리지에서 확인 => 단점: 무한루프를 만들 수 있음
  // const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  // if (storedUserLoggedInInformation === "1") {
  //   setIsLoggedIn(true);
  // }

  // ------여기서부터의 내용은 다 auth-context에서 관리하게 만듦!----
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and passw
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const context = useContext(AuthContext);

  return (
    <React.Fragment>
      {/* <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    > ==> auth-context로 내용 이동시킴!!*/}

      {/* 필요한 해당 컴포넌트 전체를 AuthContext로 감싸면 그 안에 들어가있는 모든 컴포넌트는 해당 컨텍스트에 접근할 수 있음 */}
      {/*<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> ==>  AuthContext 에서 value로 전달하고 있으므로 따로 isAuthenticated로 props를 전달할 필요가 없음*/}
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
