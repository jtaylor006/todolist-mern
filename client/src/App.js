function App() {
    return (
        <div className="App">
            <h1>Welcome, Jarred</h1>
            <h4>My Tasks</h4>

            <div className="todos">
                <div className="todo">
                    <div className="checkbox"></div>
                    <div className="text">Get the bread</div>
                    <div className="delete-todo">x</div>
                </div>

                <div className="todo is-complete">
                    <div className="checkbox"></div>
                    <div className="text">Go workout</div>
                    <div className="delete-todo">x</div>
                </div>
            </div>
       </div>
    );
}

export default App;
