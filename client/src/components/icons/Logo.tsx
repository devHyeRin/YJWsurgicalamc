import LogoImg from "../../assets/icons/Logo.png"; // Logo.tsx 기준 경로

export function ClinicLogo({ size = 20, className }: Props) {
  return (
    <img
      src={LogoImg}
      alt="병원"
      width={size}
      height={size}
      className={className}
      style={{ display: "block" }}
    />
  );
}