import './App.css';
import { Provider } from "react-redux";
import Store from './redux/Store';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
    return (
        <BrowserRouter>
            <Provider store={Store}>
                <Routes>
                    <Route path="/" element={<Counter />} />
                    <Route path="/todo" element={<TodoList />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
