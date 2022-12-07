
import './App.css';
import Card from './components/card'
import { useLayoutEffect, useState } from 'react';
import { ref, child, get} from "firebase/database";
import {database} from './firebase'
function App() {
    const [member, setMember] = useState([])
    const dbRef = ref(database);
    useLayoutEffect(() => {
        get(child(dbRef, `member`))
        .then((snapshot) => {
            snapshot.val()
            console.log(snapshot.val())
            const users = [...snapshot.val()]
            setMember(users)
            
        })
        .catch((error) => {
            console.error(error);
        });
    }, [dbRef]) 
    console.log(member.map((item) => {
        console.log(item)
        return item
    }))
    return (
        <>
            {/* <header>
            </header>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div> */}
            <Card
            data = {member}
            />
        </>
    );
}

export default App;
