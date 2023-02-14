// importing react,useEffect and useState hooks
import React, { useEffect, useState } from "react";
import TodoContainer from "./components/todoContainer"; //import container
import { Bars } from "react-loader-spinner";

//main componenets
const App = () => {
    // after loading json we put whole object in json of useState
    const [json, setjson] = useState([]);
    //after loading
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
            setTimeout(() => {
                // after fething json we update json with calling this function
                // setJson that change value of json With help of useEffect Hook
                setjson(json);
                setLoading(true);
            }, 1000);
            console.log(json)
        });
    }, []);

    return (
        <div className="App">
            {/* after loading Api rendering TodoContainer Component If not ! then Show thw Waiting Bar  */}
            {loading ? (
                <TodoContainer jsonTodos={json} />
            ) : (
                <Bars
                    height="100"
                    width="100"
                    radius="5"
                    color="green"
                    ariaLabel="loading"
                    visible={true}
                    wrapperStyle={{marginLeft:650,marginTop:300}}
                />
            )}
        </div>
    );
};

export default App;
