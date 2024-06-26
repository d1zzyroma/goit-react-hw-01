import './App.css'
import FriendList from './components/FriendList/FriendList'
import Profile from './components/Profile/Profile'
import userData from './components/Profile/userData.json'
import friends from './components/FriendList/friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './components/TransactionHistory/TransactionHistory.json'


function App() {
  return (
    <>
      <Profile 
        name ={userData.userData.username}
        tag = {userData.userData.tag}
        location={userData.userData.location}
        image = {userData.userData.avatar}
        stats={userData.userData.stats}
      />
      <FriendList friends={friends}/>

      <TransactionHistory items={transactions}/>
    </>
  )
}

export default App
