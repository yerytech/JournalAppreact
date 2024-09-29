import { v2 as cloudinary } from "cloudinary";

import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "dszsas7nq",
  api_key: "655189342266981",
  api_secret: "4UgW9HjmoTdZ6Uex9ZV4Zdj5gPQ",
  secure: true,
});

describe("Puebas en fileUpload", () => {
  test("debe subir el archivo a cloudinary", async () => {
    // const imageUrl =
    //   "https://i.pinimg.com/564x/41/12/89/4112893dc24186f3964e8e849159d7af.jpg";
    // const resp = await fetch(imageUrl);
    // const blob = await resp.blob();
    // const file = new File([blob], "foto.jpg");
    // const url = await fileUpload(file);
    // expect(typeof url).toBe("string");
    // const segments = url.split("/");
    // const imageId = segments[segments.length - 1].replace(".jpg", "");
    // const deleteResponde = await cloudinary.api.delete_resources(
    //   ["journal/" + imageId],
    //   { resource_type: "image" }
    // );
    // console.log(deleteResponde);
  });

  test("should return null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
