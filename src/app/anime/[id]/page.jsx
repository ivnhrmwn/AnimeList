import { getAnimeResponse } from "../../../Libs/api-libs"
import VideoPlayer from "../../../components/Utilities/VideoPlayer"
import Image from "next/image"
import CollectionButton from "../../../components/AnimeList/CollectionButton"
import { authUserSession } from "../../../Libs/auth-libs"
import prisma from "../../../Libs/prisma"
import CommentInput from "../../../components/AnimeList/CommentInput"
import CommentBox from "../../../components/AnimeList/CommentBox"

const Page = async ({params: {id}}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({where: {user_email: user?.email, anime_mal_id: id}})

    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h3>
                {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>}
            </div>
            <div className="pt-4 px-4 gap-2 flex text-color-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Score</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Anggota</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 gap-2 flex sm:flex-nowrap flex-wrap text-color-primary">
                <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover"></Image>
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div className="p-4">
                <h3 className="text-color-primary text-2xl mb-2">Komentar Penonton</h3>
                <CommentBox anime_mal_id={id}/>
                {user &&
                    <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title}/>
                }
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page