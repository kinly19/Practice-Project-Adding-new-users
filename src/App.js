import './App.scss';
import NewUser from './components/NewUser/NewUser';


function App() {

  const initialData = [
    {
      id: Math.random().toString(),  
      Name: "Crim",
      Age: "23"
    },
    {
      id: Math.floor(Math.random()),  
      Name: "Qween",
      Age: "25"
    },
  ];

  const [user, setUser] = useState(initialData)

  const addNewUser = (data) => { //passed down to NewUser
    setUser(prevState => {
      return [data, ...prevState];
    })
  }

  return (
    <div className="App">
     <h1>Practice project</h1>
      <NewUser onAddNewUser={addNewUser} />
    </div>
  );
}

export default App;
