import ChatForum from '@/components/chatForum';
import { currentUser } from '@clerk/nextjs/server'

export default async function Page({ params }) {
    const user = await currentUser()
    const slug = (await params).slug
    const decodedSlug = decodeURIComponent(slug) //URI shortner
    return <div>
        <p>Discuss about: {decodedSlug}</p>
        <ChatForum slug={decodedSlug} clerkUser={{id:user.id,name:user.name,token:user.publicMetadata.token}}/>
        </div>
}