import { useEffect, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import { authService } from './firebase';
import Page from './pages/Page';
import Header from './shared/Header';
function App() {
  const [isLogin , setIsLogin] = useState(false);
  const [userObj , setUserObj] = useState("");
  useEffect(()=> {
    authService.onAuthStateChanged((user)=> {
        if(user) {
            setIsLogin(true);
            setUserObj({
              displayName : user.displayName,
              uid:user.uid,
              updateProfile : (args) => user.updateProfile(args),
            })
        }else{
            setIsLogin(false)
        }
    })
},[])

const refreshUser = () => {
  const user = authService.currentUser;
  setUserObj({
    displayName : user.displayName,
    uid : user.uid,
    updateProfile : (args) => user.updateProfile(args),
  })
}
  return (
      <BrowserRouter>
        <Header isLogin={isLogin} userObj={userObj} refreshUser={refreshUser}/>
        <Page userObj={userObj} refreshUser={refreshUser}/>
      </BrowserRouter>
  
  );
}

export default App;
