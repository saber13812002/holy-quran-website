import { ChangeEvent, useState } from "react";
import SourateLists from "../components/Home/SourateLists";
import SearchInput from "../components/SearchInput";
import { useTheme } from "../hooks";
import { useGetMetaQuranData } from "../hooks/useQueryApi";
import { SurahsReference } from "../types/quran";

type Props = {};

export default function Home(props: Props) {
  const { isDark } = useTheme();
  const [search, setSearch] = useState("");
  const updateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const { data: QuranMetaData, isLoading, isError } = useGetMetaQuranData();
  const filtredMetaData = QuranMetaData?.surahs.references.filter((surah) =>
    surah.englishName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className=" px-8 md:px-12 xl:px-32 dark:bg-[#1D2121] bg-white">
      <div id="main" className="flex justify-center items-center mb-8">
        <svg
          fill={!isDark ? "black" : "white"}
          viewBox="0 0 513 294"
          width="350"
          height="350"
          className="-my-5 toggle"
        >
          <path d="M128 293.2c0-.6.5-2.2 1.1-3.4.8-1.9 4.4-3.6 18.7-8.6 9.7-3.4 18-6.2 18.4-6.2.4 0 .3 1.1-.4 2.5-.7 1.6-2.7 3-6 4.1-3.9 1.3-21.2 8.1-30.5 12.1-.7.3-1.3 0-1.3-.5zm194.1-.2c-6-1.4-11.3-6.1-14.9-13-1.9-3.6-3.5-6.6-3.7-6.8-.2-.2-3.9.8-8.4 2.2-24.1 7.6-44.5 4.5-57.4-8.7-5.9-6-11.1-15.6-12.8-23.8-2.1-9.9.5-31.6 4.7-38.9l1.5-2.5-.5 3c-.3 1.7-1.3 6.4-2.2 10.5-4.6 21.4 5.3 39.1 25.7 46 5.6 1.9 8 2.2 18.9 1.8 8.8-.3 15.1-1.2 21.1-2.8l8.6-2.3.7-6.7c.6-7.2 4.6-22.2 7.2-27.2 1.2-2.3 1.6-6.7 1.7-18.7.2-16-4.1-84.2-5.4-86.2-.5-.8-3-.2-8.4 2-4.2 1.8-7.9 3-8.2 2.8-.2-.3 3.5-2.7 8.2-5.3l8.7-4.9-.6-6.5c-.3-3.6-1-15-1.6-25.5-.6-10.4-1.5-21.1-2.1-23.6-.9-3.8-.7-5.4 1.2-10.5 1.2-3.2 2.5-6.3 2.9-6.7.7-.8 12.6 29 13.7 34.4.7 3.8-.8 3.7-4.2-.2-1.4-1.7-2.8-3-3-2.8-.7.8 1.9 35.9 2.7 35.9 1.3 0 11.6-6.7 16.6-10.8l4.3-3.5-3-2.5c-4.5-3.5-5.4-5.6-4.1-9.7 1.4-4.2 7.2-9.5 10.6-9.5 3.7 0 4.9 3.5 3.5 10.1-1.2 5.2-1.1 5.5 1.3 7.4 2.4 1.9 2.4 2.1.9 5.2s-1.6 3.2-3.9 1.6c-2.3-1.5-2.6-1.4-8.3 4-3.3 3-8.7 7.1-12 9.2-3.6 2.1-6.1 4.3-6.1 5.3 0 .9.9 13.9 2 28.7 3.2 44.3 2.5 58.8-3.5 73.8-3.3 8.5-7.1 23.4-8 32l-.7 6.9 2.4-.7c4.4-1.4 20.3-9.7 27.1-14.3 7.3-4.8 18.1-14.3 19.8-17.3.7-1.4-.2-4.1-4-11.7-2.7-5.4-6.4-14.1-8.2-19.3-1.8-5.2-3.9-10.2-4.8-11.2-1.3-1.5-1.3-2.8-.3-8.9.7-4 1.5-7.4 1.8-7.7.6-.6 17.4 16 17.4 17.3 0 .5-2 .6-4.4.3l-4.5-.6 1.6 3.7c.8 2 3 6.7 4.8 10.3 7 13.9 7.9 23.3 3.4 35.4-3.4 9.1-19.5 23-39.2 33.9l-6.9 3.8 2.8 2.9c5.9 6.1 15.2 7.3 27.1 3.3 13.8-4.6 36.2-18.8 48.8-30.7l7.5-7.2-.6-5c-.8-7.1-3.1-14.9-6.6-22.9l-3-6.9 1.7-6.4c1-3.5 2.1-6.6 2.6-6.8.4-.3 1.7 1.2 2.9 3.5 3.1 6.1 5.7 7.4 14.1 6.8 3.9-.3 7.5-1 8.1-1.6.6-.6.6-2.2-.1-4.8-2.9-10.3-.4-21 7.4-31.8 5.3-7.4 10.3-11.6 14-11.6 5.3 0 10.5 10.7 10.5 21.6 0 6.5-2.2 15.4-4.9 19.9-1.1 2-1.9 4.1-1.6 4.6.4.5 5.4.9 11.3.9 11.5 0 16.8-1.5 20.7-6 3.1-3.4 3-12.6-.4-61-1.7-23.9-3.5-51.2-4-60.6-.4-9.3-1.3-17.9-1.9-19.1-.7-1.3-.8-3.1-.3-4.9 1.5-5 4.3-11.4 5-11.4.7 0 10.4 25 12.7 32.7 1.5 5 .5 5.5-3.3 1.7-1.4-1.4-2.8-2.3-3.1-1.9-.3.3.9 21.8 2.7 47.8 3.5 49.4 3.6 60.7.6 72.2-3.6 13.7-10.1 23-18.1 26.1-5.8 2.2-20 1.3-29.8-2l-6.9-2.4-7.6 4.1c-6 3.3-8.6 4.1-12.7 4.1h-5.1l-.6 10.1c-1.2 19.1-4.7 27.6-15.7 37.7-14.1 13-33.1 24.4-46.8 27.9-7.9 2-11.6 2.2-17.1.9zM434 189.9c5.1-3 9-7 9-9 0-3.1-3.9-12.5-5.9-14.3-2.5-2.3-4.4-1.3-11 5.9-6 6.7-7 9.4-4.4 12.8 1.7 2.3 7.2 6.7 8.3 6.7.3 0 2.1-1 4-2.1zM340.8 83.4c.4-3-2.1-5.8-4.6-5-2.8.9-2.8 4.1 0 6 2.7 1.9 4.2 1.6 4.6-1zM202.3 288.1c-.6-2.7-2.2-7-3.5-9.7-2-4.2-2.7-4.9-4.9-4.6-1.7.1-3.3-.6-4.9-2.3-2.3-2.5-2.3-2.6-.7-6 2.1-4.4 4.5-4.5 8.6-.5 3 3.1 7.1 12.3 7.1 16.2 0 4.1 1.6.4 3.4-7.7 1.9-8.3 4.6-13.9 7.1-14.9 3.3-1.2 6.5 2 6.5 6.7 0 3.3-1 4-3.1 2.1-2.3-2.1-5.1-1.4-6.6 1.6-.6 1.4-2.1 6.8-3.2 12-2.6 11.9-4.2 13.8-5.8 7.1z"></path>
          <path d="M93 281.9c-7.1-1.4-12-5.5-16-13.3l-3.5-6.9v-14.1c0-11.6.5-15.5 2.3-22 2.1-7.3 9.9-25.6 10.9-25.6.8 0 11.3 7.2 11.9 8.1 1.1 1.8 2.2.8 4.3-4.1 1.4-3.3 2.6-4.8 3.4-4.4.7.4 3.8 2.5 7 4.6 6.5 4.4 6.5 4.7 2 12.5l-2.5 4.2-6.6-4.4-6.7-4.5-1.3 2.8c-.8 1.5-2 3.7-2.8 4.9l-1.4 2.2-5.7-3.9c-3.1-2.2-6-4-6.4-4-1 0-4.9 16.7-5.6 24.4-.8 8.7 1.6 15.4 7.6 21.6 7.9 8.2 17.3 8.7 33.8 1.8 12.6-5.2 33.4-19.2 44.1-29.6 4.9-4.7 5.2-5.4 5.2-9.9 0-6.3-2.3-15.2-6-23.2-1.7-3.5-3-7-3-7.7 0-2.6 3.3-13.4 4.1-13.4.4 0 1.8 1.9 3.1 4.2 2.8 5.1 5.8 6.8 11.8 6.8 8 0 19-6.7 19-11.5 0-3.1-5.1-10.6-11.7-17.2-3.2-3.2-16.8-14.3-30.2-24.7l-24.3-18.9.6-6c.9-8.4 3.6-16.4 6.5-19.4 10.5-10.4 67.3-38.4 101.6-49.9 7.2-2.4 14-4.4 15.3-4.4 2.6 0 2.8-1.4.8-8.9-1.3-4.9-1.2-5.9.4-10.7 1.1-3 2.3-6.2 2.9-7.1 1.1-2.1 1.5-1.5 9.2 19.1 5.1 13.4 5.9 17.2 3.5 16.3-1.1-.4-1.9 1-3.2 5-1.7 5.4-1.7 6.8 1.1 46.6 2.9 42.7 2.9 53 0 64.2-3.5 13.3-11 24.2-18.2 26.6-4.7 1.5-14 .5-19.7-2.2-2.5-1.1-8-5.1-12.2-8.7-15.9-13.8-22.4-18.7-22.4-16.9 0 .1.9 2.6 2 5.5 4 10.6 1.9 21.7-5.6 30.1-6.1 6.8-10.5 9.4-15.8 9.3l-4.3-.1-.7 9c-1.5 20.3-4.3 27.8-14.1 37.3-20.6 20.1-48.9 33.5-64.5 30.5zm158.6-110.4c2.7-.8 6.3-2.6 7.9-3.9l3-2.4v-14.4c-.1-15.6-4.4-79.8-5.5-81.1-1-1.2-15.7 16.1-19.4 22.8l-1.6 3 .6-3c1.1-5 7.4-15.6 14.1-23.4 6.6-7.8 7.5-10.7 5.3-16.5-.8-2.2-1.3-2.4-4.7-1.9-19.3 2.8-90.8 35.5-113 51.7-2.3 1.7-4.2 3.3-4.3 3.6 0 .3 2.6 1.8 5.8 3.4 22 10.7 48 27.3 69.7 44.6 16.4 13.1 20.2 15.4 27.5 17.4 7.1 1.9 8.6 1.9 14.6.1z"></path>
          <path d="M234.7 161.5c-3.6-3.5-3.1-13.1 1.3-24.8 1.2-3.2 2.3-5.7 2.5-5.5.1.2-.7 4-1.8 8.6-1.5 6.3-1.8 9.2-1.1 12 1.2 4.8 4 5.4 7.1 1.6l2.3-2.9-1 3.5c-1.2 4.2-4.2 8.4-6.2 8.8-.9.2-2.3-.4-3.1-1.3zm-49.8-35c-1.5-.8-2.9-2.1-3.2-2.8-.4-1.2.2-1.3 3.1-.6 5.5 1.3 30.2-2.9 30.2-5.1 0-1.7-4.5-2.2-14.1-1.5-11.4.8-13.9.3-13.9-2.8 0-5.8 12.1-17.7 18-17.7 1.7 0 2.1.5 1.8 2.8-.3 2.3-.7 2.7-3 2.4-2.8-.3-9.5 3.5-13.2 7.7-2.6 2.9-1.2 3.3 12.4 2.9l11.4-.3 1.5 2.7c1.4 2.4 1.4 3-.1 6-1.5 3.2-2.2 3.6-10.5 5.6-10.2 2.5-16.7 2.7-20.4.7zm242.7 150.4c-.2-.8-.9-3.4-1.6-5.9-.7-2.5-2.1-6.4-3.2-8.8-1.8-3.8-2.4-4.2-4.7-3.7-2 .4-3.3 0-5-1.9l-2.3-2.5 1.9-3.3c1-1.8 2.7-3.4 3.7-3.6 3.1-.6 8.4 6.3 10.8 14.1l2.2 7.2 1.3-5.5c2.6-11.1 4.3-15.7 6.7-17.9 2-1.9 2.8-2.1 4.5-1.2 2.9 1.6 4.3 4.6 3.5 7.6-.7 2.9-1.6 3.1-3.4 1a4 4 0 0 0-3.4-1.3c-2.3.3-3.9 4.6-7 18.3-1.7 7.1-3.2 10-4 7.4zm45.6-20.7c-2.3-1.5-3.2-7.3-2.2-13.9 1-5.8 4.8-17.9 5.5-17.1.1.2-.6 4-1.8 8.4-2.3 9.6-1.8 14.9 1.5 16 1.7.5 2.7 0 4.5-2.2l2.3-2.9-1 3.5c-1.8 6.5-5.7 10.1-8.8 8.2zm-428.9-3.4c-3.1-3.9-1.9-16.9 2.3-25.3 1.3-2.7 2.2-4.1 1.8-3-.3 1.1-1.3 5.4-2.2 9.6-1.3 6.1-1.4 8.2-.4 10.3 1.3 3 3.7 3.3 6.5.9 2-1.8 2-1.7 1.3 1.2-1.1 4.7-3.4 7.5-6 7.5-1.3 0-2.8-.6-3.3-1.2zm154-11.3c-2.7-1.9-3.5-6.7-2.3-14 .9-5.3 4.8-17 5.5-16.3.2.2-.5 3.5-1.5 7.3-2.4 9.1-2.4 12.7-.1 15.6l1.9 2.4 2.6-2.4c2.9-2.7 3.3-1.7 1.2 3.4-1.9 4.4-4.6 5.9-7.3 4zm306.1-16c.5-10.8-.5-30.5-4.4-84.5-1-15.1-2.4-36.3-3-47-.6-10.7-1.6-21-2.1-22.8-.9-2.6-.6-4.5 1.1-9.7 1.2-3.6 2.5-6.7 3-7 1.2-.7 14 32.5 14 36.4 0 1-1.2.3-3.5-1.9-1.9-1.8-3.7-3.1-3.9-2.9-.3.3 1.1 23 3 50.4 4.7 66.4 4.3 80.8-2.6 95.7l-2 4.3.4-11zm-237.6 5.7c-.3-2.1-1.9-6.5-3.4-9.8-2.5-5.1-3.2-5.9-5.5-5.6-1.6.1-3.3-.6-4.8-2.2-2.1-2.3-2.2-2.5-.7-5.4 2.1-4.2 3.1-4.5 6.5-2.8 3.2 1.7 9.1 12.2 9.1 16.2 0 5.4 1.8 2.6 3.9-6.1 2.5-10.3 5-14.5 8.6-14.5 3 0 5.7 4.2 4.9 7.5-.7 2.9-1.6 3.1-3.4 1-.7-.8-2.1-1.5-3.2-1.5-2.4 0-4.1 3.9-6.3 15-2.5 12.4-4.8 15.6-5.7 8.2zm101.9-22.7c.3-10.4-.3-26.1-2.1-51.5-1.4-20.1-3.3-48.2-4.1-62.5-.9-14.3-2-28.9-2.6-32.5-.6-3.6-1-7.4-1-8.5 0-3.1 4.3-13.7 5.2-12.8 1 1 10.3 25.3 12.2 32.1.9 2.8 1.3 5.2.9 5.2-.3 0-2.1-1.5-4-3.2l-3.5-3.3.7 12c.4 6.6 1.8 27.8 3.3 47 3.3 45 3.4 66.1.5 76.7-1.2 4.3-3 9.7-4.1 12l-1.9 4.3.5-15zm-352.1 8.1C11 214.5 5.3 208.5 2.9 202c-3.9-10.3-.7-28.5 8.1-45.9 3.5-7 3.5-7.1 1.5-7.1-2.3 0-3.5-3.4-3.5-9.8 0-5.8 2.9-17.2 5.1-20.2.9-1.2 1-1.1.4.5-2 6-3.5 15.8-2.7 18.8 1.1 4.3 4.2 4.7 7.2 1l2.2-2.8-.7 3c-.4 1.7-1.6 4.5-2.6 6.3-1.1 1.9-4.4 10.7-7.4 19.6C5.8 179.2 5 182.8 5 188.9c0 12.3 4.3 16.8 15 15.8 8-.7 12.1-3.1 26.7-15.8 7-6.1 16.6-13.8 21.3-17.2 10.1-7.4 27.4-16.4 33-17.3 2.2-.4 4-.9 4-1.3 0-.3-1.3-5.1-2.9-10.6-1.6-5.5-3.4-13.4-4-17.5-.7-4.1-1.7-8.7-2.2-10.1-.8-2.1-.6-3.7 1.1-7.8 1.3-2.8 2.5-5.1 2.9-5.1 1.1 0 13.4 21 12.8 21.7-.4.3-1.9.1-3.3-.6-1.5-.6-2.9-1-3.1-.7-.6.6 2.3 13.1 4.4 19.1.8 2.2 2.6 5.2 4.1 6.8 3.1 3.3 11.1 7.9 16.4 9.7 2.1.6 4.2 1.8 4.6 2.6.7 1.3-.5 13.1-1.4 14.2-.1.2-3.2-.8-6.8-2.2-8.8-3.5-19.9-4.4-28.3-2.3-12.8 3.3-22.4 9.3-46.7 28.9-21.9 17.7-27.6 20.4-36 17.4zm269.3-52.2-6.7-4.6 2.8-6.2c1.6-3.3 3.4-6 4-5.8.7.1 3.9 2.1 7.2 4.3 5 3.4 5.8 4.4 5.2 6.2-.6 1.9-5.3 10.7-5.7 10.7-.1 0-3.2-2.1-6.8-4.6z"></path>
          <path d="M43.8 140.5c-.3-5.5-1.8-15.9-3.3-23.2-2.7-13-2.8-13.1-.9-17 1.2-2.4 3.2-4.4 5.7-5.6 4-2 4.1-3.7.2-3.7-1.4 0-2.9.9-3.5 2.1-.7 1.1-1.4 1.9-1.6 1.6-.9-.9 1.6-8.5 3.2-10.2 1.9-1.9 1.2-5.6-2.7-14.4-2.5-5.6-3.1-6.3-5.2-5.7-1.6.4-3.1-.2-5-2l-2.8-2.6 1.9-3.1c1-1.8 2.7-3.3 3.9-3.5 3.2-.5 8.7 6.7 10.8 13.9.9 3.4 1.9 5.9 2.1 5.6.3-.2 1.4-4.2 2.5-8.8C51 55.7 54.8 49 57.4 49c1.9 0 5.6 4.4 5.6 6.6 0 1-.5 2.6-1 3.4-.9 1.3-1.2 1.3-2.4-.2-1.4-1.9-5.1-2.4-6.1-.9-1.4 2.4-6.4 24.6-5.6 24.9 2.1.7 9.1 6.3 10 8 1.9 3.5-1.8 7.6-8.5 9.4-9.8 2.8-9.7 2.7-6.8 13.8 2.8 10.6 4.2 27.5 2.7 33-.8 3-1 2.2-1.5-6.5zm378.1-5.3c-1.9-1.5-4.6-3.4-6-4.3l-2.4-1.6 2.9-6.2c1.6-3.3 3.3-6.1 3.6-6.1.4 0 3.5 2 7.1 4.5l6.4 4.4 2.6-5 2.5-5 6.5 4.3c3.5 2.4 6.5 5 6.7 5.8.1.8-1.1 3.8-2.8 6.7l-3 5.2-6.6-4.5c-3.6-2.6-6.7-4.5-6.8-4.3-.2.2-1.3 2.3-2.5 4.7-1.2 2.3-2.7 4.2-3.4 4.1-.6 0-2.8-1.2-4.8-2.7zm-353.3-.4c-2.9-4.2-1.9-14.1 2.6-25.6 2.8-7.1 3.2-6.1.7 1.8-2.4 7.8-2.3 16.7.3 18.4 1.3.8 2.3.5 4.3-1.4 2.9-2.7 2.9-2.6 1.4 2.1-2.3 6.8-6.4 8.9-9.3 4.7zm319.9-17.5c.6-.6 6.4-4.2 13-8C413 102.5 426 93.5 426 92.2c0-.3-1.6-2-3.5-3.8-4.1-3.7-4.5-7-1.5-11.9 2.6-4.2 8.4-7.4 10.8-5.9 2 1.3 2.7 6.8 1.4 11.6-.8 2.9-.6 3.6 1.6 5.4 2.4 2 2.5 2.3 1.3 5.3-1.5 3.5-2.3 3.8-4.1 1.6-.7-.8-1.5-1.5-1.9-1.5-.4 0-3.4 2.6-6.7 5.8-3.3 3.1-8.5 7.2-11.6 9-7.8 4.6-25.9 11.9-23.3 9.5zM430 80.5c0-4-1.7-5.2-4.9-3.5-2.9 1.5-2.6 3.7.7 5.4 3.9 2.2 4.2 2 4.2-1.9zm-34.4.3c-2.9-4.1-1.6-15.8 2.8-26 2.4-5.6 2.6-4.6.5 2.3-1.9 6-2.5 14.2-1.3 17.3.9 2.3 5.1 2 6.4-.5 1.7-3.1 2.2-1.7.9 2.2-2.3 6.8-6.4 8.9-9.3 4.7zM94 79c-2-2-2.2-3-1.8-10.4.4-5.1 1.4-10.3 2.8-13.9 1.3-3.1 2.4-5.6 2.6-5.4.2.1-.4 3-1.2 6.2-2 7.5-2.2 14.8-.5 16.9 1.9 2.2 2.8 2 5.8-1.1l2.6-2.8-.8 2.5c-1.3 4.5-3 7.3-5.2 8.7-1.9 1.3-2.4 1.2-4.3-.7zm40-19.8c0-4.7 1.6-5.6 35.3-18 18.3-6.7 33.5-12.2 33.9-12.2.4 0 .3 1.1-.3 2.4-.8 1.8-4 3.4-13.7 7.1-10.2 3.8-48.5 18.9-53.9 21.2-.7.3-1.3 0-1.3-.5zm298.6-7.8c-.9-.8-1.6-2.9-1.6-4.7 0-4.6 2.9-15.4 6-22.3 3.8-8.6 7-10.2 3.5-1.8-1.4 3.5-1.4 3.5 2.5 7.4 4.2 4.2 4.8 6.3 3.9 12.9-1.1 7.8-9.9 13-14.3 8.5zm9.5-7.1c4-2.4 3.6-4.8-1.1-7.9-5-3.3-6.1-2.5-6.8 4.5-.4 5-.4 5.1 2.3 5.1 1.5 0 4-.8 5.6-1.7zm-320.9-4.6c-1.2-4-3.2-8.8-4.3-10.6-1.6-2.7-2.2-3.1-3.5-2.1-1.2 1-1.9.9-3.7-.6-3.5-3-3.6-3.5-1.9-7.1 2-4.1 4.8-4.3 8.5-.5 3 3.1 6.6 10.7 6.7 13.9 0 5.1 1.9 2.7 3.5-4.5 2.8-12.4 6-17.1 10.5-15.7 2.7.9 4.4 5.8 3 8.5l-1.2 2.2-1.9-2.1c-1.1-1.2-2.4-2.1-2.9-2.1-1.9 0-4.1 5-6 14-1.2 5.1-2.6 10.3-3.3 11.6-1.2 2.2-1.4 2-3.5-4.9zm98-4c-2.1-2.5-2.2-6.4-.3-14 2.5-9.5 6.8-19.4 8.8-20.1 1.1-.5 1.3-.2.8 1.1-2.9 7.2-2.9 7.3.3 10.6 5.3 5.7 6.1 8.8 4.1 16-1.6 5.9-10.6 10.1-13.7 6.4zm9.6-7.7c1.7-1.1 3.2-2.4 3.2-2.9 0-1.3-7.1-7.1-8.6-7.1-2.2 0-4.5 9.6-2.7 11.3 1.2 1.3 4.8.7 8.1-1.3zm57.3 7.6c-3-3.6-2.2-13.8 1.9-24.9 1.2-3.2 2.3-5.7 2.5-5.5.2.2-.5 3.5-1.6 7.3-2.1 7.8-2.4 12.7-.9 15.6 1.4 2.6 4.5 2.4 6.4-.3 1.4-1.9 1.6-2 1.6-.5 0 2.2-2.8 7.9-4.4 8.9-1.8 1.2-4.3.9-5.5-.6zm43.7-7.8c-.3-2.9-1.8-6.6-3.6-9.5-2.1-3.3-2.9-5.6-2.5-7.1.7-2.8 1.1-2.8 6 .8 6.7 4.9 14.2 7 25.2 7 12.1 0 19.9-1.9 32.4-7.6 5.9-2.7 11-4.4 12.5-4.2 2.3.3 2.7.8 3 4.1.3 3.9-1.6 7.1-10.9 17.7l-3 3.5 1.6-3.4c.9-1.8 3.5-5.3 5.7-7.7 4.2-4.5 4.5-7.4 1-7.4-1.1 0-4.9 1.3-8.5 3-13 5.9-23.1 8.3-35.2 8.3-8.9.1-12-.3-16.2-2l-5.3-2.1-.1 3.6c0 2.1-.4 4.6-.8 5.7-.6 1.5-.9.8-1.3-2.7z"></path>
        </svg>
      </div>
      <SearchInput updateSearch={updateSearch} />
      <SourateLists
        MetaQueryData={filtredMetaData as SurahsReference[]}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}
