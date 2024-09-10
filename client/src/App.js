import TextEditor from "./TextEditor";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Navigate as Redirect,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    element={<Redirect to={`/documents/${uuidv4()}`} />}
                />
                <Route path="/documents/:id" element={<TextEditor />} />
            </Switch>
        </Router>
    );
}

export default App;
