import { StaticImageData } from "next/image";

export type LeagueStatus = "draft" | "post-draft" | "pre-draft";

export type League = {
  id: string;
  media: string;
  year: number;
  name: string;
  status: {
    value: LeagueStatus;
    label: string;
  };
  image: StaticImageData;
};
