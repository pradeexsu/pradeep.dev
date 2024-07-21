"use client";

import useSWR from "swr";
import { SiSpotify } from "react-icons/si";

export default function SpotifyPlaying() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data } = useSWR("/api/spotify", fetcher);
  return (
    <main className="flex items-center justify-start">
      <a
        target="_blank"
        rel="noopener noreferer"
        href={
          data?.isPlaying
            ? data.songUrl
            : "https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig"
        }
        className="relative flex w-64 sm:w-80  items-start space-x-4 rounded-md p-5 transition-shadow hover:shadow-md"
      >
        <div className="w-16">
          {data?.isPlaying ? (
            <img
              className="w-16 shadow-xl grayscale hover:grayscale-0"
              src={data?.albumImageUrl}
              alt={data?.album}
            />
          ) : (
            <SiSpotify size={45} className="hover:text-[#1ED760]" />
          )}
        </div>

        <div className="flex-1">
          <p className="component font-bold" title={data?.title}>
            {data?.isPlaying ? data.title : "Not Listening"}
          </p>
          <p className="font-dark text-xs" title={data?.artist}>
          {data?.isPlaying ? data.artist : "Spotify"}
          </p>
          {data?.isPlaying && <SiSpotify size={14} className="text-[#1ED760] mt-[1px]" />}
        </div>
      </a>
    </main>
  );
}
