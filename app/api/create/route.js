import { StreamChat } from "stream-chat"
// import { clerkClient } from "@clerk/nextjs/dist/types/server";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "hzyhksqcnpsp";
const api_secret = "twkgtkrpakg39qth8gegkdgkqhz4judbx5sgppqkpq7ubjyz2fvprctgq8m9m9mv";
// const user_id = "user_2rmlE5VnGyqOe3B0Q0fSFbjQOmj";
//const dummy_user_id = "dummy_user_id"


//Webhook make a POST request in given localhost:3000/api/create end point

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret)
  const user = await request.json()
  //create user token
  const token = serverClient.createToken(user.data.id);
  // console.log(token)

  const client = await clerkClient();
  await serverClient.upsertUser({id:user.data.id})

  await client.users.updateUserMetadata(user.data.id, {
    privateMetadata: {
      token:token,
    },
  })

  // Give access to this user for all chats
  const slugs = ["Quant-Finance","Python","JavaScript","Quantitative-Development","Machine-Learning","Data-Science","Financial-Mathematics","Finacial-modelling","Optimisation"]
  slugs.forEach(async(item)=>{
    const channel = serverClient.channel('messaging', item, {
      image: 'https://getstream.io/random_png/?name=react',
      name: 'Discussion forum',
      created_by_id: user.data.id
    });
    await channel.create()
    channel.addMembers([user.data.id])
  })
  
  console.log("A new user has been created",user)
  return Response.json({ message: 'Hello World' })
}  

 


