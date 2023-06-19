import UserCard from "./UserCard.jsx";
import User from "./user.json";

function App() {
  return (
    <>
      <UserCard
        name={User.name}
        age={User.age}
        phoneNumber={User.phoneNumber}
        address={User.address}
      />
    </>
  );
}

export default App;
console.log(User);
