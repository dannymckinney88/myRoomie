import Routes from "./config/routes";
import './App.css';
import { db } from './firebase'

db.collection("test from module").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then((docRef) => {
  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});


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
