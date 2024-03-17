const {
  url,
  auth,
  register,
  allImages1080x1920,
  allImages1080x1152,
  postImage1080x1920,
  postImage1080x1152,
  deleteImage1080x1920,
  deleteImage1080x1152
} = {
  url: "http://localhost:8082",
  // url: "http://192.168.100.11:8082",
  auth:"/api/v1/auth",
  register:"/api/v1/users",
  allImages1080x1920: "/api/v1/imagen/allImages1080x1920",
  allImages1080x1152: "/api/v1/imagen/allImages1080x1152",
  postImage1080x1920: "/api/v1/imagen/single1080x1920",
  postImage1080x1152: "/api/v1/imagen/single1080x1152",
  deleteImage1080x1920: "/api/v1/imagen/single1080x1920",
  deleteImage1080x1152: "/api/v1/imagen/single1080x1152",
};

export {
  url,
  auth,
  register,
  allImages1080x1920,
  allImages1080x1152,
  postImage1080x1920,
  postImage1080x1152,
  deleteImage1080x1920,
  deleteImage1080x1152
};
