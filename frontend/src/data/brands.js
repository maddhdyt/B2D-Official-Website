import { remoteAssets } from "../assets/remoteAssets";

export const brands = remoteAssets.brandLogos.map((asset, index) => ({
  name: `Brand Logo ${index + 1}`,
  ...asset,
}));
