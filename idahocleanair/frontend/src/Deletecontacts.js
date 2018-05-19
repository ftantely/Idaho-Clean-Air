import React from 'react'
import gql from "graphql-tag"
import { client } from './PrismaEndpoint/EndPoint'


export default class extends React.Component{
    state = { id:"" }

    render(){

        const DeleteContacts = async () => {
            let elements = await client.query({
                query: gql`
                    mutation {
                        deleteUser(
                            where:{ id: "${this.state.id}" }

                        ){
                            name
                            id
                            address
                            city
                        }
                    }
                `}).then((result) => { return result.data.users } )


            await this.setState({ contacts: elements })
        }



        return(
            <div>
                <h1>All Entered Contacts</h1>
                <button onClick={ LoadAllcontacts } >Get All Contacts</button>
                <br/><br/>

                { this.state.contacts[0] ? this.state.contacts.map((AllElements) => { return (< Show key={AllElements.id} data={AllElements} /> )})}
            </div>
        )
    }
}