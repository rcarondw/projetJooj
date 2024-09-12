import React from "react";
import { useTranslation } from "react-i18next";

export default function PageletsTalk() {
  const { t } = useTranslation();
  return (
    <div className=" overflow-y-scroll h-full">
      <div className="w-full  ">
        <p className="text-4xl"> {t("lets_talk_p1")}</p>
        <p className="text-4xl my-2">{t("lets_talk_p2")}</p>
        <p className="text-4xl">{t("lets_talk_p3")}</p>
      </div>
      <div className="w-full h-2/3   flex flex-col justify-center items-center">
        <textarea
          className="border-2 border-black rounded-t-md w-full h-[70%] text-3xl p-4"
          placeholder={t("lets_talk_placeholder")}
          id="mailbox"
          onResize="none"
        ></textarea>
        <input
          type="email"
          className="w-full h-[10%] border-b-2 border-l-2 border-r-2 border-black rounded-b-md px-4 "
          placeholder={t("lets_talk_urmail")}
        />
      </div>
      <div className="w-full flex justify-center items-center   h-1/3">
        <div className=" h-full w-1/2">
          <p className="text-xl underline"> {t("lets_talk_biography")}</p>
          <p className="text-xl p-4">{t("lets_talk_biography_p")}</p>
          <p className="text-xl p-4">{t("lets_talk_biography_p2")}</p>
        </div>
        <div className=" h-full w-1/2 px-6">
          <p className="text-xl underline pb-4">Contact:</p>
          <p className="text-xl">Géraldine Hatchuel</p>
          <p className="text-xl">67, rue Lamark 75018 Paris</p>
          <p className="text-xl">hello@choregraphy.co</p>
        </div>
      </div>
    </div>
  );
}
