import {useState} from "react";

function  Tailor(){

    let [counter, setCounter] = useState(0);
    const stringValue = "Hello Mr John";
    const addValue = () => {
        if (counter <= 100) {
            setCounter(prevCounter => prevCounter + 1);
            setCounter(prevCounter => prevCounter + 1);
            setCounter(prevCounter => prevCounter + 1);
            setCounter(prevCounter => prevCounter + 1);        }
    };
    const removeValue = () => {
        counter = counter - 1;
        if (counter >= 0) {
            setCounter(counter)
        }
    };

    return (
        <div>
            <h1>{stringValue}</h1>
            <h2 className='bg-green-400'>Counter Value : {counter}</h2>
            <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
            <button onClick={addValue} disabled={counter >= 100}>Add Button</button>
            <button onClick={removeValue} disabled={counter <= 0}>Remove Button</button>
        </div>
    )
}
export default Tailor
