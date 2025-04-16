import { League } from "@/types/league";
import image1 from "@/assets/images/image-1.png";
import image2 from "@/assets/images/image-2.png";
import image3 from "@/assets/images/image-3.png";

export const initialLeagues: League[] = [
  {
    id: "1",
    name: "St. Louis Pro Season Points League",
    media: "ESPN",
    year: 2023,
    image: image1,
    status: {
      value: "draft",
      label: "Draft Live",
    },
  },
  {
    id: "2",
    name: "Washington Pro Season Points League",
    media: "ESPN",
    year: 2023,
    status: {
      value: "pre-draft",
      label: "Pre-Draft",
    },
    image: image2,
  },
  {
    id: "3",
    name: "New York Pro H2H Points PPR League",
    media: "ESPN",
    year: 2023,
    status: {
      value: "draft",
      label: "Draft Live",
    },
    image: image3,
  },
  {
    id: "4",
    name: "Washington Pro Season Points League",
    media: "ESPN",
    year: 2023,
    status: {
      value: "draft",
      label: "Draft Live",
    },
    image: image2,
  },
  {
    id: "5",
    name: "New York Pro H2H Points PPR League",
    media: "ESPN",
    year: 2023,
    status: {
      value: "post-draft",
      label: "Post-Draft",
    },
    image: image3,
  },
];
