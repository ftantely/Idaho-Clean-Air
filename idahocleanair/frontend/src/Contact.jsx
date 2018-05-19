import React from 'react'
import gql from "graphql-tag"
import { client } from './PrismaEndpoint/EndPoint'
import {Jumbotron} from 'reactstrap';


export default class Contact extends React.Component{
    state = { name: '', email: '', phone: '' , address: '', city: '', State: '', zip: '', message: '' }

    render(){

        const addToDataBase = async () => {
            console.log( "Hello")
            console.log(this.state)


            let elements = await client.mutate({
                mutation: gql`
                    mutation{
                        createUser(data: {
                            name: "${this.state.name}",
                            email: "${this.state.email}",
                            phone: "${this.state.phone}",
                            address: "${this.state.address}",
                            city: "${this.state.city}",
                            zip: "${this.state.zip}",
                            state: "${this.state.State}",
                            message: "${this.state.message}"
                        } ){
                            id
                            name
                            email
                        }
                    }
                `}).then((result) => { return result.data.createUser } )

            await this.setState({ name: '' })
        }

        return(
            <div>


                <div>
                    <Jumbotron>
                    <h3>Please provide contact info</h3>

                    <div>Your Name</div>
                    <input type="text" value={ this.state.name } onChange={ (e) => { this.setState({ name: e.target.value }) } } />
                    <br/>

                    <div>Email</div>
                    <input type="email" value={ this.state.email } onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                    <br/>

                    <div>Phone No</div>
                    <input type="text" value={ this.state.phone } onChange={ (e) => { this.setState({ phone: e.target.value }) } } />
                    <br/>

                    <div>Address</div>
                    <input type="text" value={ this.state.address } onChange={ (e) => { this.setState({ address: e.target.value }) } } />
                    <br/>

                    <div>City</div>
                    <input type="text" value={ this.state.city } onChange={ (e) => { this.setState({ city: e.target.value }) } } />
                    <br/>

                    <div>State</div>
                    <input type="text" value={ this.state.State } onChange={ (e) => { this.setState({ State: e.target.value }) } } />
                    <br/>

                    <div>Zip/Postcode</div>
                    <input type="text" value={ this.state.zip } onChange={ (e) => { this.setState({ zip: e.target.value }) } } />
                    <br/>

                    <div>Message</div>
                    <input type="text" value={ this.state.message } onChange={ (e) => { this.setState({ message: e.target.value }) } } />
                    <br/>


                    <br/><br/>
                    <button  onClick={ addToDataBase } >Submit</button>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}