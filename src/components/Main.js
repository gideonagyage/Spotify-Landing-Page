import React from "react";
import Button from "./Button";
import Card from "./Card";
import MainFooter from "./MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Main() {
  // Sample data for cards (replace with your actual data)
  const cardData = [
    {
      imgSrc:
        "https://i.scdn.co/image/ab676161000051740203df702d0792712e78cf2e",
      imgShape: "rounded-circle",
      artiste: "Asake",
      detail: "Artist",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616100005174e8f6fa4ea297ec278a894e93",
      imgShape: "rounded-circle",
      artiste: "Black Sheriff",
      detail: "Artist",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616100005174a48397e590a1c70e2cda7728",
      imgShape: "rounded-circle",
      artiste: "Chris Brown",
      detail: "Artist",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616100005174cbf45277dd4c6ccdca02de65",
      imgShape: "rounded-circle",
      artiste: "Stonebwoy",
      detail: "Artist",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d00001e024a5e51c27adb813b52e28a80",
      imgShape: "rounded-3",
      artiste: "The Villian I Never Was",
      detail: "Black Sheriff",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d00001e0219df46a8fa3d972ff4c84275",
      imgShape: "rounded-3",
      artiste: "HEIS",
      detail: "Rema",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d00001e027e2b5827ffc185e44c3e6ef0",
      imgShape: "rounded-3",
      artiste: "Work Of Art",
      detail: "Asake",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d00001e02fa3c203a330255e3def27404",
      imgShape: "rounded-3",
      artiste: "Kweku Jesus",
      detail: "Kweku Smoke",
    },
    {
      imgSrc:
        "https://seeded-session-images.scdn.co/v2/img/540/r/artist/7b6IvXftHBf6fYfFRsEhQT/en",
      imgShape: "rounded-3",
      artiste: "King Paluta Radio",
      detail: "With KWESI AMEWUGA, Banzy Banero, Oseikrom Sikanii and more",
    },
    {
      imgSrc:
        "https://seeded-session-images.scdn.co/v2/img/540/r/artist/4tIKaxUmpXzshok2yCnwdf/en-GB",
      imgShape: "rounded-3",
      artiste: "King Promise Radio",
      detail: "With Kuami Eugene, KiDi, Kelvyn Boy and more",
    },
    {
      imgSrc:
        "https://seeded-session-images.scdn.co/v2/img/540/r/artist/2LiqbH7OhqP0yuaG8VL1wJ/en-GB",
      imgShape: "rounded-3",
      artiste: "Black Sheriff Radio",
      detail: "With Sarkodie, Stonebwoy, Kwesi Arthur and more",
    },
    {
      imgSrc:
        "https://seeded-session-images.scdn.co/v2/img/540/r/artist/6yCYm86uDrfUteHNs6zcg1/en-GB",
      imgShape: "rounded-3",
      artiste: "Olivetheboy Radio",
      detail: "With Lasmid, Lil Emm, D Jay and more",
    },
    {
      imgSrc:
        "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
      imgShape: "rounded-3",
      artiste: "Top Songs - Global",
      detail:
        "Your weekly update of the most played tracks right now - Global.",
    },
    {
      imgSrc:
        "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg",
      imgShape: "rounded-3",
      artiste: "Top Songs - USA",
      detail: "Your weekly update of the most played tracks right now - USA.",
    },
    {
      imgSrc:
        "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
      imgShape: "rounded-3",
      artiste: "Top 50 - Global",
      detail: "Your daily update of the most played tracks right now - Global.",
    },
    {
      imgSrc:
        "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg",
      imgShape: "rounded-3",
      artiste: "Top 50 - USA",
      detail: "Your daily update of the most played tracks right now - USA.",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f0000000222c3c39dda5e68d6cac4c28c",
      imgShape: "rounded-3",
      artiste: "New Music Friday",
      detail: " ",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f00000002f358f6e57a4bf67935faadc7",
      imgShape: "rounded-3",
      artiste: "Feel Good Friday",
      detail: " ",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f0000000292a5f210bd09c11661cf9f70",
      imgShape: "rounded-3",
      artiste: "New Joints",
      detail: " ",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67706f00000002518096c62a9e453db38093db",
      imgShape: "rounded-3",
      artiste: "Happy Beats",
      detail: " ",
    },
  ];

  return (
    <div className="col mt-2">
      <div className="card content-bg vh-100">
        {/* Header */}
        <div className="card-header header-bg sticky-top">
          <div className="row">
            <div className="text-start col-2">
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className="arrow"
                size="2x"
              />
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="arrow"
                size="2x"
              />
            </div>
            <div className="text-end col">
              <span className=" fw-medium artiste header-bg mx-4 txt-inc">
                Sign up{" "}
              </span>
              <Button text="Log in" padding="py-2 px-4" />
            </div>
          </div>
        </div>

        <div className="card-body main-scrollable">
          {/* Artistes  */}
          <div className="py-2">
            <span className="category mx-2 fs-4 text-white fw-bold">
              Popular artists
            </span>

            <div className="row overflow-auto">
              <div className="d-flex flex-nowrap">
                {cardData.slice(0, 4).map((card, index) => (
                  <div key={index} className="col">
                    <Card
                      imgSrc={card.imgSrc}
                      imgShape={card.imgShape}
                      artiste={card.artiste}
                      detail={card.detail}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Albums */}
          <div className="mt-4 pb-2">
            <span className="category mt-4 mx-2 fs-4 text-white fw-bold">
              Popular albums
            </span>

            <div className="row overflow-auto">
              <div className="d-flex flex-nowrap">
                {cardData.slice(4, 8).map((card, index) => (
                  <div key={index} className="col">
                    <Card
                      imgSrc={card.imgSrc}
                      imgShape={card.imgShape}
                      artiste={card.artiste}
                      detail={card.detail}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Radio */}
          <div className="mt-4 pb-2">
            <span className="category mt-4 mx-2 fs-4 text-white fw-bold">
              Popular radio
            </span>

            <div className="row overflow-auto">
              <div className="d-flex flex-nowrap">
                {cardData.slice(8, 12).map((card, index) => (
                  <div key={index} className="col">
                    <Card
                      imgSrc={card.imgSrc}
                      imgShape={card.imgShape}
                      artiste={card.artiste}
                      detail={card.detail}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="mt-4 pb-2">
            <span className="category mt-4 mx-2 fs-4 text-white fw-bold">
              Featured Charts
            </span>

            <div className="row overflow-auto">
              <div className="d-flex flex-nowrap">
                {cardData.slice(12, 16).map((card, index) => (
                  <div key={index} className="col">
                    <Card
                      imgSrc={card.imgSrc}
                      imgShape={card.imgShape}
                      artiste={card.artiste}
                      detail={card.detail}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Playlists */}
          <div className="mt-4 pb-2">
            <span className="category mt-4 mx-2 fs-4 text-white fw-bold">
              Spotify Playlists
            </span>

            <div className="row overflow-auto">
              <div className="d-flex flex-nowrap">
                {cardData.slice(16, 20).map((card, index) => (
                  <div key={index} className="col">
                    <Card
                      imgSrc={card.imgSrc}
                      imgShape={card.imgShape}
                      artiste={card.artiste}
                      detail={card.detail}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <MainFooter />
        </div>
      </div>
    </div>
  );
}

export default Main;
