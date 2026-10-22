import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

function ImageLightbox({ children }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  const openImage = (image) => {
    if (!image) return;

    const src = image.currentSrc || image.src;

    if (!src) return;

    setSelectedImage({
      src,
      alt: image.alt || "Jattari image",
    });
  };

  const handleImageClick = (event) => {
    // Do nothing while lightbox is open
    if (event.target.closest("[data-lightbox-overlay]")) {
      return;
    }

    /*
      CASE 1:
      Click anywhere inside a button/card that contains an image.
      This is mainly for Gallery.
    */
    const clickableCard = event.target.closest(
      "button, [data-image-card]"
    );

    if (clickableCard) {
      const imageInsideCard = clickableCard.querySelector("img");

      if (imageInsideCard) {
        event.preventDefault();
        openImage(imageInsideCard);
        return;
      }
    }

    /*
      CASE 2:
      Normal direct image click on other pages.
    */
    const image = event.target.closest("img");

    if (image) {
      event.preventDefault();
      openImage(image);
    }
  };

  return (
    <>
      <div onClick={handleImageClick}>
        {children}
      </div>

      {selectedImage && (
        <div
          data-lightbox-overlay
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute right-5 top-5 z-[100000] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
            aria-label="Close image"
          >
            <X size={23} />
          </button>

          {/* IMAGE AREA */}
          <div
            className="relative flex max-h-[92vh] max-w-[95vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[94vw] rounded-xl object-contain shadow-2xl"
            />

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs text-white/80 backdrop-blur-md">
              <ZoomIn size={14} />
              <span>Click outside or press Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageLightbox;