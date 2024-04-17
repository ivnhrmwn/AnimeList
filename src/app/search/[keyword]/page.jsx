import AnimeList from "../../../components/AnimeList";
import Header from "../../../components/AnimeList/Header";
import { getAnimeResponse } from "../../../Libs/api-libs";

const Page = async ({params}) => {
  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
  // const searchAnime = await response.json()

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
    {/* anime populer */}
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}

export default Page
