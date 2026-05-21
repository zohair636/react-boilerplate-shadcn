import type { CommonImageProps } from "./common-image.types";

const CommonImage = ({
  src,
  alt,
  loading = "lazy",
  fetchPriority = "auto",
  width,
  height,
  ...rest
}: CommonImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      {...rest}
    />
  );
};

export default CommonImage;
