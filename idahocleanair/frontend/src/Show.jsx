import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import gql from "graphql-tag"
import { client } from './PrismaEndpoint/EndPoint'
import './Show.css';


export default class extends React.Component{
    state = { reroute: false }

    render(){
        const info = this.props.data
        console.log("info: ", info)




        const deletecontact = async () => {
            console.log( "Hello")

            let temp1 = await client.mutate({
                mutation: gql`
                    mutation {
                        deleteUser(
                            where:{ id: "${ info.id }" }
                        ){
                            name
                            id
                            address
                            city
                        }
                    }

                `}).then((result) => { return result.data.createUser } )

            await console.log("User Deleted: ", temp1 )
            await this.setState({ singerId: '' })
            window.location.reload()
        }





        const goToUnipage = () => {
            this.setState({ reroute: true })
        }


        return(
            <div className="OneUser">
                <div><strong>Name7: </strong>{info.name}</div>
                <div><strong>Email: </strong>{info.email}</div>
                <div><strong>Phone: </strong>{info.phone}</div>
                <div><strong>Adress:</strong>{info.address}</div>
                <div><strong>City: </strong>{info.city}</div>
                <div><strong>State: </strong>{info.state}</div>
                <div><strong>Message: </strong>{info.message}</div>
                < button onClick={goToUnipage} >Update information</button>

                < button onClick={deletecontact} >Delete</button>

                { this.state.reroute ?  <Redirect push to={`/one/${info.id}`} /> : <div>...</div> }

            </div>
        )
    }
}

