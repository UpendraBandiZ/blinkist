import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExplorePage from "../components/Pages/Explore/ExplorePage";
import LibraryPage from "../components/Pages/Library/LibraryPage";



const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/explore/category" exact component={ExplorePage}></Route>
        <Route path="/" exact component={ExplorePage}></Route>
        <Route path="/library" exact component={LibraryPage}></Route>
      </Switch>
    </div>
  );
};

export default Routes;
