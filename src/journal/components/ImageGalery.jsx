import { ImageListItem, ImageList } from "@mui/material";
// @ts-ignore
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const ImageGallery = () => {
  const { active } = useSelector(
    // @ts-ignore
    (state) => state.journal
  );
  const { imageUrls } = active || { imageUrls: [] };
  return (
    <ImageList
      sx={{ width: "100%", height: 500 }}
      cols={4}
      rowHeight={200}
    >
      {imageUrls?.length > 0 &&
        imageUrls.map((image) => (
          <ImageListItem key={image}>
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="imagen de la nota"
              loading="lazy"
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
};


ImageGallery.propTypes={
  images:PropTypes.array
}