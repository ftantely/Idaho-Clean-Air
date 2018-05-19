import React from 'react'
import gql from "graphql-tag"
import { client } from './PrismaEndpoint/EndPoint'
import Show from './Show'



export default class extends React.Component{
    state = { contacts: [] }

        async componentDidMount (){
        let elements = await client.query({
            query: gql`
                query {
                    users {
                        id
                        name
                        email
                        phone
                        address
                        city
                        zip
                        state
                        message
                    }
                }
            `}).then((result) => { return result.data.users } )


        await this.setState({ contacts: elements })
    }


    render(){





        return(
            <div>

                <br/><br/>
                <h1>All Entered Contacts 22</h1>

                <br/><br/>

                { this.state.contacts[0] ? this.state.contacts.map((Element) => { return (< Show key={Element.id} data={Element} /> )}) : <div>Click to get all contacts</div> }
            </div>
        )
    }
}