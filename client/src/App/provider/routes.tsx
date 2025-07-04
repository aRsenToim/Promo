import type { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import BaseLayout from "../layouts/baseLayout/baseLayout";


const RoutesApp: FC = () => {
    return <Routes>
        <Route path="/" element={<BaseLayout />}>
            {routes.map((route) => <Route path={route.path} element={<route.element />} />)}
        </Route>
    </Routes>
}


export default RoutesApp