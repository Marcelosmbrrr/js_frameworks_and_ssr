import { Route, Routes } from 'react-router-dom';
import { CounterPage } from "../components/pages/CounterPage";
import { DashboardPage } from "../components/pages/DashboardPage";
import { RegistrationPage } from "../components/pages/RegistrationPage";
import { NotFoundpPage } from '../components/pages/NotFound';
import { TodoListPage } from "../components/pages/TodoListPage";
import { UsersTablePage } from "../components/pages/UsersTablePage";

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