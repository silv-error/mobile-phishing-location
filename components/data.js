import image1 from "@/assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import bg from "../assets/images/bg.jpg";

const useData = (arr) => {
  const activities = [
    // {
    //   title: "Contemporary Art Exhibit",
    //   description: "0.8 km away • Culture & Museums",
    //   rating: "4.8",
    //   reviews: 2100,
    //   image: bg,
    //   tags: ["Nature", "Relaxing", "Hidden Gem", "Photography"],
    // },
    {
      title: "Manny's Paradise Farmstay & Resort",
      description: "Block 17 Lot 26B, Skyline Rd, SJDM, Bulacan",
      rating: "4.9",
      reviews: 750,
      image: image1,
      no: "09399149774",
      tags: ["Local Fvaorite", "Budget-Friendly", "Family-Friendly"],
    },
    {
      title: "Local Food Tour",
      description: "1207 Gumaok Main Rd, SJDM, Bulacan",
      rating: "4.9",
      reviews: 1200,
      image: image2,
      no: "09365410584",
      tags: ["Family-Friendly", "Foodie"],
    },
    {
      title: "Acir cafe",
      description: "Flordeliza Rd, SJDM, 3023 Bulacan",
      rating: "4.7",
      reviews: 890,
      image: image3,
      no: "09614044690",
      tags: ["Local Fvaorite", "Budget-Friendly", "Family-Friendly"],
    },
  ];

  if (arr !== undefined) {
    return activities[arr];
  } else {
    return activities;
  }
};

export default useData;
