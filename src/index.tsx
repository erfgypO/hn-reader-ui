/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import App from "./App";
import Feed from "./pages/Feed";
import Item from "./pages/Item";

render(
    () =>
        <Router root={App}>
            <Route path="/" component={Feed} />
            <Route path="/item/:id" component={Item} />
        </Router>,
    document.getElementById("root")!
);
