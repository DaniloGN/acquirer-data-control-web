import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens/App';
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Dashboard from "./screens/Dashboard";
import FilesTable from "./screens/FilesTable";

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={App} render={({ match: { url } }) => (
                <>
                    <Route path={`/`} component={Dashboard} exact />
                    <Route path={`/filestable`} component={FilesTable} />
                </>
            )}
        />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
