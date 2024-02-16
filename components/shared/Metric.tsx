import React from "react";
import Image from "next/image";
import Link from "next/link";
interface MetricProps {
  imgUrl: string;
  title: string;
  alt: string;
  value: string | number;
  href?: string;
  textStyle?: string;
  isAuthor?: boolean;
}
function Metric({
  imgUrl,
  title,
  alt,
  value,
  href,
  textStyle,
  isAuthor,
}: MetricProps) {
  const renderedMetricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`flex items-baseline gap-1 ${textStyle}`}>
        <span>{value}</span>
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}>
          {title}
        </span>
      </p>
    </>
  );
  if (href && isAuthor) {
    return (
      <Link href="/" className="flex-center flex-wrap items-center gap-1">
        {renderedMetricContent}
      </Link>
    );
  }
  return (
    <div className="flex-center flex-wrap items-center gap-1">
      {renderedMetricContent}
    </div>
  );
}

export default Metric;
