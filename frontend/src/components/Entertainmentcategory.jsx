import React, { useEffect, useState } from "react";
import Action from "../assets/Group 12.png";
import Drama from "../assets/Group 13.png";
import Romance from "../assets/Group 14.png";
import Thriller from "../assets/Group 11.png";
import Western from "../assets/Group 10.png";
import Horror from "../assets/Group 9.png";
import Fantasy from "../assets/Group 6.png";
import Music from "../assets/Group 7.png";
import Fiction from "../assets/Group 8.png";
import "./Entertainment.css";
import { RxCross2 } from "react-icons/rx";

const Entertainmentcategory = () => {
  let [selectedcategories, setSelectedCategories] = useState(0);
  console.log(selectedcategories);
  const [showaction, setShowAction] = useState(false);
  const [showdrama, setShowDrama] = useState(false);
  const [showromance, setShowRomance] = useState(false);
  const [showthriller, setShowThriller] = useState(false);
  const [showwestern, setShowWestern] = useState(false);
  const [showhorror, setShowHorror] = useState(false);
  const [showfantasy, setShowFantasy] = useState(false);
  const [showmusic, setShowMusic] = useState(false);
  const [showfiction, setShowFiction] = useState(false);

  const [hideaction, setHideAction] = useState(false);
  const [hidedrama, setHideDrama] = useState(false);
  const [hideromance, setHideRomance] = useState(false);
  const [hidethriller, setHideThriller] = useState(false);
  const [hidewestern, setHideWestern] = useState(false);
  const [hidehorror, setHideHorror] = useState(false);
  const [hidefantasy, setHideFantasy] = useState(false);
  const [hidemusic, setHideMusic] = useState(false);
  const [hidefiction, setHideFiction] = useState(false);

  const [category, setSelectedCategory] = useState([""]);
  const [hidecategory, setHideSelectedCategory] = useState("");

  console.log(hidecategory);
  const handleHideCategory = (e) => {
    console.log(e.target.attributes.value.textContent);
    setHideSelectedCategory(e.target.attributes.value.textContent);
  };

  const hideSelectedButton = () => {
    console.log("hsb");
    if (hidecategory === "Action") {
      console.log("ac");
      //   setHideSelectedCategory("");
      setSelectedCategories(selectedcategories - 1);
      setShowAction(false);
    } else if (hidecategory === "Drama") {
      setShowDrama(false);
      setSelectedCategories(selectedcategories - 1);
    } else if (hidecategory === "Romance") {
      setShowRomance(false);
      setSelectedCategories(selectedcategories - 1);
    } else if (hidecategory === "Thriller") {
      setShowThriller(false);
      setSelectedCategories(selectedcategories - 1);
    } else if (hidecategory === "Western") {
      setShowWestern(false);
      setSelectedCategories(selectedcategories - 1);
    } else if (hidecategory === "Horror") {
      setShowHorror(false);
      setSelectedCategories(selectedcategories - 1);
    } else if (hidecategory === "Fantasy") {
      setShowFantasy(false);
      setSelectedCategories(selectedcategories - 1);
    } else if (hidecategory === "Music") {
      setShowMusic(false);
      setSelectedCategories(selectedcategories - 1);
    } else if (hidecategory === "Fiction") {
      setShowFiction(false);
      setSelectedCategories(selectedcategories - 1);
    }
  };

  useEffect(() => {
    hideSelectedButton();
  }, [hidecategory]);

  const handleSelectedCategory = (e) => {
    console.log(e.target.alt);
    setSelectedCategory(e.target.alt);
    setSelectedCategories(selectedcategories + 1);
  };

  const showSelectedButton = () => {
    console.log("ssb");
    if (category === "Action") {
      console.log("ac");
      setShowAction(true);
    } else if (category === "Drama") {
      setShowDrama(true);
    } else if (category === "Romance") {
      setShowRomance(true);
    } else if (category === "Thriller") {
      setShowThriller(true);
    } else if (category === "Western") {
      setShowWestern(true);
    } else if (category === "Horror") {
      setShowHorror(true);
    } else if (category === "Fantasy") {
      setShowFantasy(true);
    } else if (category === "Music") {
      setShowMusic(true);
    } else if (category === "Fiction") {
      setShowFiction(true);
    }
  };

  useEffect(() => {
    showSelectedButton();
  }, [category]);
  return (
    <div className="page-categories">
      <div className="layout">
        <div>
          <div>
            <p id="superapp">Super app</p>
          </div>
          <div>
            <p id="choose-entertainment">Choose your entertainment category</p>
          </div>
          <div className="selected-buttons-categories">
            {showaction ? (
              <button>
                Action
                <span>
                  <RxCross2
                    size={"1rem"}
                    color="black"
                    onClick={handleHideCategory}
                    value="Action"
                  />
                </span>
              </button>
            ) : (
              ""
            )}
            {showdrama ? (
              <button>
                Drama
                <span>
                  <RxCross2
                    size={"1rem"}
                    color="black"
                    onClick={handleHideCategory}
                    value="Drama"
                  />
                </span>
              </button>
            ) : (
              ""
            )}

            {showromance ? (
              <button>
                Romance
                <span>
                  <RxCross2
                    size={"1rem"}
                    color="black"
                    onClick={handleHideCategory}
                    value="Romance"
                  />
                </span>
              </button>
            ) : (
              ""
            )}
            {showthriller ? (
              <button>
                Thriller
                <span>
                  <RxCross2
                    size={"1rem"}
                    color="black"
                    onClick={handleHideCategory}
                    value="Thriller"
                  />
                </span>
              </button>
            ) : (
              ""
            )}
            {showwestern ? (
              <button>
                Western
                <span>
                  <RxCross2
                    size={"1rem"}
                    color="black"
                    onClick={handleHideCategory}
                    value="Western"
                  />
                </span>
              </button>
            ) : (
              ""
            )}
            {showhorror ? (
              <button>
                Horror
                <span>
                  <RxCross2
                    size={"1rem"}
                    color="black"
                    onClick={handleHideCategory}
                    value="Horror"
                  />
                </span>
              </button>
            ) : (
              ""
            )}
            {showfantasy ? (
              <button>
                Fantasy
                <span>
                  <RxCross2
                    size={"1rem"}
                    color="black"
                    onClick={handleHideCategory}
                    value="Fantasy"
                  />
                </span>
              </button>
            ) : (
              ""
            )}
            {showmusic ? (
              <button>
                Music
                <span>
                  <RxCross2
                    size={"1rem"}
                    color="black"
                    onClick={handleHideCategory}
                    value="Music"
                  />
                </span>
              </button>
            ) : (
              ""
            )}
            {showfiction ? (
              <button>
                Fiction
                <span>
                  <RxCross2
                    size={"1rem"}
                    color="black"
                    onClick={handleHideCategory}
                    value="Fiction"
                  />
                </span>
              </button>
            ) : (
              ""
            )}
            {selectedcategories < 3 ? (
              <p id="minimum-three-category">
                Minimum 3 Categories is Required
              </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="film-category">
          <div>
            <img src={Action} alt="Action" onClick={handleSelectedCategory} />
          </div>
          <div>
            <img src={Drama} alt="Drama" onClick={handleSelectedCategory} />
          </div>
          <div>
            <img src={Romance} alt="Romance" onClick={handleSelectedCategory} />
          </div>
          <div>
            <img
              src={Thriller}
              alt="Thriller"
              onClick={handleSelectedCategory}
            />
          </div>
          <div>
            <img src={Western} alt="Western" onClick={handleSelectedCategory} />
          </div>
          <div>
            <img src={Horror} alt="Horror" onClick={handleSelectedCategory} />
          </div>
          <div>
            <img src={Fantasy} alt="Fantasy" onClick={handleSelectedCategory} />
          </div>
          <div>
            <img src={Music} alt="Music" onClick={handleSelectedCategory} />
          </div>
          <div>
            <img src={Fiction} alt="Fiction" onClick={handleSelectedCategory} />
          </div>
        </div>
      </div>
      <div className="button-nextpage">
        <button>Next Page</button>
      </div>
    </div>
  );
};

export default Entertainmentcategory;
