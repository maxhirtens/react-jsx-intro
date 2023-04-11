const App = () => {
    return (
        <div>
            <Tweet name="Max H" username="maxmaxmax" date="3-18-23" msg="Hello World 1"/>
            <Tweet name="Tom H" username="tom121" date="3-19-23" msg="Hello World 2"/>
            <Tweet name="Eve H" username="eeeevvvvee" date="3-18-22" msg="Hello World 3"/>
        </div>
    )
    }

ReactDOM.render(<App />, document.getElementById('root'));