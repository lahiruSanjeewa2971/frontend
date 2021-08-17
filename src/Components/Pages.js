import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Manager/dashboard/Dashboard'
import AddEmployee from './Manager/employees/AddEmployee'
import ManageEmployee from './Manager/employees/ManageEmployee'

function Pages(){
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/employee/add_employee" exact component={AddEmployee} />
            <Route path="/employee/manage_emp" exact component={ManageEmployee} />
        </Switch>
    )
}


export default Pages
