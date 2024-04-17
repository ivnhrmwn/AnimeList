import AnimeList from "../components/AnimeList";
import Header from "../components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../Libs/api-libs";

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 8)

  return (
    <>
    {/* anime populer */}
      <section>
        <Header title={"Paling Populer"} linkTitle={"Lihat Semua"} linkHref="/populer"/>
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}

export default Page
