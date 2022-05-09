import * as React from "react";
import {Routes, Route, HashRouter,} from "react-router-dom";
import Main from "./components/main";
import HomePage from "./components/pages/home-page";
import DriftPage from "./components/pages/drift-page";
import TimeAttackPage from "./components/pages/time-attack-page";
import ForzaPage from "./components/pages/forza-page";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index path="/" element={<HomePage/>}/>
                    <Route path="drift" element={<DriftPage/>}/>
                    <Route path="timeattack" element={<TimeAttackPage/>}/>
                    <Route path="forza" element={<ForzaPage/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}
