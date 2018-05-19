import React from 'react'
import gql from "graphql-tag"
import { client } from './PrismaEndpoint/EndPoint'


export default class Contact extends React.Component{
    state = { name: '', email: '', phone: '' , address: '', city: '', State: '', zip: '', message: '' }



    async componentDidMount(){
        console.log("CDM Yesssss")

            let temp1 = await client.query({
                query: gql`
                    query {
                        user(
                            where: { id: "${this.props.match.params.id}" }
                        ){
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

                `}).then((result) => { return result.data.user } )

            console.clear()
            await console.log("La Data33: ", temp1 )
            await this.setState({ name: temp1.name, email: temp1.email, phone: temp1.phone, address: temp1.address, city: temp1.city, zip: temp1.zip, State: temp1.state, message:temp1.message  })
            // await console.log("Name: ", temp1)
        //     // await this.setState({ name:  })
    }
z
    render(){

        const updaterecord = async () => {
            console.log("Hello world")

            let temp1 = await client.mutate({
                mutation: gql`
                    mutation{
                        updateUser(
                            where: { id: "${this.props.match.params.id}" }
                            data: {
                                name: "${this.state.name}",
                                email: "${this.state.email}",
                                phone: "${this.state.phone}",
                                address: "${this.state.address}",
                                city: "${this.state.city}",
                                zip: "${this.state.zip}",
                                state: "${this.state.State}",
                                message: "${this.state.message}"
                            }){
                            id
                            name
                        }
                    }
                `}).then((result) => { return result.data.createUser } )

            await console.log("User Deleted: ", temp1 )
            await this.setState({ singerName: '', singerId: '' })

        }

        console.log("Test on ONE---22---")


        return(
            <div>
                <br/><br/><br/><br/>

                <div>
                    <h3>Please provide contact info #7</h3>

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
                    <button onClick={updaterecord} >Update Contacts</button>

                </div>
            </div>
        )
    }
}