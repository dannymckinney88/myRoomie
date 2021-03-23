import Routes from "./config/routes";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
// import { db } from './firebase'

// db.collection("test from module").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes /*currentUser={currentUser} storeUser={storeUser}*/ />
      </AuthProvider>
    </div>
  );
}

export default App;
