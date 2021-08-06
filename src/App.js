
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Service from "./components/Service";
import GlobalStyle from "./components/GlobalStyle";
import Hall from "./components/Hall";
import ChickenGallery from "./components/ChickenGallery";
import BeefGallery from "./components/BeefGallery";
import LambGallery from "./components/LambGallery";
import PorkGallery from "./components/PorkGallery";
import {LangProvider} from "./components/LangContext"
import {Helmet} from "react-helmet";


function App() {
	return (
		<div className="App" style={{"overflowX": "hidden"}}>

<Helmet>
        <title>Néstor Almarza</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
		
		<LangProvider>
			<Router>
				
			<Header />
				<Route path="/" exact component={Hall}  />
				<Route path="/about-me" component={AboutMe} />
				<Route path="/contact" component={Contact} />
				<Route path="/service" exact component={Service} />
				<Route path="/service/chicken" component={ChickenGallery} />
				<Route path="/service/beef" component={BeefGallery} />
				<Route path="/service/pork" component={PorkGallery} />
				<Route path="/service/lamb" component={LambGallery} />
			</Router>
			
			<GlobalStyle></GlobalStyle>
			
			</LangProvider>
		</div>
	);
}

export default App;


