import { Route, Routes } from 'react-router-dom';
import { CounterPage } from "../components/pages/Counter/CounterPage";
import { DashboardPage } from "../components/pages/Dashboard/DashboardPage";
import { NotFoundpPage } from '../components/pages/NotFound';
import { TodoListPage } from "../components/pages/TodoList/TodoListPage";
import { TablePage } from "../components/pages/Table/TablePage";
import { MemosPage } from '../components/pages/Memos/MemosPage';

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route exact path="/todolist" element={<TodoListPage />} />
            <Route exact path="/table" element={<TablePage />} />
            <Route exact path="/memoization" element={<MemosPage />} />
            <Route path="*" element={<NotFoundpPage />} />
        </Routes>
    )
}