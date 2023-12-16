import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        // async redirect({url, baseUrl}){
        //     console.log(url, baseUrl)
        //     return url.startsWith(baseUrl) ? url : baseUrl + '/home';
        // }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};
