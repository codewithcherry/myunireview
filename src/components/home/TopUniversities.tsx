import React from "react";
import UniversityCard from "@/components/home/UniversityCard";
import { HashIcon } from "lucide-react";

const topUniversities = [
  // USA Universities
  {
    title: "Harvard University",
    cover:
      "https://assets.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
    logo: "https://static.wixstatic.com/media/b2923a_4aa10a2914dd4cfcb911f55a4da8cf02~mv2.png/v1/fill/w_220,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harvard_shield_conformity_wreath.png",
    country: "United States",
    location: "Cambridge, MA",
    ranking: 1,
    established: 1636,
    programsCount: 370,
    studentsCount: 23100,
  },
  {
    title: "Massachusetts Institute of Technology",
    cover:
      "https://www.mit.edu/files/images/201807/15656704711_00457bd2c9_b_1.jpg",
    logo: "https://brand.mit.edu/sites/default/files/styles/image_text_2x/public/2023-08/MIT-logo-red-textandimage.png?itok=RNoAwZvy",
    country: "United States",
    location: "Cambridge, MA",
    ranking: 2,
    established: 1861,
    programsCount: 350,
    studentsCount: 11500,
  },
  {
    title: "Stanford University",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMnshMQvnl1eL2mILZc1zRY4a_vxkU_3F17w&s",
    logo: "https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png",
    country: "United States",
    location: "Stanford, CA",
    ranking: 3,
    established: 1885,
    programsCount: 200,
    studentsCount: 17000,
  },

  // UK Universities
  {
    title: "University of Oxford",
    cover:
      "https://oxford.tours/wp-content/uploads/2022/10/courtyard-oxford-university.jpg",
    logo: "https://e7.pngegg.com/pngimages/178/554/png-clipart-university-college-oxford-collegiate-university-scholarship-oxford-university-logo-thumbnail.png",
    country: "United Kingdom",
    location: "Oxford",
    ranking: 4,
    established: 1096,
    programsCount: 350,
    studentsCount: 24400,
  },
  {
    title: "University of Cambridge",
    cover:
      "https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsm33CKo5uDuq6A9A6nSD-qQEhAEFvoVew-w&s",
    country: "United Kingdom",
    location: "Cambridge",
    ranking: 5,
    established: 1209,
    programsCount: 300,
    studentsCount: 22000,
  },
  {
    title: "Imperial College London",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Z3iOqW5qY-MR2u9OI32PBUMjlVQg8d2wag&s",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shield_of_Imperial_College_London.svg/1200px-Shield_of_Imperial_College_London.svg.png",
    country: "United Kingdom",
    location: "London",
    ranking: 6,
    established: 1907,
    programsCount: 250,
    studentsCount: 19000,
  },

  // Canadian Universities
  {
    title: "University of Toronto",
    cover:
      "https://d3d0lqu00lnqvz.cloudfront.net/media/media/UofT_cmh2315fl.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/640px-Utoronto_coa.svg.png",
    country: "Canada",
    location: "Toronto, ON",
    ranking: 7,
    established: 1827,
    programsCount: 700,
    studentsCount: 93000,
  },
  {
    title: "University of British Columbia",
    cover:
      "https://images.shiksha.com/mediadata/images/1533551492phpLKGGFI_g.jpg",
    logo: "https://research-software-directory.org/image/rpc/get_image?uid=e10bea1ea683932f3685641c40686b77daa93a57",
    country: "Canada",
    location: "Vancouver, BC",
    ranking: 8,
    established: 1908,
    programsCount: 500,
    studentsCount: 66000,
  },
  {
    title: "McGill University",
    cover: "https://grantme.com/wp-content/uploads/2021/09/mcgill.jpeg",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png",
    country: "Canada",
    location: "Montreal, QC",
    ranking: 9,
    established: 1821,
    programsCount: 400,
    studentsCount: 40000,
  },
];

const TopUniversities = () => {
  return (
    <section className="w-full py-12  dark:bg-zinc-900 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="flex justify-center items-center text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            <HashIcon className="text-indigo-500 w-6 h-6 sm:w-8 sm:h-8 mr-2" />
            World's Top Universities
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:text-xl sm:mt-4">
            Discover the leading institutions shaping the future of education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topUniversities.map((uni, index) => (
            <UniversityCard key={index} university={uni} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-800">
            View All Universities
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopUniversities;
