"use client";
import { useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";

export default function OrderHuddersfield() {
  useEffect(() => {
    window.onmessage = (event) => {
      if (event.data.hasOwnProperty("frameHeight")) {
        const iframe = document.getElementById(
          "iframe"
        ) as HTMLIFrameElement | null;
        if (iframe && event.data.frameHeight > 50) {
          iframe.style.height = `${event.data.frameHeight}px`;
        }
      }
      if (event.data.hasOwnProperty("openModal")) {
        const {
          menuItemData,
          selectedDeliveryMethod,
          selectedDateTime,
          catMenuId,
          openModal,
        } = event.data;
        const iframeModalContainer = document.getElementById(
          "iframeModalContainer"
        ) as HTMLDivElement | null;
        const iframeModal = document.getElementById(
          "iframeModal"
        ) as HTMLIFrameElement | null;

        if (openModal && iframeModal && iframeModalContainer) {
          iframeModal.contentWindow?.postMessage(
            {
              selectedDeliveryMethod,
              selectedDateTime,
              menuItemData,
              catMenuId,
              openModal,
            },
            "*"
          );
          iframeModalContainer.style.display = "block";
        } else if (iframeModalContainer) {
          iframeModalContainer.style.display = "none";
        }
      }

      if (event.data.hasOwnProperty("addItemToCart")) {
        const { addItemToCart, cartItemNode } = event.data;
        const iframe = document.getElementById(
          "iframe"
        ) as HTMLIFrameElement | null;

        if (addItemToCart && iframe) {
          iframe.contentWindow?.postMessage(
            { cartItemNode, addItemToCart: true },
            "*"
          );
        }

        const iframeModalContainer = document.getElementById(
          "iframeModalContainer"
        ) as HTMLDivElement | null;
        if (iframeModalContainer) {
          iframeModalContainer.style.display = "none";
        }
      }
    };

    return () => {
      window.onmessage = null;
    };
  }, []);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          m: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <iframe
            frameBorder="0"
            id="iframe"
            style={{
              height: "100%",
              width: "100%",
              zIndex: 1,
              minHeight: "700px",
            }}
            src="https://app.eatpresto.co.uk/location/8979294b-91c7-44c3-8486-ea80625b32f1/shop?embedType=WP"
          ></iframe>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "90%",
            zIndex: 2,
            display: "none",
          }}
          id="iframeModalContainer"
        >
          <iframe
            allowFullScreen
            id="iframeModal"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
            }}
            src="https://app.eatpresto.co.uk/location/8979294b-91c7-44c3-8486-ea80625b32f1/itempopupmodal?embedType=WP"
          ></iframe>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
