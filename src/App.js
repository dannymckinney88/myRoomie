import Routes from "./config/routes";

function App() {
  // const [currentUser, setCurrentUser] = useState(localStorage.getItem('id'))
  // const storeUser = (user) => {
  //   setCurrentUser({ user })
  //   localStorage.setItem('id', user.id)
  //   localStorage.setItem('firstName', user.firstName)
  //   localStorage.setItem('lastName', user.lastName)
  // }

  return (
    <div className="App">
      <Routes /*currentUser={currentUser} storeUser={storeUser}*/ />
    </div>
  );
}

export default App;
