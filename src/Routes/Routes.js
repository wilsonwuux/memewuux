import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ComponentMeme from '../Components/Start'
import Carrul from '../Components/Carrusel'
import BootsTable from '../Components/TableBstrap'
import NavBarComponent from '../Components/Nav'
import CreateMemesControl from '../Components/CreateMeme'
const Routes = () =>
{
    return(
        <Router>
            <NavBarComponent/>
            <br/>
                <Switch>
                    <Route path="/memewuux/" exact component={Carrul}/>
                    <Route path="/memewuux/oldtable" component={ComponentMeme}/>
                    <Route path="/memewuux/bootstable" component={BootsTable}/>
                    <Route path="/memewuux/newmeme" component={CreateMemesControl}/>
                </Switch>
        </Router>
    )
}

export default Routes;