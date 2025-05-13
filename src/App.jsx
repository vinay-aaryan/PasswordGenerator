
import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLenght] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
// useCallBack fuction to optimise states
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvuwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*+="; 
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random()*str.length+1);
  
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

const copyPassword = useCallback(()=> {
  passwordRef.current?.select()   // use to hover on copied text
  // passwordRef.current?.setSelectionRange(0, 4)   use to select range 
  window.navigator.clipboard.writeText(password)
}, [password])

// useEffect() jab bhi page load hota h to first time par ye call hota h -- abbho bs itna pata hai is project se. aslo dependeinces k saath bhi kuch ched chaadh huo to dobara se run ho jyega 
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed , passwordGenerator])



  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow=md rounded-2xl mt-20 p-8 my-3 text-white bg-gray-700 text-center text-2xl">
        Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-200 mt-6 text-red-500">
          <input
            type="text"
            value={password}
            className="outline-none w-full p-2"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPassword} 
          className="outline-none cursor-pointer bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-amber-300">
            COPY
          </button>
        </div>
        <div className="flex gap-4 text-lg text-orange-400">
          <div className="flex iteams-center gap-1">
                  <input 
                  type="range"
                  min={6}
                  max={20}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e)=>{setLenght(e.target.value)}}
                  />
                  <label> Length {length} </label>
          </div>
          <div className="flex iteams-center gap-1">
                  <input id="numberInput"
                  type="checkbox"
                  defaultChecked = {numAllowed}
                  className="cursor-pointer"
                  onChange={()=>{
                    setNumAllowed((prev)=> !prev)}}
                   />  
                  <label htmlFor="numberInput" className="cursor-pointer"> Numbers </label>
          </div>
          <div className="flex iteams-center gap-1">
                  <input id="char"
                  type="checkbox"
                  className="cursor-pointer"
                  defaultChecked = {charAllowed}
                  onChange={()=>{
                    setCharAllowed((prev)=> !prev)}}
                  />
                  <label htmlFor="char" className="cursor-pointer"> Characters </label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
