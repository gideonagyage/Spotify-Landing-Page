import React from "react";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="col mt-2">
      <div className="card content-bg">
        <div className="mx-4 mt-4">
          <a draggable="false" href="/" target="_blank" rel="noopener">
            <svg
              role="img"
              aria-hidden="false"
              height="25"
              className="m-1 s-icon"
            >
              <title>Spotify</title>
              <path
                d="M13.427.01C6.805-.253 1.224 4.902.961 11.524.698 18.147 5.853 23.728 12.476 23.99c6.622.263 12.203-4.892 12.466-11.514S20.049.272 13.427.01m5.066 17.579a.717.717 0 0 1-.977.268 14.4 14.4 0 0 0-5.138-1.747 14.4 14.4 0 0 0-5.42.263.717.717 0 0 1-.338-1.392c1.95-.474 3.955-.571 5.958-.29 2.003.282 3.903.928 5.647 1.92a.717.717 0 0 1 .268.978m1.577-3.15a.93.93 0 0 1-1.262.376 17.7 17.7 0 0 0-5.972-1.96 17.7 17.7 0 0 0-6.281.238.93.93 0 0 1-1.11-.71.93.93 0 0 1 .71-1.11 19.5 19.5 0 0 1 6.94-.262 19.5 19.5 0 0 1 6.599 2.165c.452.245.62.81.376 1.263m1.748-3.551a1.147 1.147 0 0 1-1.546.488 21.4 21.4 0 0 0-6.918-2.208 21.4 21.4 0 0 0-7.259.215 1.146 1.146 0 0 1-.456-2.246 23.7 23.7 0 0 1 8.034-.24 23.7 23.7 0 0 1 7.657 2.445c.561.292.78.984.488 1.546m13.612-.036-.832-.247c-1.67-.495-2.14-.681-2.14-1.353 0-.637.708-1.327 2.264-1.327 1.539 0 2.839.752 3.51 1.31.116.096.24.052.24-.098V6.935c0-.097-.027-.15-.098-.203-.83-.62-2.272-1.07-3.723-1.07-2.953 0-4.722 1.68-4.722 3.59 0 2.157 1.371 2.91 3.626 3.546l.973.274c1.689.478 1.998.902 1.998 1.556 0 1.097-.831 1.433-2.07 1.433-1.556 0-3.457-.911-4.35-2.025-.08-.098-.177-.053-.177.062v2.423c0 .097.01.141.08.22.743.814 2.52 1.53 4.59 1.53 2.546 0 4.456-1.485 4.456-3.784 0-1.787-1.052-2.865-3.625-3.635m10.107-1.76c-1.68 0-2.653 1.026-3.219 2.052V9.376c0-.08-.044-.124-.124-.124h-2.22c-.079 0-.123.044-.123.124V20.72c0 .08.044.124.124.124h2.22c.079 0 .123-.044.123-.124v-4.536c.566 1.025 1.521 2.034 3.237 2.034 2.264 0 3.89-1.955 3.89-4.581s-1.644-4.545-3.908-4.545m-.654 6.986c-1.185 0-2.211-1.167-2.618-2.458.407-1.362 1.344-2.405 2.618-2.405 1.211 0 2.051.92 2.051 2.423s-.84 2.44-2.051 2.44m40.633-6.826h-2.264c-.08 0-.115.017-.15.097l-2.282 5.483-2.29-5.483c-.035-.08-.07-.097-.15-.097h-3.661v-.584c0-.955.645-1.397 1.476-1.397.496 0 1.035.256 1.415.486.089.053.15-.008.115-.088l-.796-1.901a.26.26 0 0 0-.124-.133c-.389-.203-1.025-.38-1.644-.38-1.875 0-2.954 1.432-2.954 3.254v.743h-1.503c-.08 0-.124.044-.124.124v1.768c0 .08.044.124.124.124h1.503v6.668c0 .08.044.123.124.123h2.264c.08 0 .124-.044.124-.123v-6.668h1.936l2.812 6.11-1.512 3.325c-.044.098.009.142.097.142h2.414c.08 0 .116-.018.15-.097l4.997-11.355c.035-.08-.009-.141-.097-.141M54.964 9.04c-2.865 0-4.837 2.025-4.837 4.616 0 2.573 1.971 4.616 4.837 4.616 2.856 0 4.846-2.043 4.846-4.616 0-2.591-1.99-4.616-4.846-4.616m.008 7.065c-1.37 0-2.343-1.043-2.343-2.45 0-1.405.973-2.449 2.343-2.449 1.362 0 2.335 1.043 2.335 2.45 0 1.406-.973 2.45-2.335 2.45m33.541-6.334a1.24 1.24 0 0 0-.483-.471 1.4 1.4 0 0 0-.693-.17q-.384 0-.693.17a1.24 1.24 0 0 0-.484.471q-.174.302-.174.681 0 .375.174.677.175.3.484.471t.693.17.693-.17.483-.471.175-.676q0-.38-.175-.682m-.211 1.247a1 1 0 0 1-.394.39 1.15 1.15 0 0 1-.571.14 1.16 1.16 0 0 1-.576-.14 1 1 0 0 1-.391-.39 1.14 1.14 0 0 1-.14-.566q0-.316.14-.562t.391-.388.576-.14q.32 0 .57.14.253.141.395.39t.142.565q0 .312-.142.56m-19.835-5.78c-.85 0-1.468.6-1.468 1.396s.619 1.397 1.468 1.397c.866 0 1.485-.6 1.485-1.397 0-.796-.619-1.397-1.485-1.397m19.329 5.19a.31.31 0 0 0 .134-.262q0-.168-.132-.266-.132-.099-.381-.099h-.588v1.229h.284v-.489h.154l.374.489h.35l-.41-.518a.5.5 0 0 0 .215-.084m-.424-.109h-.26v-.3h.27q.12 0 .184.036a.12.12 0 0 1 .065.116.12.12 0 0 1-.067.111.4.4 0 0 1-.192.037M69.607 9.252h-2.263c-.08 0-.124.044-.124.124v8.56c0 .08.044.123.124.123h2.263c.08 0 .124-.044.124-.123v-8.56c0-.08-.044-.124-.124-.124m-3.333 6.605a2.1 2.1 0 0 1-1.053.257c-.725 0-1.185-.425-1.185-1.362v-3.484h2.211c.08 0 .124-.044.124-.124V9.376c0-.08-.044-.124-.124-.124h-2.21V6.944c0-.097-.063-.15-.15-.08l-3.954 3.113c-.053.044-.07.088-.07.16v1.007c0 .08.044.124.123.124h1.539v3.855c0 2.087 1.203 3.06 2.918 3.06.743 0 1.46-.194 1.884-.442.062-.035.07-.07.07-.133v-1.68c0-.088-.044-.115-.123-.07"
                fill="#FFFFFF"
                transform="translate(-0.95,0)"
              ></path>
            </svg>
          </a>
        </div>
        <ul className="mx-4 mb-4">
          <li className="">
            <a
              draggable="false"
              aria-label="Home"
              aria-current="page"
              className="text-white"
              href="/"
            >
              <svg className="s-icon my-2" viewBox="0 0 24 24">
                <path
                  d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
                  fill="#FFFFFF"
                ></path>
              </svg>
              <span className="text-white fw-bold">Home</span>
            </a>
          </li>
          <li className="KAcp7QFuEYSouAsuC5i_ InvalidDropTarget">
            <a
              draggable="false"
              aria-label="Search"
              className=" text-decoration-none"
              href="https://open.spotify.com/search"
            >
              <svg className="s-icon" viewBox="0 0 24 24">
                <path
                  d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"
                  fill="#b3b3b3"
                ></path>
              </svg>
              <span className="artiste fw-bold">Search</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="card content-bg mt-2">
        <div class="col my-4">
          <div class="row mx-3 mb-4">
            <div className="col text-start artiste fw-bold pointer">
              <span aria-hidden="true">
                <svg aria-hidden="true" viewBox="0 0 24 24" class="s-icon">
                  <path
                    d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                    fill="#b3b3b3"
                  ></path>
                </svg>
              </span>
              Your Library
            </div>
            <span className="col-1 text-end mx-3 artiste fw-bold pointer">
              <svg viewBox="0 0 24 24" class="s-icon">
                <path
                  d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"
                  fill="#b3b3b3"
                ></path>
              </svg>
            </span>
          </div>

          <div class="side-scrollable">
            <section class="card rounded-4 m-2 mx-3 side-in-card-bg">
              <div class="p-4">
                <span class="text-white fw-bold fs-6">
                  Create your first playlist <br />
                </span>
                <span class="text-white fs-6">It’s easy, we’ll help you</span>
              </div>
              <div class="mx-3 mb-3">
                <Button padding="px-2 txt-sm" text="Create playlist" />
              </div>
            </section>
            <section class="card rounded-4 m-2 mx-3 side-in-card-bg">
              <div class="p-4">
                <span class="text-white fw-bold fs-6">
                  Let’s find some podcasts to follow <br />
                </span>
                <span class="text-white fs-6">
                  We’ll keep you updated on new episodes
                </span>
              </div>
              <div class="mx-3 mb-3">
                <Button padding="px-2 txt-sm" text="Browse podcasts" />
              </div>
            </section>
          </div>

          <div>
            {/* SideBar Footer */}
            <div>
              <div class="m-4">
                <a
                  href="https://www.spotify.com/gh/legal/"
                  class="mx-1 ft-txt text-decoration-none"
                >
                  Legal
                </a>
                <a
                  href="https://www.spotify.com/gh/safetyandprivacy/"
                  class="mx-1 ft-txt text-decoration-none"
                >
                  Safety&nbsp;&amp;&nbsp;Privacy&nbsp;Center
                </a>
                <a
                  href="https://www.spotify.com/gh/legal/privacy-policy/"
                  class="mx-1 ft-txt text-decoration-none"
                >
                  Privacy&nbsp;Policy
                </a>
                <br/>
                <a
                  href="https://www.spotify.com/gh/legal/cookies-policy/"
                  class="mx-1 ft-txt text-decoration-none"
                >
                  Cookies
                </a>
                <a
                  href="https://www.spotify.com/gh/legal/privacy-policy/#s3"
                  class="mx-1 ft-txt text-decoration-none"
                >
                  About Ads
                </a>
                <a
                  href="https://www.spotify.com/gh/accessibility/"
                  class="mx-1 ft-txt text-decoration-none"
                >
                  Accessibility
                </a>
                <a
                  href="https://www.spotify.com/legal/cookies-policy/"
                  class="m-1 d-block ft-txt text-decoration-none"
                >
                  <div className="category">Cookies</div>
                </a>
              </div>
            </div>

            <div className="text-start mx-4 my-5">
              <div className="btn text-white content-bg rounded-5 fw-medium border-white btn-inc px-2">
                <FontAwesomeIcon icon={faGlobe} className="mx-2" />
                English
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
