import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function MainFooter() {
  return (
    <div>
      <div class="row footer-size">
        <div class="col mt-3">
            <div
              class="text-white fw-bolder"
            >
              Company
            </div>
            <a
              href="https://www.spotify.com/gh/about-us/contact/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">
                About
              </span>
            </a>
            <a
              href="https://www.lifeatspotify.com/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">
                Jobs
              </span>
            </a>
            <a
              href="https://newsroom.spotify.com/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">
                For the Record
              </span>
            </a>
        </div>

        <div class="col mt-3">
          <div class="text-white fw-bolder">
            Communities
          </div>
          <a
            href="https://artists.spotify.com/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">For Artists</span>
          </a>
          <a
            href="https://developer.spotify.com/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Developers</span>
          </a>
          <a
            href="https://ads.spotify.com/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Advertising</span>
          </a>
          <a
            href="https://investors.spotify.com/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Investors</span>
          </a>
          <a
            href="https://spotifyforvendors.com/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Vendors</span>
          </a>
        </div>

        <div class="col mt-3">
          <div class="text-white fw-bolder">Useful links</div>
          <a
            href="https://support.spotify.com/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Support</span>
          </a>
          <a
            href="https://www.spotify.com/gh/free/"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Free Mobile App</span>
          </a>
        </div>

        <div class="col mt-3">
          <div class="text-white fw-bolder">Spotify Plans</div>
          <a
            href="https://www.spotify.com/gh/premium/?ref=spotifycom_footer_premium_individual"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Premium Individual</span>
          </a>
          <a
            href="https://www.spotify.com/gh/duo/?ref=spotifycom_footer_premium_duo"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Premium Duo</span>
          </a>
          <a
            href="https://www.spotify.com/gh/family/?ref=spotifycom_footer_premium_family"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Premium Family</span>
          </a>
          <a
            href="https://www.spotify.com/gh/student/?ref=spotifycom_footer_premium_student"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Premium Student</span>
          </a>
          <a
            href="https://www.spotify.com/gh/free/?ref=spotifycom_footer_free"
            class="m-1 d-block artiste text-decoration-none"
          >
            <span class="category text-white">Spotify Free</span>
          </a>
        </div>

        {/* Socail Medai */}
        <div className="col">
          <div className="row gap-2">
            <a
              href="https://www.instagram.com/spotify/"
              rel="noopener noreferrer"
              target="_blank"
              className="social m-1 p-2"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://twitter.com/spotify"
              rel="noopener noreferrer"
              target="_blank"
              className="social m-1 p-2"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://www.facebook.com/spotify"
              rel="noopener noreferrer"
              target="_blank"
              className="social m-1 p-2"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <hr className="artiste my-4" />

      {/* Copyright */}
      <div class="m-4 mb-5">
        <p class="text-start fw-normal text-white">
          &copy; {new Date().getFullYear()} Spotify AB
        </p>
      </div>
    </div>
  );
}

export default MainFooter;
