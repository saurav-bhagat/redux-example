import './App.css';
import { Provider } from "react-redux";
import Store from './redux/Store';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import GithubUsers from './components/GithubUsers';

function App() {
    return (
        <BrowserRouter>
            <Provider store={Store}>
                <Routes>
                    <Route path="/" element={<Counter />} />
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/github" element={<GithubUsers />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
