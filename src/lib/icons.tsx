import {
  ShippingIcon,
  ReturnsIcon,
  CertifiedIcon,
  SecureIcon,
  CareIcon,
  CrownIcon,
  PhoneIcon,
  GiftIcon,
  MapPinIcon,
  DiamondIcon,
  UserIcon,
  InstagramIcon,
  PinterestIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/icons";
import type { FeatureIconKey, SocialLink } from "@/types";

export const featureIconMap: Record<FeatureIconKey, React.ComponentType<{ className?: string }>> = {
  shipping: ShippingIcon,
  returns: ReturnsIcon,
  certified: CertifiedIcon,
  secure: SecureIcon,
  care: CareIcon,
  trusted: UserIcon,
  quality: CrownIcon,
  support: PhoneIcon,
  engraving: DiamondIcon,
  gift: GiftIcon,
  worldwide: MapPinIcon,
  exchange: ReturnsIcon,
};

export const socialIconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  pinterest: PinterestIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
};
