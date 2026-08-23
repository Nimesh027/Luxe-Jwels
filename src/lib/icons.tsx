import {
  CarOutlined,
  RollbackOutlined,
  SafetyCertificateOutlined,
  SafetyOutlined,
  HeartOutlined,
  TeamOutlined,
  CrownOutlined,
  CustomerServiceOutlined,
  EditOutlined,
  GiftOutlined,
  GlobalOutlined,
  SwapOutlined,
  InstagramOutlined,
  PinterestOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import type { FeatureIconKey, SocialLink } from "@/types";

export const featureIconMap: Record<FeatureIconKey, React.ComponentType<{ className?: string }>> = {
  shipping: CarOutlined,
  returns: RollbackOutlined,
  certified: SafetyCertificateOutlined,
  secure: SafetyOutlined,
  care: HeartOutlined,
  trusted: TeamOutlined,
  quality: CrownOutlined,
  support: CustomerServiceOutlined,
  engraving: EditOutlined,
  gift: GiftOutlined,
  worldwide: GlobalOutlined,
  exchange: SwapOutlined,
};

export const socialIconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  instagram: InstagramOutlined,
  pinterest: PinterestOutlined,
  facebook: FacebookOutlined,
  youtube: YoutubeOutlined,
};
