export default function PortfolioPicture({
  className = "",
  image,
  title,
}) {
  const isString = typeof image === 'string';

  if (isString) {
    return (
      <img
        src={image}
        alt={title}
        width="1200"
        height="800"
        loading="lazy"
        decoding="async"
        className={className}
      />
    );
  }

  return (
    <picture>
      <source srcSet={image?.avif} type="image/avif" />
      <source srcSet={image?.webp} type="image/webp" />
      <img
        src={image?.webp}
        alt={title}
        width="1200"
        height="800"
        loading="lazy"
        decoding="async"
        className={className}
      />
    </picture>
  );
}
