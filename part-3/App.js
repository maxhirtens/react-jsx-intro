const App = () => {
    return (
        <div>
            <Person name="Max" age="21" hobbies={['taekwondo', 'golf', 'coffee']} />
            <Person name="Thomas" age="18" hobbies={['taekwondo', 'golf', 'coffee']}/>
            <Person name="Eleonora" age="8" hobbies={['taekwondo', 'golf', 'coffee']}/>
        </div>
    )
    }

ReactDOM.render(<App />, document.getElementById('root'));