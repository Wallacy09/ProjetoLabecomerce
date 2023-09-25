import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../components/Error";
import Default from "../Layout";

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Default />} />
                    <Route path="*" element={<Error />} />   
                </Routes>            
            </BrowserRouter>
        </>
    )
}

export default Ways