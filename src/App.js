import "./App.css";
import { useRef, useEffect, useState, useMemo } from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import i18next from "i18next";
import PageletsTalk from "./Components/PageLetsTalk";

function App() {
  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [fourthPage, setFourthPage] = useState(false);
  const [pageArray, setPageArray] = useState([]);
  const [isClickable, setIsClickable] = useState(true);
  const [isEnglish, setIsEnglish] = useState(false);
  const pageContainer = useRef();

  useEffect(() => {
    if (pageContainer.current && pageContainer.current.hasChildNodes()) {
      const newArray = Array.from(pageContainer.current.childNodes);
      setPageArray(newArray);
    }
  }, []);

  const handleLang = (props) => {
    if (props === "fr") {
      setIsEnglish(false);
    } else setIsEnglish(true);
    i18next.changeLanguage(props);
  };

  const memoPageArray = useMemo(() => pageArray, [pageArray]);

  const changeEffect = (id) => {
    if (id === "letstalk") {
      setFirstPage(true);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(false);
    } else if (id === "weare") {
      setFirstPage(false);
      setSecondPage(true);
      setThirdPage(false);
      setFourthPage(false);
    } else if (id === "about") {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(true);
      setFourthPage(false);
    } else if (id === "tamere") {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(true);
    }
  };

  const onClickPage = (el) => {
    console.log(memoPageArray);
    if (!isClickable) return;
    let id = el.target.id;
    const applyEffectToPreviousElements = (el) => {
      const index = memoPageArray.findIndex((element) => element === el.target);
      setIsClickable(false);
      if (index > 0) {
        const previousElements = memoPageArray.slice(0, index);
        previousElements.forEach((element) => {
          element.classList.add("translateAnim");
          setTimeout(() => {
            previousElements.forEach((element) => {
              element.classList.remove("translateAnim");
            });

            memoPageArray.forEach((el) => {
              el.classList.remove("page-1", "page-2", "page-3", "page-4");
            });

            memoPageArray.push(memoPageArray.shift());

            memoPageArray.slice(0, 4).forEach((el, i) => {
              el.classList.add(`page-${i + 1}`);
            });
            setIsClickable(true);
          }, 1000);
        });
      } else if (index === 0) {
        setIsClickable(true);
      } else {
        setIsClickable(true);
      }
    };

    applyEffectToPreviousElements(el);
    changeEffect(id);
  };

  console.log(isClickable);
  return (
    <div ref={pageContainer} className="">
      <div
        className="border drop-shadow-xl page-1 fixed overflow-hidden w-full h-full p-16"
        onClick={(e) => onClickPage(e)}
        id="letstalk"
      >
        <PageletsTalk />
        <p className="absolute top-8 right-5 text-xl text-black textVertical ">
          let's talk
        </p>
        {firstPage && (
          <>
            <FaArrowRotateLeft className="absolute bottom-24 right-4 w-7 h-7 cursor-pointer transition duration-300 ease-in-out " />
            <p className="absolute bottom-44 right-5 text-xl text-black  textVertical ">
              <span
                className={`cursor-pointer ${
                  !isEnglish ? "text-black" : "text-slate-400"
                }`}
                onClick={() => handleLang("fr")}
              >
                fr
              </span>{" "}
              -{" "}
              <span
                className={`cursor-pointer ${
                  isEnglish ? "text-black" : "text-slate-400"
                }`}
                onClick={() => handleLang("en")}
              >
                en
              </span>
            </p>
          </>
        )}

        <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full bg-black"></div>
      </div>

      <div
        className=" border drop-shadow-xl cursor-pointer page-2 yolo2"
        onClick={(e) => onClickPage(e)}
        id="weare"
      >
        <p className="text-center p-24">
          On sait depuis longtemps que travailler avec du texte lisible et
          contenant du sens est source de distractions, et empêche de se
          concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
          sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il
          possède une distribution de lettres plus ou moins normale, et en tout
          cas comparable avec celle du français standard. De nombreuses suites
          logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem
          Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum'
          vous conduira vers de nombreux sites qui n'en sont encore qu'à leur
          phase de construction. Plusieurs versions sont apparues avec le temps,
          parfois par accident, souvent intentionnellement (histoire d'y
          rajouter de petits clins d'oeil, voire des phrases embarassantes).
        </p>

        <p className="absolute top-8 right-5 text-xl text-red-700 textVertical ">
          we are
        </p>
        {secondPage && (
          <>
            <FaArrowRotateLeft className="absolute bottom-24 right-4 w-7 h-7 cursor-pointer  " />
            <p className="absolute bottom-44 right-5 text-xl text-black  textVertical ">
              <span
                className={`cursor-pointer ${
                  !isEnglish ? "text-red-700" : "text-slate-400"
                }`}
                onClick={() => handleLang("fr")}
              >
                fr
              </span>{" "}
              -{" "}
              <span
                className={`cursor-pointer ${
                  isEnglish ? "text-red-700" : "text-slate-400"
                }`}
                onClick={() => handleLang("en")}
              >
                en
              </span>
            </p>
          </>
        )}

        <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full bg-red-700"></div>
      </div>

      <div
        className=" border drop-shadow-xl cursor-pointer page-3 yolo-3"
        onClick={(e) => onClickPage(e)}
        id="about"
      >
        <p className="text-center p-24">
          On sait depuis longtemps que travailler avec du texte lisible et
          contenant du sens est source de distractions, et empêche de se
          concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
          sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il
          possède une distribution de lettres plus ou moins normale, et en tout
          cas comparable avec celle du français standard. De nombreuses suites
          logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem
          Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum'
          vous conduira vers de nombreux sites qui n'en sont encore qu'à leur
          phase de construction. Plusieurs versions sont apparues avec le temps,
          parfois par accident, souvent intentionnellement (histoire d'y
          rajouter de petits clins d'oeil, voire des phrases embarassantes).
        </p>
        <p className="absolute top-8 right-5 text-xl text-blue-700 textVertical ">
          we offer
        </p>
        {thirdPage && (
          <>
            <FaArrowRotateLeft className="absolute bottom-24 right-4 w-7 h-7 cursor-pointer  " />
            <p className="absolute bottom-44 right-5 text-xl text-black  textVertical ">
              <span
                className={`cursor-pointer ${
                  !isEnglish ? "text-blue-700" : "text-slate-400"
                }`}
                onClick={() => handleLang("fr")}
              >
                fr
              </span>{" "}
              -{" "}
              <span
                className={`cursor-pointer ${
                  isEnglish ? "text-blue-700" : "text-slate-400"
                }`}
                onClick={() => handleLang("en")}
              >
                en
              </span>
            </p>
          </>
        )}

        <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full bg-blue-700"></div>
      </div>

      <div
        className="border drop-shadow-xl cursor-pointer page-4 yolo-4"
        onClick={(e) => onClickPage(e)}
        id="tamere"
      >
        <p className="text-center p-24">
          On sait depuis longtemps que travailler avec du texte lisible et
          contenant du sens est source de distractions, et empêche de se
          concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
          sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il
          possède une distribution de lettres plus ou moins normale, et en tout
          cas comparable avec celle du français standard. De nombreuses suites
          logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem
          Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum'
          vous conduira vers de nombreux sites qui n'en sont encore qu'à leur
          phase de construction. Plusieurs versions sont apparues avec le temps,
          parfois par accident, souvent intentionnellement (histoire d'y
          rajouter de petits clins d'oeil, voire des phrases embarassantes).
        </p>
        <p className="absolute top-8 right-5 text-xl text-cyan-400 textVertical ">
          we think
        </p>
        {fourthPage && (
          <>
            <FaArrowRotateLeft className="absolute bottom-24 right-4 w-7 h-7 cursor-pointer " />
            <p className="absolute bottom-44 right-5 text-xl text-black  textVertical ">
              <span
                className={`cursor-pointer ${
                  !isEnglish ? "text-cyan-400" : "text-slate-400"
                }`}
                onClick={() => handleLang("fr")}
              >
                fr
              </span>{" "}
              -{" "}
              <span
                className={`cursor-pointer ${
                  isEnglish ? "text-cyan-400" : "text-slate-400"
                }`}
                onClick={() => handleLang("en")}
              >
                en
              </span>
            </p>
          </>
        )}

        <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full bg-cyan-400"></div>
      </div>
    </div>
  );
}

export default App;
