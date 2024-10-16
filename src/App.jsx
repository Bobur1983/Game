import { useState } from "react"

function App() {
  
  const holder = 'Введите имя...'
  const [text, setText] = useState('')
  const [game, setGame] = useState('')
  const [list, setList] = useState({
    Pubg: ['user1'] ,
    Dota: ['user2'] ,
    CsGo: ['user3'] ,
})

  const addNote = (event) => {
   event.preventDefault()
   
   if(text.length > 2 && game) {
     let newList = {...list}
     newList[game] = [...list[game], text]
     setList(newList)
   } 
   else{
    alert('Выберете игру, или имя должно быть минимум 2 буквы')
   }
   
   setText('')
  }

  const delNote = (id) => {
   setList(list.filter((item) => item.id != id))
  }

  return (
  <div className="box">    
    <form onSubmit={(event) => addNote(event) }>
      <input 
      type="text" 
      placeholder= {holder} 
      value={text}
      onChange={(event) => setText(event.target.value)}
      />
    <select value={game} onChange={(event) => setGame(event.target.value)}>
      <option>Выберите игру</option>
      <option>Pubg</option>
      <option>Dota</option>
      <option>CsGo</option>
    </select>    
      <button className="addName">Добавить имя</button>      
    </form>
    {/* {list.length > 0 ? (
    <ul className="list">
      {list.map ((el, i) => (
      <li key={el.id}>
        <h3>{el.id}</h3>
        <h3>{el.name} </h3>
        <button onClick={() => delNote(el.id)} className="del">X</button>
      </li>
      ))}
    </ul>
    ) : <h2>Массив пустой</h2> } */}
   <ul className="list">
        <div className="item">
          <h2>PubG</h2>
          {
            list.Pubg.map((user) => (
              <li key={user}>{user}</li>
            ))
          }
        </div>
        <div className="item">
          <h2>DOTA</h2>
          {
            list.Dota.map((user) => (
              <li key={user}>{user}</li>
            ))
          }
        </div>
        <div className="item">
          <h2>CsGo</h2>
          {
            list.CsGo.map((user) => (
              <li key={user}>{user}</li>
            ))
          }
        </div>
      </ul>
  </div>
  )
}

export default App
