import ApolloClient from "apollo-boost"

const client = new ApolloClient({ uri: "https://us1.prisma.sh/public-valianthunter-958/contact/dev" })

export { client }