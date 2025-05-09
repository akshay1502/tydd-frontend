import { FixedPackage, LastMinutePackage, Package } from "@/payload-types";
type CollectionSlug = "packages" | "fixed-packages" | "last-minute-packages";

export const getDetailPage = async (collection: CollectionSlug, destination: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${collection}?where[destination][equals]=${destination}`
  );
  const res = await result.json();
  return res?.docs[0] as Package | LastMinutePackage | FixedPackage;
};

export const getPackages = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/packages?sort=-order`);
  const res = await result.json();
  return res?.docs as Package[];
};

export const getInternationalPackages = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/packages?where[type][equals]=international&sort=-order`
  );
  const res = await result.json();
  return res?.docs as Package[];
};

export const getPopularPackages = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/packages?where[is_popular][equals]=true&sort=-popular_order`
  );
  const res = await result.json();
  return res?.docs as Package[];
};

export const getFixedPackages = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/fixed-packages?sort=-order`
  );
  const res = await result.json();
  return res?.docs as FixedPackage[];
};

export const getLastMinutePackages = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/last-minute-packages?sort=-order`
  );
  const res = await result.json();
  return res?.docs as LastMinutePackage[];
};

export const getHomeData = async () => {
  // get the home page data
  const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/home`);
  const res = await result.json();

  return res;
};

export const getAllPackagesTestimonials = async () => {
  // get the All Packages testimonial data [domestic, international, cruise] data
  const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/home`);
  const res = await result.json();

  return res;
};
