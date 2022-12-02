import { Route, Routes } from 'react-router-dom';
import { CounterPage } from "../components/pages/Counter/CounterPage";
import { DashboardPage } from "../components/pages/Dashboard/DashboardPage";
import { RegistrationPage } from "../components/pages/Registration/RegistrationPage";
import { NotFoundpPage } from '../components/pages/NotFound';
import { TodoListPage } from "../components/pages/TodoList/TodoListPage";
import { UsersTablePage } from "../components/pages/UsersTable/UsersTablePage";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route exact path="/registration" element={<RegistrationPage />} />
            <Route exact path="/todolist" element={<TodoListPage />} />
            <Route exact path="/users" element={<UsersTablePage />} />
            <Route path="*" element={<NotFoundpPage />} />
        </Routes>
    )
}