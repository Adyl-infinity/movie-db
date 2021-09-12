import React from "react";
import Movies from "./Views/Movie/Movies";
import MovieDetails from "./Views/MovieDetails/MovieDetails";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Actor from "./Views/Actor/Actor";
import Footer from "./Components/Footer/Footer";
import People from "./Views/People/People";
import Browse from "./Views/BrowseSearch/Browse";
import Hero from "./Views/Hero/Hero";

function App() {
  return (
    <Router>
           <Header />
           <main>
               <Route exact path="/"><Hero /></Route>
               <Route path="/movies/:id"><Movies /></Route>
               <Route path='/moviedetails/:id'><MovieDetails /></Route>
               <Route path='/actor/:id'><Actor /></Route>
               <Route path="/people/:id"><People /></Route>
               <Route path="/browse/:id"><Browse /></Route>
           </main>
           <Footer />
    </Router>
  );
}

export default App;
