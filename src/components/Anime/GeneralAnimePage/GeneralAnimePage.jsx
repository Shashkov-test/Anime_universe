import React, { useState } from "react";
import MainSection from "../MainAnimeSection/MainAnimeSection";
import { Helmet } from "react-helmet";

import { FaInfoCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

import "./GeneralAnimePage.scss";

const GeneralPage = ({
  selectedAnimeType,
  handleTitlesChange,
  selectedAnime,
}) => {
  const [alertMessege, setAlertMessege] = useState(true);

  const onRemoveAlertMessege = () => {
    setAlertMessege(false);
  };

  return (
    <>
      <Helmet>
        <meta name="Anime Universe" content="Anime Universe" />
        <title>Anime Universe</title>
      </Helmet>
      <div className="generalPage">
        <div className="generalPage__container">
          <div className="generalPage-wrapper">
            {alertMessege && (
              <div className="generalPage__alert">
                <div className="generalPage__alert-noticeIcon">
                  <i>
                    <FaInfoCircle />
                  </i>
                </div>

                <p className="generalPage__alert-info">
                  <b>
                    Because of some problems on the server side, the content is
                    displayed in the maximum amount without the possibility to
                    upload more :(
                  </b>
                </p>

                <div
                  type="button"
                  onClick={onRemoveAlertMessege}
                  className="generalPage__alert-btn"
                >
                  <i>
                    <TiDelete />
                  </i>
                </div>
              </div>
            )}

            <MainSection
              selectedAnimeType={selectedAnimeType}
              handleTitlesChange={(titles) => handleTitlesChange(titles)}
              selectedAnime={selectedAnime}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralPage;
