import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function FullWidthImage(props) {
  const {
    height = '400px',
    img,
    position, 
    width,
    style,
    imgPosition = "top left",
  } = props;
	const imageF = getImage(img)
  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
          ...position
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              width:width,
              height: height,
              ...style,
            }}
            // You can optionally force an aspect ratio for the generated image
            
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={imageF}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              width:width,
              height: height,
              ...style,
            }}
            layout="fullWidth"
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.string,
  subheading: PropTypes.string,
};
