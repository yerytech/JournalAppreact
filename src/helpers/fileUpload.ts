export const fileUpload = async (file: string) => {
  if (!file) throw new Error("no have file");
  const cloudUrl = "https://api.cloudinary.com/v1_1/dszsas7nq/upload";
  const formData = new FormData();
  formData.append("upload_preset", "journal");
  formData.append("file", file);
  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("La imagen no se pudo subir");

    const cloudResponse = await resp.json();
    return cloudResponse.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
