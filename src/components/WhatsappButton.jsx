// import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import * as React from "react";

export default function WhatsappButton() {
  return (
    <>
      <div className="chatboxClassName">
        <FloatingWhatsApp
          phoneNumber="+91 9974591860"
          accountName="planetinfotechtechnology"
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
      </div>
    </>
  );
}
